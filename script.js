bu=document.getElementsByClassName("sign");

bu[0].addEventListener("click", function() {
    myfunc();    
});

bu[1].addEventListener("click", function() {
    myfunc();    
});
// document.getElementByClassName("signup-btn").addEventListener("click", function() {
   
// myfunc();


    
//   });
  

function myfunc(){
    function OTPlessScript() {
        const OTPlessAuthScript = document.getElementById("OTPless-Auth-Script");
        const script = document.createElement("script");
        script.src = "https://otpless.com/auth-new.js";
        script.async = true;
        script.defer = true;
        script.id = "OTPless-Auth-Script"
        !!!OTPlessAuthScript && document.body.appendChild(script);
    }
    
    const OTPlessCallbackAction = (otplessUser) => window.otpless?.(otplessUser);
    
    window.addEventListener("load", () => {
        OTPlessScript();
    });
    
    if (document.readyState == "complete") {
        OTPlessScript();
    }
}

// function OTPlessScript() {
//     const OTPlessAuthScript = document.getElementById("OTPless-Auth-Script");
//     const script = document.createElement("script");
//     script.src = "https://otpless.com/auth-new.js";
//     script.async = true;
//     script.defer = true;
//     script.id = "OTPless-Auth-Script"
//     !!!OTPlessAuthScript && document.body.appendChild(script);
// }

// const OTPlessCallbackAction = (otplessUser) => window.otpless?.(otplessUser);

// window.addEventListener("load", () => {
//     OTPlessScript();
// });

// if (document.readyState == "complete") {
//     OTPlessScript();
// }