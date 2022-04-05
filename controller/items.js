const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const express = require('express');

const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const Validator = require('validator');
const isEmpty = require('is-empty');

const configUrls = require("../constants/constants");
const validateItemInputs = require("../validation/items");
const { upload } = require('../commons/fileupload');
const db = require("../models");
const { request } = require('http');
const HttpError = require('../errors/HttpError');

const uploadFolder = path.join(__dirname, '../', "public", "icons");
module.exports = {
    async getCategoryList(req, res, next) {
        try {
            let resp = await db.item_categories.findAll({
                where: {
                    parent_category: 0, status: 1, restaurant_id: req.query.restaurant_id
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
                    errors: {
                        message: "Not found!",
                        stack: "getCategoryList()"
                    }
                })
            }
        } catch (error) {
            res.status(500).send({
                status: false,
                errors: error
            })
        }
        

    },
    async getCustmizationList(req, res, next) {
        let resp = await db.master_custmizations.findAll({
            where: {
                status: 1
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

    },
    async getCategoryById(req, res, next) {
        const { catId } = req.query;
        try {
            let resp = await db.item_categories.findAll({
                where: {
                    parent_category: catId, status: 1
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
                    errors: {
                        message:"Not found!",
                        stack:"getCategoryById()"
                    }
                })
            }
        } catch (err) {
            res.status(500).send({
                status: false,
                errors: `${err}`
            });
        }
    },

    async addNewCategory(req, res, next) {
        try {
            if (Validator.isEmpty(req.body.category_name)) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ category_name: 'Category Name is required!' }]
                });
            }
        } catch (err) {
            const error = new HttpError('Something went Wrong! no place found');
            return next(error)
        }
        try {

            const resp = await db.item_categories.findOne({
                where: {
                    category_name: req.body.category_name,restaurant_id:req.body.restaurant_id
                }
            });
            if (resp) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ category_name: 'Category Name already exists!' }]
                })
            }

        } catch (err) {
            console.log('Error', err);
        }

        try {
             const result = await db.item_categories.create(req.body);
            if (result) {
                res.status(200).json({
                    error: "false",
                    status: "Success",
                    message: 'Item is sucessfully added!',
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
        } catch (error) {
            console.log('Error', err);
        }
           
        
    },

    async addNewCustmization(req, res, next) {
        try {
            if (Validator.isEmpty(req.body.custmization_name)) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ custmization_name: 'Custmization Name is required!' }]
                });
            }
        } catch (err) {
            const error = new HttpError(err);
            return next(error)
        }
        try {

            const resp = await db.master_custmizations.findOne({
                where: {
                    custmization_name: req.body.custmization_name
                }
            });
            if (resp) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ custmization_name: 'Custmization Name already exists!' }]
                })
            }

        } catch (err) {
            console.log('Error', err);
        }

        {
            const result = await db.master_custmizations.create(req.body);
            if (result) {
                res.status(200).json({
                    error: "false",
                    status: "Success",
                    message: 'Custmization is sucessfully added!',
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
    },
    async editCategory(req, res, next) {
        if (Validator.isEmpty(req.body.category_name) || Validator.isEmpty(req.body.id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ category_name: 'Category Name/Category Id is required!' }]
            });
        } else {
            try {

                const resp = await db.item_categories.findOne({
                    where: {
                        id: parseInt(req.body.id)
                    }
                });
                console.log('response', resp);
                if (!resp) {
                    res.status(400).json({
                        'error_code': 101,
                        'status': false,
                        'errors': [{ id: 'Category id is not correct!' }]
                    })
                }

            } catch (err) {
                console.log('Error', err);
            }

            {
                const result = await db.item_categories.update(req.body, {
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
                        message: 'Item is sucessfully updated!',
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
    },

    async removeCategory(req, res, next) {
        if (Validator.isEmpty(req.body.id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'Category Id is required!' }]
            });
        }
        try {

            const resp = await db.item_categories.findOne({
                where: {
                    id: req.body.id
                }
            });

            if (!resp) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ category_name: 'Category id is not correct!' }]
                })
            }

        } catch (err) {
            console.log('Error', err);
        }

        {
            const result = await db.item_categories.update({ status: 2 }, {
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
                    message: 'Item is sucessfully updated!',
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
    },
    async removeCustmization(req, res, next) {
        if (Validator.isEmpty(req.body.id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'custmization Id is required!' }]
            });
        }
        try {

            const resp = await db.master_custmizations.findOne({
                where: {
                    id: req.body.id
                }
            });

            if (!resp) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ category_name: 'custmization id is not correct!' }]
                })
            }

        } catch (err) {
            console.log('Error', err);
        }

        {
            const result = await db.master_custmizations.update({ status: 2 }, {
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
                    message: 'custmization is sucessfully updated!',
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
    },

    async addNewItem(req, res, next) {
        var form = new formidable.IncomingForm();
        form.multiples = true;
        form.parse(req, async function (error, fields, files) {
            const incommingFieldData = JSON.parse(fields.data);
            const { errors, isValid } = validateItemInputs.validateItemInputs(incommingFieldData);
            const file_name = [];
            if (!isValid) {
                return res.status(400).json({
                    'error_code': 102,
                    'status': false,
                    'errors': errors
                });
            } else {

                try {

                    if (typeof files.item_image == 'object') {
                        files.item_image = [files.item_image];
                    }
                    for (let i = 0; i < files.item_image.length; i++) {

                        const type = files.item_image[i].type.split("/").pop();
                        file_name[i] = encodeURIComponent('icon-' + new Date().getTime()) + Math.floor((Math.random() * 100) + 1) + '.' + type;


                        const file = files.item_image[i];
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
                            fs.renameSync(file.path, path.join(uploadFolder, file_name[i]));
                        } catch (error) {
                            console.log(error);
                        }

                    }
                  
                    var item = await db.items.findOne({
                        where: {
                            name: incommingFieldData.name,
                            restaurant_id: incommingFieldData.restaurant_id,
                        }
                    });
                    if (item) {
                        return res.status(409).json({
                            'error_code': 102,
                            'status': false,
                            'errors': 'This item is already added for this restaurant!',
                        })
                    }
                    const custmizationDetails = JSON.parse(JSON.stringify(incommingFieldData.customization));
                    delete (incommingFieldData['customization']);
                    let result = await db.items.create(incommingFieldData);
                    if (result) {
                        let custmizationResponse = [];

                        for (let c = 0; c < custmizationDetails.length; c++) {
                            try {
                                let element = custmizationDetails[c];
                                const key = element.customization_name;

                                const custmizeRow = {
                                    title: key,
                                    item_id: result.id,
                                    detail: JSON.stringify(element.param)
                                };
                                const custizeResult = await db.item_custmizations.create(custmizeRow);
                                custmizationResponse = [...custmizationResponse, custizeResult.dataValues];
                            } catch (error) {
                                console.log("Error while adding custimization.");
                            }
                        }

                        result.custmization = custmizationResponse;
                        let imageIconResponse = [];
                        for (let i = 0; i < file_name.length; i++) {
                            const custmizeRow = {
                                image: file_name[i],
                                item_id: result.id,
                                type: 1,
                            };
                            imageIconResponse[i] = await db.item_images.create(custmizeRow);
                        }
                        res.status(200).json({
                            error: "false",
                            status: "Success",
                            message: 'Item is sucessfully added!',
                            data: result,
                            custmizeReponse: custmizationResponse,
                            iconResponse: imageIconResponse,
                            iconUrl: configUrls.configUrls.BASE_URL + 'icons/' + file_name[0],
                        });

                        //     /** Commented code for file upload for now */

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
                            error_code: 104,
                            status: false,
                            errors: `${error}`
                        }
                    )
                }
            }
        });
    },


    // async getItemList(req, res, next) {
    //     console.log('I am');
    //     if(Validator.isEmpty(req.body.restaurant_id)) {
    //         res.status(400).json({
    //            'error_code': 101,
    //            'status': false,  
    //            'errors': [{id:'Categpry Id or Restaurant Id is missing!'}]
    //        });
    //    }
    //    // let resp = await db.sequelize.query('Select t1.name as item_name,t1.item_description,t1.price,,t2.  from items t1, ', null, { raw: true });
    //    const parentCategoryList= await db.item_categories.findAll({where:{
    //         parent_category:0,status:1
    //     }});
    //     let m=0;
    //    let resultArray=[];
    //     for(let i=0;i<parentCategoryList.length;i++){
    //         resultArray[i]={};
    //         const childCategory= await db.item_categories.findAll({where:{
    //             parent_category:parentCategoryList[i].id,status:1
    //         }});
    //         let temp={};
    //         for(let j=0;j<childCategory.length;j++){
    //             let itemArray=[];
    //             let itemResult = await db.sequelize.query('Select t1.id,t1.name as item_name,t1.status,t1.item_description,t1.price,t2.image  from items t1 LEFT JOIN ' 
    //             +' (Select item_id,image from item_images group by item_id having count(image)>0 ) as t2 ON t1.id=t2.item_id where t1.category ='+childCategory[j].id+' and t1.restaurant_id='+req.body.restaurant_id +' and t1.status=1', null, { raw: true });

    //            console.log('length00000000000000000000000',itemResult[0].length);
    //             if(itemResult[0].length){
    //                 for(let k=0;k<itemResult[0].length;k++){
    //                     itemArray[k]={id:itemResult[0][k].id,item_name:itemResult[0][k].item_name,price:itemResult[0][k].price,iconUrl:(itemResult[0][k].image)?configUrls.configUrls.BASE_URL+'icons/'+itemResult[0][k].image:''};
    //                 }
    //                 if(itemArray.length){
    //                 temp={...temp,[childCategory[j].category_name]:itemArray};
    //                   resultArray[m]={[parentCategoryList[i].category_name]:temp};
    //                   m++;
    //                   }

    //             }
    //        // resultArray[i]={[parentCategoryList[i].category_name]:temp};

    //         }

    //     }

    //    if (resultArray.length) {
    //             res.send({
    //                 status: true,
    //                 data: resultArray
    //             })
    //     } else {
    //             res.status(404).send({
    //             status: false,
    //             errors: error
    //         })
    //     }

    // },

    async getItemListByCategoryId(req, res, next) {
        if (Validator.isEmpty(req.body.category_id) || Validator.isEmpty(req.body.restaurant_id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'Categpry Id or Restaurant Id is missing!' }]
            });
        }


        let itemArray = [];
        let itemResult = await db.sequelize.query('Select t1.id,t1.name as item_name,t1.status,t1.item_description,t1.price,t2.image  from items t1 LEFT JOIN '
            + ' (Select item_id,image from item_images group by item_id  ) as t2 ON t1.id=t2.item_id where t1.category =' + req.body.category_id + ' and t1.restaurant_id=' + req.body.restaurant_id + ' and t1.status=1', null, { raw: true });
        if (itemResult[0].length) {
            for (let k = 0; k < itemResult[0].length; k++) {
                itemArray[k] = { id: itemResult[0][k].id, item_name: itemResult[0][k].item_name, price: itemResult[0][k].price, iconUrl: (itemResult[0][k].image) ? configUrls.configUrls.BASE_URL + 'icons/' + itemResult[0][k].image : '' };
            }
        }

        if (itemArray.length) {
            res.send({
                status: true,
                data: itemArray
            })
        } else {
            res.status(404).send({
                status: false,
                errors: 'No data Found!'
            })
        }

    },
    async getItemList(req, res, next) {

        if (Validator.isEmpty(req.body.restaurant_id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'Categpry Id or Restaurant Id is missing!' }]
            });
        }

        const list = await db.item_categories.findAll({ where: { parent_category: 0, status: 1,restaurant_id:req.body.restaurant_id } });

        let resultArray = list.map(cat => {
            return {
                "category_name": cat.category_name,
                "id": cat.id,
                "sub_categories": []
            }
        });

        for (let i = 0; i < resultArray.length; i++) {
            const childCategory = await db.item_categories.findAll({ where: { parent_category: resultArray[i].id, status: 1 } });
            for (let j = 0; j < childCategory.length; j++) {
                let { id, category_name } = childCategory[j];
                let itemResult = await db.sequelize.query(
                    `
                    Select 
                    t1.id,
                    t1.name as item_name,
                    t1.status,
                    t1.item_description,
                    t1.price from items t1  
                    where t1.category = ?
                    and t1.restaurant_id=?
                    and t1.status=1`, { type: "SELECT", replacements: [childCategory[j].id, req.body.restaurant_id] });

                let items = [];
                for (let k = 0; k < itemResult.length; k++) {

                    let itemImages = await db.sequelize.query(`Select image from item_images where item_id = ?`, { type: "SELECT", replacements: [itemResult[k].id + ""] });
                    let item_custmizations = await db.sequelize.query(`Select * from item_custmizations where item_id = ?`, { type: "SELECT", replacements: [itemResult[k].id + ""] });
                   // if(item_custmizations.length)debugger;
                    item_custmizations = item_custmizations.map(item => {
                        return {
                            ...item, ...{"detail":JSON.parse(item.detail)}
                        }
                    })


                    items.push({
                        id: itemResult[k].id,
                        item_name: itemResult[k].item_name,
                        price: itemResult[k].price,
                        item_description: itemResult[k].item_description,
                        images: itemImages.map(image => image ? configUrls.configUrls.BASE_URL + 'icons/' + image.image : ''),
                        item_custmizations
                    })
                }
                resultArray[i]['sub_categories'].push({ id, category_name, items });
            }
        }

        if (resultArray.length) {
            res.send({
                status: true,
                data: resultArray
            })
        } else {
            res.status(404).send({
                status: false,
                errors: error
            })
        }

    },

    async getItemsByCategoryId(req, res, next) {
        if (Validator.isEmpty(req.body.category_id) || Validator.isEmpty(req.body.restaurant_id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'Category Id or Restaurant Id is missing!' }]
            });
        }
        let itemArray = [];
        const resultArray = [];
        const parentCategoryCheck = await db.item_categories.findOne({
            where: {
                id: req.body.category_id,
            }
        });

        if (parentCategoryCheck.parent_category == 0) {
            const childCategory = await db.item_categories.findAll({
                where: {
                    parent_category: req.body.category_id, status: 1
                }
            });


            for (let j = 0; j < childCategory.length; j++) {
                let itemArray = [];
                let itemResult = await db.sequelize.query('Select t1.id,t1.name as item_name,t1.status,t1.item_description,t1.price,t2.image  from items t1 LEFT JOIN '
                    + ' (Select item_id,image from item_images group by item_id having count(image)>0 ) as t2 ON t1.id=t2.item_id where t1.category =' + childCategory[j].id + ' and t1.restaurant_id=' + req.body.restaurant_id + ' and t1.status=1', null, { raw: true });
                let temp = {};

                if (itemResult[0].length) {
                    for (let k = 0; k < itemResult[0].length; k++) {

                        itemArray[k] = { id: itemResult[0][k].id, item_name: itemResult[0][k].item_name, price: itemResult[0][k].price, iconUrl: (itemResult[0][k].image) ? configUrls.configUrls.BASE_URL + 'icons/' + itemResult[k].image : '' };

                    }


                    temp = { items: [...itemArray], id: req.body.category_id, category: parentCategoryCheck.category_name, sub_category: childCategory[j].category_name };
                    console.log('itemArray', temp);
                    resultArray.push(temp);

                }

            }

            if (resultArray.length) {
                res.send({
                    status: true,
                    data: resultArray
                })
            } else {
                res.status(404).send({
                    status: false,
                    errors: 'No data Found!'
                })
            }
        } else {
            const parentCategory = await db.item_categories.findOne({
                where: {
                    id: parentCategoryCheck.parent_category
                }
            });

            console.log('parentCategoryCheck', parentCategoryCheck);

            let itemArray = [];
            let itemResult = await db.sequelize.query('Select t1.id,t1.name as item_name,t1.status,t1.item_description,t1.price,t2.image  from items t1 LEFT JOIN '
                + ' (Select item_id,image from item_images group by item_id having count(image)>0 ) as t2 ON t1.id=t2.item_id where t1.category =' + req.body.category_id + ' and t1.restaurant_id=' + req.body.restaurant_id + ' and t1.status=1', null, { raw: true });
            let temp = {};
            if (itemResult[0].length) {
                for (let k = 0; k < itemResult[0].length; k++) {

                    itemArray[k] = { id: itemResult[0][k].id, item_name: itemResult[0][k].item_name, price: itemResult[0][k].price, iconUrl: (itemResult[0][k].image) ? configUrls.configUrls.BASE_URL + 'icons/' + itemResult[k].image : '' };

                }
                temp = { items: [...itemArray], id: parentCategory.id, category: parentCategory.category_name, sub_category: parentCategoryCheck.category_name };
                console.log('itemArray', temp);
                resultArray.push(temp);
            }

            if (resultArray.length) {
                res.send({
                    status: true,
                    data: resultArray
                })
            } else {
                res.status(404).send({
                    status: false,
                    errors: 'No data Found!'
                })
            }
        }
    },
    async removeItem(req, res, next) {
        if (Validator.isEmpty(req.body.id)) {
            res.status(400).json({
                'error_code': 101,
                'status': false,
                'errors': [{ id: 'Item Id is required!' }]
            });
        }
        try {

            const resp = await db.items.findOne({
                where: {
                    id: req.body.id
                }
            });

            if (!resp) {
                res.status(400).json({
                    'error_code': 101,
                    'status': false,
                    'errors': [{ id: 'Item id is not correct!' }]
                })
            }

        } catch (err) {
            console.log('Error', err);
        }

        {
            const result = await db.items.update({ status: 3 }, {
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
                    message: 'Item is sucessfully updated!',
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
    },

}

const isFileValid = (file) => {
    const type = file.type.split("/").pop();
    const validTypes = ["jpg", "jpeg", "png", "pdf", "mp4"];
    if (validTypes.indexOf(type) === -1) {
        return false;
    }
    return true;
};