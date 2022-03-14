const Validator= require('validator');
const isEmpty=require('is-empty');
module.exports={validateItemInputs};
function validateItemInputs(data){
    let errors={};

    data.name=!isEmpty(data.name)?data.name:'';
    data.restaurant_id=!isEmpty(data.restaurant_id)?data.restaurant_id:'';
    data.category=!isEmpty(data.category)?data.category:'';
    data.item_description=!isEmpty(data.item_description)?data.item_description:'';

    data.status=!isEmpty(data.status)?data.status:'';
    data.price=!isEmpty(data.price)?data.price:'';

    if(Validator.isEmpty(data.name)){
        errors.name="Item name is required";
    }

    if(Validator.isEmpty(data.restaurant_id)){
        errors.restaurant_id="Restaurant Id is required";
    }

    if(Validator.isEmpty(data.category)){
        errors.category="Category id is required";
    }

    if(Validator.isEmpty(data.item_description)){
        errors.item_description="Item description  is required";
    } 
    
    if(Validator.isEmpty(data.status)){
        errors.status="Item status is required";
    } 

    if(Validator.isEmpty(data.price)){
        errors.price="Item price is required";
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}