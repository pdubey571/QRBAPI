var express = require('express');
var router = express.Router();
var { auth } = require('./middleware')


/*====Controller Listing============*/

var patient = require("../controller/patient");

/*=======Routes============ */
router.post('/createHistory', auth, patient.createHistory);
router.get('/getFullHistory', auth, patient.getFullHistory);
router.post('/history', auth, patient.history);


module.exports = router;
