const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg')
const format = require('pg-format')
const logger = require('morgan');
const passport = require('passport'); // npm install
const session = require('express-session'); // npm install
const LocalStrategy = require('passport-local').Strategy;

const index = require('./routes/index.js');
const CONFIG = require('./hidden/config.js')


const app = express();


// var age = 17;

const config = {
 user: CONFIG.PGUSER, // name of the user account
 database: CONFIG.PGDATABASE, // name of the database
 max: 10, // max number of clients in the pool
 idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

// var pool = new pg.Pool(config);
// var myClient;
//
// pool.connect(function (err, client, done) {
//   if (err) console.log("we had an error:",err)
//   app.listen(3000, function () {
//     console.log('listening on 3000')
//   })
//   myClient = client
//   var ageQuery = format('SELECT * from numbers WHERE age = %L', age)
//   myClient.query(ageQuery, function (err, result) {
//     if (err) {
//       console.log(err)
//     }
//     console.log("the result is,", result.rows[0])
//   })
// })

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(session({
//   secret: 'processing',
//   key: 'user',
//   resave: true,
//   saveUninitialized: false,
//   cookie: { maxAge: 1800000, secure: false }
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));
//
// passport.use('local', new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password'
// }, function(username, password, done) {
//   User.findOne({ username: username }, function(err, user){
//     if (err) {
//       throw err;
//     }
//     if (!user) {
//       return done(null, false);
//     }
//     user.comparePassword(password, function(err, isMatch){
//       if (isMatch) {
//         // successfully auth the user
//         return done(null, user);
//       } else {
//         done(null, false);
//       }
//     });
//   });
// }));
//
// passport.serializeUser(function(user, done){
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done){
//   User.findById(id, function(err, user){
//     if (err) {
//       return done(err);
//     }
//
//     done(null, user);
//   });
// });

app.use('/', index);
// app.use('/login', login);
// app.use('/register', register);
// app.use('/book', book)



// var port = process.env.PORT || 3000;
// var server = app.listen(port, function () {
//   console.log('Ready and waiting on ' + server.address().port);
// });

module.exports = app;
