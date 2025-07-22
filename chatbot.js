document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");
    const messages = document.getElementById("messages");

    function appendMessage(text, sender) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = sender === 'user' ? `<strong>You:</strong> ${text}` : `<strong>Chatbot:</strong> ${text}`;
        messages.appendChild(msgDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    function getBotResponse(message) {
        const responses = {
            "hello": "Hi! How can I help you today?",
            "how are you": "I'm just a bot, but I'm doing great! How about you?",
            "what is your name": "I'm your friendly chatbot, here to assist you.",
            "goodbye": "Goodbye! Have a great day!"
        };
        message = message.toLowerCase().trim();
        return responses[message] || "Sorry, I didn't understand that. Could you rephrase?";
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        appendMessage(userMessage, 'user');
        userInput.value = "";
        setTimeout(() => {
            const botReply = getBotResponse(userMessage);
            appendMessage(botReply, 'bot');
        }, 700);
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});