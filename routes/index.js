//mongodb://cidm4382-tester:cidm4382-tester@ds231245.mlab.com:31245/cidm4382-test

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://cidm4382-tester:cidm4382-tester@ds231245.mlab.com:31245/cidm4382-test";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String,
    timesPresent : String,
    timesAbsent : String,
    percentagePresent: String
});

var Student = mongoose.model('StudentData', studentSchema);

router.get('/add/:firstname/:lastname', function(req, res, next){
    
    var rand = new Student(
        { 
            buffID:     '0123456',
            firstName:  req.params.firstname, 
            lastName:   req.params.lastname
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
            res.send('There was an error');
        } else {
         var message = req.params.firstname + ' ' + 
                       req.params.lastname + ' is saved in the db';
         console.log(message);
         res.send(message);
         
      }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send("Hello, I greet you");
});

router.get('/greeting2', function(req, res, next){
    res.send("Hello, I greet you again");
});



module.exports = router;