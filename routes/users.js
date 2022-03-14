var express = require('express');
var router = express.Router();
//var { auth } = require('./middleware')


/*====Controller Listing============*/

var user = require("../controller/user");
//var prof = require('../controller/professional');
//var family = require('../controller/family');

/*=======Routes============ */
router.post('/signup', user.userRegistration);
//router.post('/signin', user.login);
router.get('/getRestaurantDeails', user.getRestaurantDeails);
router.post('/generatePin',  user.sendRegistrationPin);
router.post('/validatePin', user.validatePin);

router.post('/uploadRestauratImage',user.uploadRestauratImage);
router.post('/uploadRestauratWelcomeAsset',user.uploadRestauratWelcomeAsset);
router.post('/updateRestaurantDetails',user.updateRestaurantDetails);
router.post('/addRestaurentSets',user.addRestaurentSets);
router.post('/getRestaurentSets',user.getRestaurentSets);
router.post('/removeRestaurentSets',user.removeRestaurentSets);




module.exports = router;
