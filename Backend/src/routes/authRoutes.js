/*
TO TEST GOOGLE AUTHENTICATION:
- do localhost:4000/auth/google
- then use your account.

*/
const passport = require("passport");
const router = require("express").Router();
const CLIENT_URL = "http://localhost:3000";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
    if (req.user) {
      res.json({
        user: req.user,
        cookies: req.cookies,
        success: true,
        message: "User authentication successful"
      });
    }
  });
  
  // when login failed, send failed msg
  router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "User authentication failed"
    });
  });
  
  // When logout, redirect to client
  router.get("/logout", (req, res) => {
    req.logout();
    res.send(req.user);
    // res.redirect(CLIENT_URL);
  });

// auth with google
router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

// redirect to home page after successfully login via twitter
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed"
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(CLIENT_URL);
  });

module.exports = router;