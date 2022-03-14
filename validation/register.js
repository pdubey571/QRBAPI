const Validator= require('validator');
const isEmpty=require('is-empty');
module.exports={validateRegisterInput};
function validateRegisterInput(data,update_data){
    let errors={};
    data.business_name=!isEmpty(data.business_name)?data.business_name:'';
    data.email=!isEmpty(data.email)?data.email:'';
    data.business_location=!isEmpty(data.business_location)?data.business_location	:'';

    /** Code might be used later */
    // data.first_name=!isEmpty(data.first_name)?data.first_name:'';
    // data.last_name=!isEmpty(data.last_name)?data.last_name:'';

    // data.password=!isEmpty(data.password)?data.password:'';
    // data.password2=!isEmpty(data.password2)?data.password2:'';
    //data.phone_number=!isEmpty(data.phone_number)?data.phone_number:'';
    
    data.email=!isEmpty(data.email)?data.email:'';
    if(Validator.isEmpty(data.phone_number)){
        errors.phone_number="Phone number field is required";
    }
    if(Validator.isEmpty(data.email)){
        errors.email="Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email="Email is not valid";
    }
    /** ================Below ccode might be used later========== */
    if(update_data=='update'){
        if (Validator.isEmpty(data.user_id)) {
            errors.user_id = "user_id  is required";
        }
    }
    // if(update_data!='update'){
    //     if(Validator.isEmpty(data.password)){
    //         errors.password="Password  field is required";
    //     }else if(!Validator.isLength(data.password,{min:6,max:30})){
    //         errors.password="Password should be minimum 6 characters";
    //     }
    //     if(Validator.isEmpty(data.password2)){
    //         errors.password2="Confirm password  field is required";
    //     }
    //     if(!Validator.isEmpty(data.password2) && !Validator.equals(data.password,data.password2)){
    //         errors.password2="Password and Confirm password  fields should be match";
    //     }
    // }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}