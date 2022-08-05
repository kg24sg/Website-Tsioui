// server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const upload = multer();
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname + 'public')));
// Exprees will serve up production assets
app.use(express.static('../client/build'));

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(
  session({
    secret: 'dont mess with tsiouis website',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

app.use(passport.initialize());
app.use(passport.session());

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb+srv://kg24sg:Kostas241886@atlascluster.disgt.mongodb.net/todolistDB',
  { useNewUrlParser: true }
);

const usersSchema = new mongoose.Schema({
  username: String,
  fullName: String,
  email: String,
  password: String,
  emailInd: Boolean,
  dateOfBirth: Date,
});

usersSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('Users', usersSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/api', (req, res) => {
  res.json({ message: 'Something new is coming!!!!' });
});

app.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.userName,
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    emailInd: 0,
    dateOfBirth: req.body.dateOfBirth,
  });
  User.find({ email: req.body.email }, function (err, foundUser) {
    if (foundUser.length === 0) {
      User.register(newUser, req.body.password, function (err, user) {
        if (err) {
          res.send({
            succes: false,
            data: err,
          });
          console.log(err);
        } else {
          res.send({ succes: true });
          console.log('Succesfully saved default user to DB.');
        }
      });
    } else {
      res.send({
        succes: false,
        data: {
          message: 'A user with the given username is already registered',
        },
      });
    }
  });
});

app.post('/signIn', function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      res.send({
        succes: false,
        data: err,
      });
      console.log(err);
    } else {
      console.log('rfrfrfrf');
      passport.authenticate('local')(req, res, function (err, user, info) {
        console.log(
          req.user.username +
            ' ' +
            req.sessionID +
            ' ' +
            req.session.cookie.maxAge
        );
        console.log(err);
        console.log(req);
        res.send({
          succes: true,
          data: {
            username: req.user.username,
            sessionID: req.sessionID,
            sessionCookieMaxAge: req.session.cookie.maxAge,
            fullname: req.user.fullName,
          },
        });
      });
      console.log('454545');
    }
  });
});

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
