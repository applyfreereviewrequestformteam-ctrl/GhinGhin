const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    password: { type: String, default: null },
    isPrivate: { type: Boolean, default: false },
    micSeats: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, isMicOn: { type: Boolean, default: false } }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', RoomSchema);
