$(document).ready(function(){

  $('otp').on('click', function(){

      var item = $('phonenumber');
      var todo = {item: item.val()};

      $.ajax({
        type: 'GET',
        url: '/index.html',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework.



  });
});


/*module.exports = {
    getotp: function() {var contactNumber = "+91"+String(document.getElementById('phonenumber').value);
sendOtp.send(contactNumber,"FLEETTRACK",function (error, data, response) {
  console.log(data);
sendOtp.setOtpExpiry('5');});
},

    signup: function() {}
}*/
