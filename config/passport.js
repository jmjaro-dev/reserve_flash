const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Stategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Import keys
const keys = require('../config/keys');
// Intialize user object to an empty object
let user = {};

// PASSPORT STRATEGIES //
const facebook = () => {
  // Facebook Strategy
  passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: '/auth/facebook/callback'
  },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }));

}

const google = () => {
  // Google Strategy
  passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: '/auth/google/callback'
  },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }));
}


// Serialize User
passport.serializeUser((user, cb) => {
  cb(null,user);
});
// Deserialize User
passport.deserializeUser((user, cb) => {
  cb(null,user);
});

module.exports = {
  facebook,
  google
};