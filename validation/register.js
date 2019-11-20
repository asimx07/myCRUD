const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.age = !isEmpty(data.age) ? data.age : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Phone Number is required";
  }

  if (!Validator.isNumeric(data.contact)) {
    errors.contact = "Phone Number is not valid";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "address field is required";
  }
  if (Validator.isEmpty(data.age)) {
    errors.age = "AGE  field is required";
  }
  if (!Validator.isNumeric(data.age)) {
    errors.age = "AGE should be number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
