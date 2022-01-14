const DB = require("../../src/data");
const {
  recordService: { getRecords },
} = require("../../src/services");

describe("When there is no data", () => {
  beforeAll(() => {
    DB.recordDB.getRecords = jest.fn().mockResolvedValue([]);
  });
  it("Should return empty array", async () => {
    var filterItems = {
      startDate: "2022-01-01",
      endDate: "2022-02-02",
      minCount: 1,
      maxCount: 1000,
    };
    var records = getRecords(filterItems);
    await expect(records).resolves.toEqual([]);
  });
});

describe("When there is data", () => {
  beforeAll(() => {
    DB.recordDB.getRecords = jest.fn().mockResolvedValue([
      {
        createdAt: "2020-12-29T22:37:44.688Z",
        key: "gWUDiUcV",
        totalCount: 25,
      },
    ]);
  });

  it("Should return one record", async () => {
    var filterItems = {
      startDate: "2020-01-01",
      endDate: "2021-01-01",
      minCount: 10,
      maxCount: 100,
    };
    var records = getRecords(filterItems);
    var expected = [
      {
        createdAt: "2020-12-29T22:37:44.688Z",
        key: "gWUDiUcV",
        totalCount: 25,
      },
    ];
    await expect(records).resolves.toEqual(expected);
  });
});
