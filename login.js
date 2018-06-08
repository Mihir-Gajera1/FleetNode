var database = require('./database.js');


module.exports = function(app){

app.get('/login',function(req,res){
   
         res.render(__dirname + '/public/login.html');
});
app.post('/login', (req, res) => {
 
		database.loginUser(req,res);
});

}
