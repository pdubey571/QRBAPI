const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../models");
const express = require('express');

const redis = require('ioredis');
const client = redis.createClient('6379', '127.0.0.1');
const Validator = require('validator');
const isEmpty = require('is-empty');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const userMessages = require("../constants/constants");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const pinValidation = require("../validation/pinValidation");
const { sendEmail } = require('../commons/helper');
const verifyPassword = require("../validation/resetpassword");
const userInfoValidation = require("../validation/user-info");
const { upload } = require('../commons/fileupload');
const user = require('../models/user');
const HttpError = require('../errors/HttpError');
const configUrls = require("../constants/constants");

const uploadFolder = path.join(__dirname, '../', "public", "welcome-assets");



client.on('connect', () => {
    console.log('connected to redis successfully!');
})


async function sendRegistrationPin(req, res, next) {
    const errors = {};
    if (isEmpty(req.body.email)) {
        errors.email = "Email/Phone field is required";
    }
    if (Object.entries(errors).length !== 0) {
        res.status(400).json({
            error: true,
            message: errors,
        });
    }
    const pin = Math.floor(1000 + Math.random() * 9000);
    await client.set(req.body.email.toString(), pin.toString(), 'ex', 300);
    if (!Validator.isEmail(req.body.email)) {
        const accountSid = userMessages.twilloParams.ACCOUNT_SID;
        const authToken = userMessages.twilloParams.AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: userMessages.messages.otp_phone.replace('___otp___', pin),
                messagingServiceSid: userMessages.twilloParams.SERVICE_SID,
                to: req.body.email.toString()
            })
            .then(message => {
                console.log(message.sid);
                res.status(200).json({
                    error: false,
                    message: userMessages.messages.success_pin,
                });
            }

            )
            .done();
    } else {
        const mailRes = await sendEmail(req.body.email.toString(), userMessages.messages.otp_mail_subject, userMessages.messages.otp_email.replace('___otp___', pin))

        if (mailRes.accepted) {
            res.status(200).json({
                error: false,
                message: userMessages.messages.success_pin,
            });
        } else {
            res.status(500).json({
                error: false,
                message: userMessages.messages.error_pin,
            });
        }
    }
}

async function validatePin(req, res, next) {
    const errors = {};
    if (isEmpty(req.body.email)) {
        errors.email = "Email field is required";
    } else if (isEmpty(req.body.pin)) {
        errors.pin = "Pin field is reuired";
    } 
    // else if (!Validator.isEmail(req.body.email)) {
    //     errors.email = "Email is not valid";
    // }
    if (Object.entries(errors).length !== 0) {
        res.status(400).json({
            error: true,
            message: errors,
        });
    }
    const pin = await client.get(req.body.email.toString());
    if (pin === req.body.pin) {
        await client.del(req.body.email.toString());
        try {
            var user = await db.user.findOne({
                where: {
                    email: req.body.email,
                    $or: [{
                        phone_number: {
                            $eq: req.body.email,
                        }
                    }]
                }
            });
            if (user) {
                res.status(200).json({
                    error: false,
                    message: userMessages.messages.otp_validate,
                    data: user,
                });
            } else {
    
                res.status(200).json({
                    error: false,
                    message: userMessages.messages.otp_validate,
                });
            }
        } catch (error) {
            console.log("Error while matching otp with redis.",error);
        }
       
    } else {
        res.status(400).json({
            error: false,
            message: userMessages.messages.incorrect_otp,
        });
    }
}

async function getRestaurantDeails(req, res, next) {
    try {
        const { userId } = req.query;
        let resp = await db.sequelize.query(`select * from users us inner join business_sets bs on us.id=bs.restaurent_id where us.id=?`, { replacements: [userId], type: "SELECT" });


        const userData = {};
        if (resp.length) {
            userData.email = resp[0].email;
            userData.phone_number = resp[0].phone_number;
            userData.business_name = resp[0].business_name;
            userData.business_location = resp[0].business_location;
            userData.business_description = resp[0].business_description;
            userData.business_est_since = resp[0].business_est_since;
            userData.business_definition = resp[0].business_definition;
            userData.website = resp[0].website;
            userData.welcome_asset = resp[0].welcome_asset ? configUrls.configUrls.BASE_URL + 'welcome-assets/' + resp[0].welcome_asset : '';
            let restaurant_images = await db.restaurat_images.findAll({
                where: {
                    restaurant_id: userId, status: 1
                }
            });
            userData.business_sets = JSON.parse(resp[0].schedule_set);
            if (restaurant_images.length) {
                userData.images = restaurant_images.map(res => { return { img_id: res.id, img_url: (res.image_name) ? configUrls.configUrls.BASE_URL + 'welcome-assets/' + res.image_name : '' }; })
            }

            res.send({
                status: true,
                data: userData
            })
        } else {
            res.status(404).send({
                status: false,
                errors: error
            })
        }
    } catch (err) {
        const error = new HttpError('Something went Wrong! ');
        return next(error)
    }
}



// const User = require("../models/Users");
async function userRegistration(req, res, next) {

    const { errors, isValid } = validateRegisterInput.validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json({
            'error_code': 101,
            'status': false,
            'errors': errors
        });
    } else {
        try {
            var user = await db.user.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (user) {
                return res.status(409).json({
                    'error_code': 102,
                    'status': false,
                    'errors': 'Email id already configured',
                })
            }
            var user = await db.user.findOne({
                where: {
                    phone_number: req.body.phone_number
                }
            });

            req.body.status = 0;     //For testing purpose
            var result = await db.user.create(req.body);
            if (result) {
                res.status(200).json({
                    error: "false",
                    status: "Success",
                    message: 'User account is successfully created!',
                    data: result
                })
            } else {
                return res.status(500).json({
                    'error_code': 109,
                    'status': false,
                    'errors': 'User account not created. Please try again'
                })
            }
        } catch (error) {
            return res.status(500).json(
                {
                    error_code: 101,
                    status: false,
                    errors: `${error}`
                }
            )
        }
    }
}


async function updateRestaurantDetails(req, res, next) {

    //const { errors, isValid } = validateRegisterInput.validateRegisterInput(req.body);

    if (!req.body.id) {
        return res.status(400).json({
            'error_code': 101,
            'status': false,
            'errors': 'User Id is missing!'
        });
    } else {
        try {
            var user = await db.user.findOne({
                where: {
                    id: req.body.id
                }
            });
            if (!user) {
                return res.status(409).json({
                    'error_code': 102,
                    'status': false,
                    'errors': 'User id is not valid!',
                })
            }


            req.body.status = 0;     //For testing purpose
            //var result = await db.user.create(req.body);
            const id = req.body.id;
            delete (req.body.id);
            const result = await db.user.update(req.body, {
                where: {
                    id: parseInt(id),
                },
                returning: true,
                plain: true
            });
            if (result) {
                res.status(200).json({
                    error: "false",
                    status: "Success",
                    message: 'User account is successfully Update!',
                    data: result
                })
            } else {
                return res.status(500).json({
                    'error_code': 109,
                    'status': false,
                    'errors': 'User account not Updated. Please try again'
                })
            }
        } catch (error) {
            console.log("error occured while udpating the restauran details:", error);
            return res.status(500).json(
                {
                    error_code: 101,
                    status: false,
                    errors: `${error}`
                }
            )
        }
    }
}


async function uploadRestauratImage(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (error, fields, files) {
        const incommingFieldData = fields;
        if (Validator.isEmpty(incommingFieldData.restaurant_id)) {
            return res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ restaurant_id: 'Restaurat Id is required!' }]
            });
        } else if (!Object.keys(files).length) {
            return res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ restaurant_image: 'Restaurant image is required' }]
            });
        }

        const type = files.restaurant_image.type.split("/").pop();
        const fileName = encodeURIComponent('welcome_asset-' + new Date().getTime()) + '.' + type;

        try {
            if (!files.restaurant_image.length) {
                const file = files.restaurant_image;
                const isValid = isFileValid(file);

                if (!isValid) {
                    // throes error if file isn't valid
                    return res.status(400).json({
                        status: "Fail",
                        message: "The file type is not a valid type",
                    });
                }
                try {
                    // renames the file in the directory
                    fs.renameSync(file.path, path.join(uploadFolder, fileName));
                } catch (error) {
                    console.log(error);
                }

                try {
                    // stores the fileName in the database
                    const newFile = await File.create({
                        name: `files/${fileName}`,
                    });
                } catch (error) {
                    console.log(`File Upload Error ${fileName} `, error);
                }

            }
            try {
                const result = await db.restaurat_images.create({ image_name: `${fileName}`, satus: 1, restaurant_id: incommingFieldData.restaurant_id });



                if (result) {
                    return res.status(200).json({
                        'error': false,
                        'status': true,
                        'errors': 'Record is successfully updated!',
                    })
                }
            } catch (err) {
                console.log('Error', err);
            }


        } catch (error) {
            return res.status(500).json(
                {
                    error_code: 101,
                    status: false,
                    errors: `${error}`
                }
            )
        }

    });
}



async function uploadRestauratWelcomeAsset(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (error, fields, files) {
        const incommingFieldData = fields;
        if (Validator.isEmpty(incommingFieldData.user_id)) {
            return res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ user_id: 'User Id is required!' }]
            });
        } else if (!Object.keys(files).length) {
            return res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ welcome_asset: 'Welcome asset is required' }]
            });
        }

        const type = files.welcome_asset.type.split("/").pop();
        const fileName = encodeURIComponent('welcome_asset-' + new Date().getTime()) + '.' + type;

        try {
            if (!files.welcome_asset.length) {
                const file = files.welcome_asset;
                const isValid = isFileValid(file);

                if (!isValid) {
                    // throes error if file isn't valid
                    return res.status(400).json({
                        status: "Fail",
                        message: "The file type is not a valid type",
                    });
                }
                try {
                    // renames the file in the directory
                    fs.renameSync(file.path, path.join(uploadFolder, fileName));
                } catch (error) {
                    console.log(error);
                }

                try {
                    // stores the fileName in the database
                    const newFile = await File.create({
                        name: `files/${fileName}`,
                    });
                } catch (error) {
                    console.log(`File Upload Error ${fileName} `, error);
                }

            }
            try {
                const result = await db.user.update({ welcome_asset: `${fileName}` }, {
                    where: {
                        id: parseInt(incommingFieldData.user_id),
                    },
                    returning: true,
                    plain: true
                });


                if (result) {
                    return res.status(200).json({
                        'error': false,
                        'status': true,
                        'errors': 'Record is successfully updated!',
                    })
                }
            } catch (err) {
                console.log('Error', err);
            }


        } catch (error) {
            return res.status(500).json(
                {
                    error_code: 101,
                    status: false,
                    errors: `${error}`
                }
            )
        }

    });
}

async function addRestaurentSets(req, res, next) {
    if (!req.body.restaurent_id) {
        return res.status(400).json({
            'error_code': 101,
            'status': false,
            'errors': 'Restaurent Id is missing'
        });
    } else {
        try {
            req.body.schedule_set = JSON.stringify(req.body.schedule_set);
            var result = await db.business_sets.update(req.body, {
                where: {
                    restaurent_id: req.body.restaurent_id,
                },
                returning: true,
                plain: true
            });
            if (!result[1]) {
                var result = await db.business_sets.create(req.body);
            }
            res.status(200).json({
                error: "false",
                status: "Success",
                message: 'Restaurent schedule set is updated successfully!',
                data: result
            })
        } catch (error) {
            return res.status(500).json(
                {
                    error_code: 101,
                    status: false,
                    errors: `${error}`
                }
            )
        }
    }
}

async function getRestaurentSets(req, res, next) {
    if (!req.body.restaurent_id) {
        return res.status(400).json({
            'error_code': 101,
            'status': false,
            'errors': 'Restaurent Id is missing'
        });
    } else {
        let resp = await db.business_sets.findAll({
            where: {
                status: 1, restaurent_id: req.body.restaurent_id
            }
        });
        if (resp.length) {
            res.send({
                status: true,
                data: resp
            })
        } else {
            res.status(404).send({
                status: false,
                errors: error
            })
        }
    }

}

async function removeRestaurentSets(req, res, next) {
    if (!req.body.id) {
        res.status(400).json({
            'error_code': 101,
            'status': false,
            'errors': 'Id is missing'
        });
    }
    {
        const result = await db.business_sets.update({ status: 2 }, {
            where: {
                id: parseInt(req.body.id),
            },
            returning: true,
            plain: true
        });
        if (result) {
            res.status(200).json({
                error: "false",
                status: "Success",
                message: 'Set remove successfully!',
                data: result,
            });
        } else {
            res.status(500).json({
                error_code: 109,
                error: true,
                status: "false",
                message: 'Inernal server Error',
                data: result,
            });
        }
    }
}

const isFileValid = (file) => {
    const type = file.type.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf", "mp4"];
    if (validTypes.indexOf(type) === -1) {
        return false;
    }
    return true;
};



module.exports = { userRegistration, validatePin, sendRegistrationPin, uploadRestauratWelcomeAsset, getRestaurantDeails, uploadRestauratImage, updateRestaurantDetails, addRestaurentSets, getRestaurentSets, removeRestaurentSets }




/**
 * CREATE TABLE `qrbee`.`restaurat_images` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `image_name` VARCHAR(50) NOT NULL , `restaurant_id` INT(1) NOT NULL , `create_ts` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `update_ts` DATETIME NOT NULL , `status` INT(1) NOT NULL DEFAULT '1' , PRIMARY KEY (`id`)) ENGINE = InnoDB;
 */