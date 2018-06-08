const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const loginbutton = document.getElementById('login');
loginbutton.addEventListener('click',login);

 function login() {
  console.log('loggin in');
  const number = phoneNumber.value.replace(/\D/g, '');
 // console.log(password.value);
 const pswd = String(password.value);
  //const text = "OTP";
  console.log(number);
  fetch('/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({pnum: number,pswd:pswd})
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