/** Message Object */

const messages={
    success_pin:"Otp is successfully send to user Email/mobile number.",
    error_pin:"Not able to send OTP this time, Please try again, if problem persists please try to reach support.",
    otp_mail_subject:"One Time Password for Qrbee",
    otp_email:"Your Email OTP is ___otp___. This OTP will be expired in 5 minutes<br /><br /><br /><br /> Regards,<br />Team Qrbee",
    otp_phone:"Qrbee OTP is ___otp___. This OTP will be expired in 5 minutes<br /><br /><br /><br /> Regards,<br />Team Qrbee",
    otp_validate:"Otp verified",
    incorrect_otp:"Incorrect Otp",
};

const twilloParams={
    ACCOUNT_SID:"ACc99892c43cd5f1460aaab1e1a9f9eda2",
    AUTH_TOKEN:"6b6f9560660a918276868ddac689dcb8",
    SERVICE_SID:"MG9e10a0423a145df32fb08fb41603e2ae",
};

const configUrls={
    BASE_URL:'http://localhost/',
}


module.exports={messages,twilloParams,configUrls};
