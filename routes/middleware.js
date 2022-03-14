const Model = require('../models');

module.exports = {
    auth(req, res, next) {

        const token = req.headers.auth_token;
        const query = `SELECT users.id id, users.phone_number phone_number, users.email email, users.first_name as first_name FROM tokens
        join user on users.id = tokens.user_id
        WHERE token = '${token}'`//  and expired_at > NOW()`;
        Model.sequelize.query(query).spread((responce, meta) => {
            if (responce) {
                const user = responce[0];
                if (user) {
                    req.user = user;
                    return next();
                }
            }
            console.log('responce', responce)
            return res.sendStatus(406)
        }).catch(err => {
            res.status(406).send(err)
        })

    },
    interceptor(req, res, next) {
        const token = req.headers.auth_token;
        const query = `SELECT users.id id, users.phone_number phone_number, users.email email, users.first_name as first_name FROM tokens
        join user on users.id = tokens.user_id
        WHERE token = '${token}'`//  and expired_at > NOW()`;
        Model.sequelize.query(query).spread((responce, meta) => {
            if (responce) {
                const user = responce[0];
                if (user) {
                    req.user = user;
                    return next();
                }
            }
            return next()
        }).catch(err => {
            res.status(406).send(err)
        })

    }
}