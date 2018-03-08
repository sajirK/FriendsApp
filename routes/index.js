var express = require('express');
var router = express.Router();

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
// recuperer la photo 
router.post('/photo', function (req, res, next) {
  res.json(photo);
});

module.exports = router;
