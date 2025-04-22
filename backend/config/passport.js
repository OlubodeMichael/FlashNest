const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./../models/User"); // adjust path if needed

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:8000/api/users/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const email = profile.emails[0].value;

        const userData = {
          googleId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email,
        };

        // Find or create the user
        const user = await User.findOneAndUpdate({ email }, userData, {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        });

        return done(null, user); // 👈 this sets req.user
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Required if you're using sessions (optional here)
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
