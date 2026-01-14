import React from 'react';
import io from 'socket.io-client';
let socket = io('http://localhost:5000');

export default function GiftAnimation({ gift, roomId, receiverId }) {
    const sendGift = async () => {
        socket.emit('giftAnimation', { gift, receiverId, roomId });
    };
    return <button onClick={sendGift}>{gift.name}</button>;
}
