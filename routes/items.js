var express = require('express');
var router = express.Router();
var { auth } = require('./middleware')


/*====Controller Listing============*/

var items = require("../controller/items");

/*=======Routes============ */
router.get('/getCategoryList', items.getCategoryList);
router.get('/getCategoryById', items.getCategoryById);
router.get('/getCustmizationList', items.getCustmizationList);
router.post('/addNewCustmization', items.addNewCustmization);
router.post('/removeCustmization', items.removeCustmization);
router.post('/addNewItem', items.addNewItem);
router.post('/addNewCategory',items.addNewCategory);
router.post('/editCategory',items.editCategory);
router.post('/removeCategory',items.removeCategory);
router.post('/getItemList',items.getItemList);
router.post('/getItemListByCategoryId',items.getItemListByCategoryId);
router.post('/removeItem',items.removeItem);
router.post('/getItemsByCategoryId',items.getItemsByCategoryId);
module.exports = router;

