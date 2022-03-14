var express = require('express');
var router = express.Router();


/*====Controller Listing============*/

var address = require("../controller/address");

/*=======Routes============ */
router.post('/addAddress', address.addAddress);
router.post('/UpdateAddress', address.UpdateAddress);
router.post('/AddressList', address.AddressList);
//AddressList
router.get('/removeAddress/:id', address.removeAddress);
router.get('/getAddressDetailById/:id', address.getAddressDetailById);


module.exports = router;
