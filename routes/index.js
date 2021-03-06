var express = require('express');
var router = express.Router();
var  fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var options = {
  server: {
    socketOptions: {
      connectTimeoutMS: 5000
    }
  }
};
mongoose.connect('mongodb://aaa:aaa@ds261088.mlab.com:61088/wholup',
  options,
  function(err) {
    console.log(err);
  }
);

   // user base de donnée
var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String

});
var UserModel = mongoose.model('users', userSchema);


var data = {
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.000922,
    longitudeDelta: 0.000421,
  },
  markers: [{
    latlng: {
      latitude: 34.78825,
      longitude: -122.4324,
    },
    title: "Hello",
    description: "C'est sympa ici"
  },{
    latlng: {
      latitude: 35.78825,
      longitude: -122.4324,
    },
    title: "Hello",
    description: "C'est sympa ici"
  }]
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/friends', function (req, res, next) {
  res.json(data);
});

// *************** recuperer la photo
router.post('/upload', function(req, res) {
  if (!req.files)

    return res.status(400).send('No files were uploaded.');
    console.log(req.files);
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./public/images/'+'avatar'+'.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

// user form database
router.post('/signUp', function(req, res, next) {

UserModel.find(
 {email: req.body.email},
 function(err, users) {
   if (users.length == 0) {

     var newUser = new UserModel({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       password: req.body.password
     });

     newUser.save(
       function(error, user) {
         console.log(user);

         // req.session.IsLog = true;

res.send('sign up done ! well done');
                     }
                   )
                     }
               }
             )


           }
           );


module.exports = router;
