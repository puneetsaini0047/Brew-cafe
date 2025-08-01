// AI Chatbot Functionality for Brew Cafe

class BrewChatbot {
    constructor() {
        this.chatbotToggle = document.getElementById('chatbotToggle');
        this.chatbotWindow = document.getElementById('chatbotWindow');
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        
        this.isOpen = false;
        this.initializeEventListeners();
        this.setupQuickActions();

        this.knowledgeBase = {
            menu: { /* ... */ },
            info: { /* ... */ }
        };
    }

    initializeEventListeners() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        this.chatbotWindow.addEventListener('transitionend', () => {
            if (this.isOpen) {
                this.chatInput.disabled = false;
                this.chatInput.focus();
            }
        });
    }

    setupQuickActions() {
        const quickActions = document.querySelectorAll('.quick-action');
        quickActions.forEach(action => {
            action.addEventListener('click', () => {
                const message = action.getAttribute('data-message');
                this.chatInput.value = message;
                this.chatInput.focus();
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatbotWindow.classList.toggle('active', this.isOpen);
        this.chatbotToggle.classList.toggle('active', this.isOpen);

        this.chatInput.disabled = !this.isOpen;
        if (this.isOpen) {
            this.chatInput.focus();
            // Clear previous messages and show welcome message
            this.chatMessages.innerHTML = '';
            this.appendMessage("Hello! ☕ Welcome to Brew Cafe! I'm your personal coffee assistant. How can I help you today?", 'bot');
        }
    }

    sendMessage() {
        if (this.chatInput.disabled) return;

        const userMsg = this.chatInput.value.trim();
        if (!userMsg) return;

        this.appendMessage(userMsg, 'user');
        this.chatInput.value = '';
        this.showTyping(true);

        setTimeout(() => {
            const reply = this.getBotReply(userMsg);
            this.showTyping(false);
            this.appendMessage(reply, 'bot');
        }, 700);
    }

    appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = text;
        msgDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(msgDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    showTyping(show) {
        this.typingIndicator.style.display = show ? 'block' : 'none';
    }

    getBotReply(message) {
        const msg = message.toLowerCase();
        // ... (your existing keywords logic)
        return "I'm sorry, I didn't understand that. You can ask me about our menu, hours, location, offers, or anything related to Brew Cafe!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new BrewChatbot();
});