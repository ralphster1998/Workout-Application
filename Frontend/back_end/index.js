import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes/exerciseRoutes';
import App from 'next/app';

require("./services/passport");
const passport = require('passport');
const next = require('next');
const keys = require("./configs/keys");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); 
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.port || 4000;
const dev  = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


//*********USING SERVER-SIDE RENDERING ***** */
app.prepare()
   .then(() => {
     /*
      once server is ready, we are going to create
      a server with express
      once files are built, then create express
      server. 
      */
      const server = express();

      //***********APP SET UP *************** */

      // helmet
      server.use(helmet())

      // parse cookies
      server.use(cookieParser());

      // initalize passport
      server.use(passport.initialize());
      // deserialize cookie from the browser
      server.use(passport.session());

      // bodyparser setup
      server.use(bodyParser.urlencoded({ extended: true }));
      server.use(bodyParser.json());

      server.use(
        cookieSession({
          name: "session",
          maxAge: 24 * 60 * 60 * 100,
          keys: [keys.COOKIE_SESSION_KEY]
        })
      );

      // set up routes
      server.use("/auth", authRoutes);

      routes(server);

      // serving static files
      server.use(express.static('public'));

      // serving static files
      server.use(express.static('public'));

      // set up cors to allow us to accept requests from our client
      server.use(
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
    server.get("/", checkAuth, (req, res) => {
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
    server.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
    );

    server.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
    );

   })

/*

RESTRUCTURE INDEX FILE TO LOOK LIKE SERVER.JS FILE MAYBE B/C IT'S SERVER
SIDE RENDERING.

*/