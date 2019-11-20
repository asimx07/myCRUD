const express = require("express");
const router = express.Router();
const profile = require("../../models/Profile");

const validateRegisterInput = require("../../validation/register");
//@route GET api/profile/test
//@desc  Test Route
//@access Public

router.get("/test", (req, res) => res.json({ msg: "User Works" }));

//@route POST api/profile/register
//@desc  Register Route
//@access Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  profile
    .findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already Exists" });
      } else {
        const newProfile = new Profile({
          name: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
          address: req.body.address,
          age: req.body.age
        });
        console.log(newProfile);
        newProfile
          .save()
          .then(profile => res.json(profile))
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
