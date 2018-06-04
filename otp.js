var SendOtp = require('sendotp');
var sendOtp = new SendOtp('217185ASckRx215b07feb6');

module.exports= function(app){

app.get('/todo',function(req,res){

    Todo.find({},function(err,data){
        if(err) throw err;
        res.render('todo',{todos: data});
    });
   
});
}

var contactNumber = "+91"+String(document.getElementById('phonenumber').value);
sendOtp.send(contactNumber,"FLEETTRACK",function (error, data, response) {
  console.log(data);
sendOtp.setOtpExpiry('5');