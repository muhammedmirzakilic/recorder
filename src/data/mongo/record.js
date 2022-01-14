const Record = require("./models/record");

async function getRecords({ startDate, endDate, minCount, maxCount }) {
  const records = await Record.aggregate([
    {
      $match: {
        createdAt: { $gt: new Date(startDate), $lt: new Date(endDate) },
      },
    },
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: { $sum: "$counts" },
      },
    },
    {
      $match: {
        totalCount: { $gt: minCount, $lte: maxCount },
      },
    },
  ]);
  return records;
}

module.exports = {
  getRecords,
};
