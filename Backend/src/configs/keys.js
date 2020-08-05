const GOOGLE = {
    GOOGLE_CLIENT_SECRET: "ISlVwEKL73JzKnWAXSJBrQXg",
    GOOGLE_CLIENT_ID: "645821795167-0cfsqes51eglpl6d6rp8cm29l7guv8j1.apps.googleusercontent.com"
  };
  
const MONGODB = {
    MONGODB_URI: 'mongodb://localhost/workout_db'
  };
  
  const SESSION = {
    COOKIE_SESSION_KEY: "alwjk19248aksjdl198sdfkjwr1908qLKSjlwu90819"
  };
  
  const KEYS = {
    ...GOOGLE,
    ...SESSION,
    ...MONGODB,
  };
  
  module.exports = KEYS;