var SendOtp = require('sendotp');
var sendOtp = new SendOtp('217185ASckRx215b07feb6');

module.exports = function(app){

app.get('/register',function(req,res){
   
         res.render(__dirname + '/public/index.html');
});
app.post('/register', (req, res) => {
 
		const type = req.body.type;
 		if("OTP"===type)
 		{
 			const number = req.body.number;
			var contactNumber = "+91"+String(number);
			sendOtp.send(contactNumber,"FLEETTRACK",function (error, data, response) {
  			console.log(data);
			});
			sendOtp.setOtpExpiry('5');
		}
		if("SIGNUP"==type)
		{
			const number = req.body.pnum;
			var contactNumber = "+91"+String(number);
			var otp  = req.body.otpnum;
			var otpforver = String(otp);
			sendOtp.verify(contactNumber,otpforver, function (error, data, response) {
  			console.log(data);
 			 if(data.type == 'success') {
  			console.log('OTP verified successfully');}
  			if(data.type == 'error') console.log('OTP verification failed')});
  		}

});

}
