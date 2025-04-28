import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import dotenv from "dotenv";

dotenv.config();

export const configurePassport = (): void => {
  // Google OAuth Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        callbackURL:
          process.env.GOOGLE_CALLBACK_URL ||
          "http://localhost:3000/api/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        // This callback will be handled in the auth controller
        return done(null, profile);
      }
    )
  );

  // Facebook OAuth Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID || "",
        clientSecret: process.env.FACEBOOK_APP_SECRET || "",
        callbackURL:
          process.env.FACEBOOK_CALLBACK_URL ||
          "http://localhost:3000/api/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      (accessToken, refreshToken, profile, done) => {
        // This callback will be handled in the auth controller
        return done(null, profile);
      }
    )
  );
};
