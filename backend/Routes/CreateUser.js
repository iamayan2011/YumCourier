const express = require("express");
//const app = express()
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtSecret = "fuvfuvukkjhvjehhugu865sdgwg64r94gr9e4gr";
//app.use(express.json());

router.post(
  "/createuser",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const salt =await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);


router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    
    let email = req.body.email;

    try {
      let userData = await User.findOne({email});
      if(!userData){
        return res.status(400).json({ errors: "Enter Correct Cred!" });
      }

      const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
      if(!pwdCompare){
        return res.status(400).json({ errors: "Enter Correct Password" });
      }

      const data = {
        user: {
          id: userData.id
        }
      }

      const authToken = jwt.sign(data, jwtSecret);
      return res.json({success: true,
      authToken: authToken});

      
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
