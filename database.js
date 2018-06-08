var firebase = require('firebase');
var message = "OK";
 var config = {
    apiKey: "AIzaSyDZiarvhBiFUQQBt7_jyQYvuHtzemc7iUk",
    authDomain: "fleet-track-2018.firebaseapp.com",
    databaseURL: "https://fleet-track-2018.firebaseio.com",
    projectId: "fleet-track-2018",
    storageBucket: "fleet-track-2018.appspot.com",
    messagingSenderId: "803513680370"
  };
  firebase.initializeApp(config);

module.exports = {
    registerUser: function(req,res) {
      var refpswd = firebase.database().ref("/Registered/"+"91-"+req.body.pnum+"/pswd");
      var refcompanyname = firebase.database().ref("/Registered/"+"91-"+req.body.pnum+"/companyName");
      var refdriverlist = firebase.database().ref("/Registered/"+"91-"+req.body.pnum+"/driverlist");
      var refvehiclelist = firebase.database().ref("Registered/"+"91-"+req.body.pnum+"/vehiclelist");
      refcompanyname.set(String(req.body.companyname));
      refpswd.set(String(req.body.pswd));
      refdriverlist.set("");
      refvehiclelist.set("");
      res.json({msg:"REG OK"});
    },
   loginUser: function(req,res) {
     
      var ref = firebase.database().ref("/Registered/"+"91-"+req.body.pnum+"/pswd");
      if(ref)
      {
              ref.once('value',ref_val=>{
                console.log(ref_val.val());
                if(req.body.pswd===ref_val.val())
                { 
          
                res.json({msg:'LOG OK'});
               }
               else
             {  
            res.json({msg:'PSW WRONG'});
             }
          });
      }
      else
      {
       res.json('NUM WRONG');
      }

    }
}
