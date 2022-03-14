const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../models");

module.exports = {
    getCountryList(req, res, next) {
        db.country.findAll().then(response => {
            res.send(response)
        }).catch(err => {
            res.status(500).send({
                error_code: 105,
                status: false,
                error: `${error}`
            })
        })
    },

    searchCityList(req, res, next) {
        if (req.body.search && req.body.countryId) {
            let string = req.body.search;
            let countryId = req.body.countryId;
            db.sequelize.query(`SELECT c.id, c.city_name, c.state_id FROM cities c, states s, countries cn
            where c.state_id = s.id and s.country_id = cn.id and c.city_name like '%${string}%' and c.id = ${countryId}`).spread(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    error_code: 105,
                    status: false,
                    error: err
                })
            })
        }
        else {
            res.sendStatus(406)
        }
    },

    roleList(req, res, next) {
        db.role.findAll().then(data => {
            res.send(data)
        }).catch(error => {
            res.status(500).send({
                error_code: 105,
                status: false,
                error: `${error}`
            })
        })
    }
}