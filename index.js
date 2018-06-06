var express = require('express');
const bodyParser = require('body-parser');
var SendOtp = require('sendotp');
var sendOtp = new SendOtp('217185ASckRx215b07feb6');
const ejs = require('ejs');
var signup = require('./signup.js');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

signup(app);

app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.listen(process.env.PORT || 3000);
console.log('you are listening to port 3000');













// Index Route

