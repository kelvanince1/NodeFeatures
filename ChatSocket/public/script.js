const socket = io('http://localhost:3000');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');
const roomContainer = document.getElementById('room-container');

if (messageForm) {
    const name = prompt('What is your name?');
    appendMessage('You joined');
    socket.emit('new-user', name);

    messageForm.addEventListener('submit', e => {
        e.preventDefault();
        const message = messageInput.value;
        appendMessage(`You: ${message}`);
        socket.emit('send-chat-message', message);
    
        messageInput.value = '';
    });
}

socket.on('room-created', room => {
    const roomElement = document.createElement('div');
    roomElement.textContent = room;

    const roomLink = document.createElement('a');
    roomLink.href = `/${room}`;
    roomLink.textContent = 'Join';

    roomContainer.append(roomElement);
    roomContainer.append(roomLink);
})

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', name => {
    appendMessage(`${name} connected`);
});

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`);
});

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    messageContainer.append(messageElement);
}