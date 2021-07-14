import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import helmet from 'helmet';
import routes from './routes/exerciseRoutes';

require("./services/passport");
const passport = require('passport');
const keys = require("./configs/keys");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); 
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.port || 4000;
const app = express();

//***********APP SET UP *************** */

// helmet
app.use(helmet())

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    cookieSession({
      name: "session",
      maxAge: 24 * 60 * 60 * 100,
      keys: [keys.COOKIE_SESSION_KEY]
    })
  );

// set up routes
app.use("/auth", authRoutes);

routes(app);

// serving static files
app.use(express.static('public'));

// set up cors to allow us to accept requests from our client
app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,POST,DELETE,HEAD,PUT,PATCH",
      credentials: true // allow session cookie from browser to pass through
    })
  );

const checkAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      authenticated: false,
      message: "User not authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", checkAuth, (req, res) => {
  return res.status(200).json({
    authenticated: true,
    message: "Successful user authentication",
    user: req.user,
    cookies: req.cookies
  });
});

//***********DATABASE SET UP *************** */

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

//***********APP RUNNING SET UP *************** */
app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);