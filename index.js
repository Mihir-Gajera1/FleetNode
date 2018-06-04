var express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
var app = express();

var SendOtp = require('sendotp');
var sendOtp = new SendOtp('217185ASckRx215b07feb6');
//app.set('view engine','ejs');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('index');
});
app.post('/', (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const type = req.body.text;

  if("OTP"===type){
  //	var otpgen = 1000+getRandomInt(1000);
  const number = req.body.number;
 // var otpmoklo = String(otpgen);
 // console.log(otpmoklo);
var contactNumber = "+91"+String(number);
sendOtp.send(contactNumber,"FLEETTRACK",function (error, data, response) {
  console.log(data);
});
sendOtp.setOtpExpiry('5');}

	if("SIGNUP"==type)
	{
		const number = req.body.pnum;
		var contactNumber = "+91"+String(number);
		var otp  = req.body.otpnum;
		var otpforver = String(otp);
		sendOtp.verify(contactNumber,otpforver, function (error, data, response) {
  console.log(data); // data object with keys 'message' and 'type'
  if(data.type == 'success') {
//alert('You have successfully signed up');
  	console.log('OTP verified successfully');}
  if(data.type == 'error') console.log('OTP verification failed')
});
	}  
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.listen(process.env.PORT || 3000);
console.log('you are listening to port 3000');

