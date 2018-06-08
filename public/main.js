const companyName = document.getElementById('companyname');
const phoneNumber = document.getElementById('phonenumber');
const otpNumber = document.getElementById('otp');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const otpbutton = document.getElementById('getotp');    
const signupbutton  = document.getElementById('signup');
otpbutton.addEventListener('click',otp);
signupbutton.addEventListener('click',signup);

function otp() {
  console.log('SENDING OTP');
  const number = phoneNumber.value.replace(/\D/g, '');
  const text = "OTP";
  console.log(number);
  fetch('/register', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({number: number,type: text})
  //  console.log(res.status);
  })
 .then(response => { 
  return response.json(); 
}).then(data => { 
  alert(JSON.stringify(data));
})
  .catch(function(err){
    console.log(err);
  });
}

function signup(){

  console.log('SIGNING UP');
  const companyname = companyName.value.replace(/\D/g, '');
  const phonenumber =  phoneNumber.value.replace(/\D/g, '');
  const pswd = password.value.replace(/\D/g, '');
  const rpswd = password2.value.replace(/\D/g, '');
  const otpnum = otpNumber.value.replace(/\D/g, '');
  const text = "SIGNUP";
  fetch('/register', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({companyname: companyname,pswd:pswd,rpswd:rpswd ,pnum: phonenumber ,otpnum: otpnum,type:text})
  })
  .then(response => { 
  return response.json(); 
}).then(data => { 
  alert(JSON.stringify(data));
})
  .catch(function(err){
    console.log(err);
  });

}