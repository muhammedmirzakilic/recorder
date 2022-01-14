const Records = require("../data/mongo/models/record");
const DB = require("../data");
/**
 *
 * Get filtered records
 * @async
 * @param {*} { startDate, endDate, minCount, maxCount }
 * @returns {Promise<Array>} returns list of records => [{ createdAt, key, totalCount }]
 */
async function getRecords({ startDate, endDate, minCount, maxCount }) {
  const records = await DB.recordDB.getRecords({
    startDate,
    endDate,
    minCount,
    maxCount,
  });
  return records;
}

module.exports = {
  getRecords,
};
