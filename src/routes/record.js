const express = require("express");
const router = express.Router();
const recordService = require("../services/recordService");
const { validationResult } = require("express-validator");
const { recordValidator } = require("../middlewares/validators");

router.post("/filter", recordValidator.validate, async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return next(result.array());
  }
  const { startDate, endDate, minCount, maxCount } = req.body;
  const records = await recordService.getRecords({
    startDate,
    endDate,
    minCount,
    maxCount,
  });
  res.send({
    code: 0,
    msg: "Success",
    records,
  });
});

module.exports = router;
