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

// @route   GET api/profile/all/
// @desc    Get profile by email
// @access  Public

router.get("/all", (req, res) => {
  const errors = {};
  profile
    .find()
    .populate("user", ["name"])
    .then(Profile => {
      if (!Profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(Profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/email/:email
// @desc    Get profile by email
// @access  Public

router.get("/email/:email", (req, res) => {
  const errors = {};

  profile
    .findOne({ email: req.params.email })
    .populate("user", ["name"])
    .then(Profile => {
      if (!Profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(Profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   PUT api/profile/update/:email
// @desc    update profile by email
// @access  Public

router.put("/update/:email", (req, res) => {
  let updatedUser = {
    name: req.body.name,
    contact: req.body.contact,
    address: req.body.address,
    age: req.body.age
  };

  profile
    .findOne({ email: req.params.email })
    .then(Profile => {
      if (Profile) {
        // Update
        profile
          .findOneAndUpdate(
            { email: req.params.email },
            { $set: updatedUser },
            { new: true }
          )
          .then(Profile => res.json(Profile))
          .catch(err => req.json({ msg: "Dusra hai" + err }));
      }
    })
    .catch(err => req.json({ msg: "pehla hai" + err }));
});

// @route   DELETE api/profile/email/:email_id
// @desc    Delete User
// @access  Public
router.delete("/deleteuser/:email", (req, res) => {
  profile
    .findOneAndDelete(req.params.email)
    .then(result => {
      res.json({
        success: true,
        msg: `It has been deleted.`,
        result: {
          _id: result._id,
          name: result.name,
          email: result.email,
          age: result.age,
          gender: result.gender
        }
      });
    })
    .catch(err => {
      res.status(404).json({ success: false, msg: "Nothing to delete." });
    });
});

module.exports = router;
