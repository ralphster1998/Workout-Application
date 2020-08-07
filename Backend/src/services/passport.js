const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KEYS = require("../configs/keys");
const User = require("../models/userModel");

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
            done(null, user);
        })
        .catch(e => {
            done( new Error("Failed deserialization on user") );
        });
    });

passport.use(
  new GoogleStrategy(
    {
      clientID: KEYS.GOOGLE_CLIENT_ID,
      clientSecret: KEYS.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
        
        // find that current user
        const curUser = await User.findOne({ googleId: profile.id });

        // create new user database doesn't have this user
        if (!curUser) {
            const newUser = await new User({
                googleId: profile.id,
              }).save();

            if (newUser) {
                done(null, newUser);
            }
        }

        done(null, curUser);
    })
);