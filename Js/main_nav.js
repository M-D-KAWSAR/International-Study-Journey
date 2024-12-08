
            // Toggle chat window visibility
            function toggleChat() {
                const chatWindow = document.getElementById("chatWindow");
                chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
            }
    
            // Predefined bot responses
            const botResponses = {
                hello: "Hi there! How can I assist you?",
                help: "Sure, what do you need help with?",
                bye: "Goodbye! Have a great day!",
                
                default: "Please Fill Your Form Form for More information",
                
            };
    
            // Send message
            function sendMessage() {
                const userInput = document.getElementById("userInput");
                const userMessage = userInput.value.trim();
    
                if (userMessage === "") return;
    
                // Display user message
                displayMessage(userMessage, "user-message");
    
                // Get bot response
                const botResponse = getBotResponse(userMessage.toLowerCase());
                displayMessage(botResponse, "bot-message");
    
                // Clear input field
                userInput.value = "";
            }
    
            // Display message in chat
            function displayMessage(message, className) {
                const chatBody = document.getElementById("chatBody");
                const messageDiv = document.createElement("div");
                messageDiv.className = `message ${className}`;
                messageDiv.textContent = message;
                chatBody.appendChild(messageDiv);
    
                // Scroll to the latest message
                chatBody.scrollTop = chatBody.scrollHeight;
            }
    
            // Get bot response
            function getBotResponse(userMessage) {
                return botResponses[userMessage] || botResponses["default"];
            }
