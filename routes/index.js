var express = require('express');
var router = express.Router();
var { auth } = require('./middleware')

var usersRouter = require('./users');
var itemsRouter = require('./items');


// Models.sequelize.sync({
//     alter: true,
//     // freezeTableName: true
// }).then(() => {
//     console.log('database schema has been syncronized...')
// })
/*=======Routes============ */
router.use('/items/', itemsRouter);
router.use('/users/', usersRouter);

module.exports = router;
