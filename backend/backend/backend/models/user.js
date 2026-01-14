const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: String,
    password: String,
    coins: { type: Number, default: 0 },
    diamonds: { type: Number, default: 0 },
    isHost: { type: Boolean, default: false },
    vipLevel: { type: Number, default: 0 },
    badges: [String],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
