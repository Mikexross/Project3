const mongoose = require("mongoose");

module.exports = mongoose.model('Item', new mongoose.Schema({
    msrp: {type: Number},
    description: {type: String},
    imgUrl: {type: String},
    title: {type: String, default:'Item Name Here'}
}));