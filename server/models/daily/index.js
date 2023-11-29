const mongoose = require('mongoose');

// https://api.trello.com/1/lists/64a235a91d9f1bec963228ea/cards
const dailySchema = new mongoose.Schema({
  createdAt: Date,
  taskDetail: {
    start: Date, // start
    end: Date, // due
    title: String, // name
    labels: [String], // labels
    description: String, //desc
    pr: String,
    assigner: [String], //idMembers
    status: String, // idList
  }
})

const Daily = mongoose.model('daily', dailySchema);

module.exports = { Daily }
