var express = require('express');
var router = express.Router();
var  fileUpload = require('express-fileupload');
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
console.log('test test 123');
    res.send('File uploaded!');
  });
});

module.exports = router;
