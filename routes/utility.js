var express = require('express');
var router = express.Router();


/*====Controller Listing============*/

var utility = require("../controller/utility");

/*=======Routes============ */
router.get('/country-list', utility.getCountryList);
router.post('/search-city', utility.searchCityList);
router.get('/role-list', utility.roleList);

module.exports = router;
