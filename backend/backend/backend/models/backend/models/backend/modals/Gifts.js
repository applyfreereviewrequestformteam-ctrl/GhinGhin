const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
    name: String,
    price: Number,
    animation: String
});

module.exports = mongoose.model('Gift', GiftSchema);
