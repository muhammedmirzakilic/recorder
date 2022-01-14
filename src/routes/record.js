const express = require("express");
const router = express.Router();
const recordService = require("../services/recordService");

router.post("/filter", async (req, res, next) => {
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
