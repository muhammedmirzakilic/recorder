const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  key: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  value: {
    type: String,
    select: false,
  },
  counts: [
    {
      type: Number,
    },
  ],
});

const Record = mongoose.model("records", recordSchema);

module.exports = Record;
