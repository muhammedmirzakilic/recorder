const { check } = require("express-validator");

exports.validate = [
  check("startDate")
    .isDate()
    .withMessage({ code: 2, description: "startDate is invalid" }),
  check("endDate")
    .isDate()
    .withMessage({ code: 4, description: "endDate is invalid" }),
  check("startDate").custom((value, { req }) => {
    if (value > req.body.endDate)
      return Promise.reject({
        code: 8,
        description: "startDate can not be greater than endDate",
      });
    return true;
  }),
  check("minCount")
    .isNumeric()
    .withMessage({ code: 16, description: "minCount is invalid" })
    .not()
    .isString()
    .withMessage({ code: 32, description: "minCount can not be string" }),
  check("maxCount")
    .isNumeric()
    .withMessage({ code: 64, description: "maxCount is invalid" })
    .not()
    .isString()
    .withMessage({ code: 128, description: "maxCount can not be string" }),
  check("minCount").custom((value, { req }) => {
    if (value > req.body.maxCount)
      return Promise.reject({
        code: 256,
        description: "minCount can not be greater than maxCount",
      });
    return true;
  }),
];
