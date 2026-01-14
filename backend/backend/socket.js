module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected: ' + socket.id);

        socket.on('joinRoom', ({ roomId, userId }) => {
            socket.join(roomId);
            io.to(roomId).emit('userJoined', userId);
        });

        socket.on('voiceData', ({ roomId, audioChunk }) => {
            socket.to(roomId).emit('voiceData', audioChunk);
        });

        socket.on('giftAnimation', ({ roomId, gift, receiverId }) => {
            io.to(roomId).emit('showGift', { gift, receiverId });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected: ' + socket.id);
        });
    });
};
