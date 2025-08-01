// AI Chatbot Functionality for Brew Cafe - FIXED VERSION

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

        // Enhanced knowledge base with more comprehensive responses
        this.knowledgeBase = {
            menu: {
                keywords: ['menu', 'food', 'drink', 'beverages', 'eat', 'order', 'what do you have', 'items'],
                response: "🍽️ We have an amazing variety! Our menu includes:\n\n☕ Hot Beverages (Espresso, Cappuccino, Latte, French Roast)\n🧊 Cold Beverages (Iced Coffee, Frappuccino, Cold Brew)\n🥤 Refreshments (Fresh Juices, Smoothies, Iced Tea)\n🍰 Desserts (Chocolate Cake, Cheesecake, Tiramisu)\n🍔 Snacks (Burgers, Fries, Onion Rings)\n🎯 Special Combos\n\nClick 'Order Now' on our website to see the full menu with prices!"
            },
            hours: {
                keywords: ['hours', 'open', 'close', 'time', 'when', 'schedule', 'timing'],
                response: "🕐 Our opening hours are:\n\n📅 Monday - Friday: 9:00 AM - 5:00 PM\n❌ Sunday: Closed\n\nWe're ready to serve you delicious coffee and treats during these hours!"
            },
            location: {
                keywords: ['location', 'address', 'where', 'find', 'directions'],
                response: "📍 You can find us at:\n\nDLF Cyber City, Phase II, Gurugram\n\nWe're conveniently located in the heart of Cyber City. Perfect for a coffee break during your work day!"
            },
            offers: {
                keywords: ['offers', 'special', 'combo', 'deal', 'promotion', 'discount'],
                response: "🎉 Check out our amazing offers:\n\n☕🍰 Coffee & Cake Combo - Perfect pairing for ₹350\n🌅 Breakfast Combo - Coffee + Croissant + Fresh Juice for ₹280\n🌆 Afternoon Special - Latte + Sandwich + Dessert for ₹400\n\nThese combos give you great value and delicious combinations!"
            },
            contact: {
                keywords: ['contact', 'phone', 'email', 'call', 'reach'],
                response: "📞 Get in touch with us:\n\n📧 Email: info@Brewcafewebsite.com\n📱 Phone: (+91) 65476*****\n\nFeel free to reach out for reservations, catering, or any questions!"
            },
            greeting: {
                keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
                response: "Hello there! ☕ Welcome to Brew Cafe! I'm your personal coffee assistant. How can I help you today? You can ask me about our menu, hours, location, special offers, or anything else!"
            }
        };
    }

    initializeEventListeners() {
        // Toggle chat window
        this.chatbotToggle.addEventListener('click', () => this.toggleChat());
        
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Send message on Enter key press
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Focus input when chat opens
        this.chatbotWindow.addEventListener('transitionend', () => {
            if (this.isOpen && this.chatInput) {
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
                if (message) {
                    this.chatInput.value = message;
                    this.sendMessage();
                }
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatbotWindow.classList.toggle('active', this.isOpen);
        this.chatbotToggle.classList.toggle('active', this.isOpen);

        if (this.isOpen) {
            // Enable input and focus
            this.chatInput.disabled = false;
            setTimeout(() => {
                this.chatInput.focus();
            }, 300);
        } else {
            // Disable input when closed
            this.chatInput.disabled = true;
        }
    }

    sendMessage() {
        if (this.chatInput.disabled) return;

        const userMsg = this.chatInput.value.trim();
        if (!userMsg) return;

        // Add user message
        this.appendMessage(userMsg, 'user');
        this.chatInput.value = '';

        // Show typing indicator
        this.showTyping(true);

        // Get bot response after a realistic delay
        setTimeout(() => {
            const reply = this.getBotReply(userMsg);
            this.showTyping(false);
            this.appendMessage(reply, 'bot');
        }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
    }

    appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Format text with line breaks
        contentDiv.innerHTML = text.replace(/\n/g, '<br>');
        
        msgDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(msgDiv);
        
        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        
        // Add animation
        msgDiv.style.opacity = '0';
        msgDiv.style.transform = 'translateY(10px)';
        setTimeout(() => {
            msgDiv.style.transition = 'all 0.3s ease';
            msgDiv.style.opacity = '1';
            msgDiv.style.transform = 'translateY(0)';
        }, 50);
    }

    showTyping(show) {
        if (this.typingIndicator) {
            this.typingIndicator.classList.toggle('active', show);
            if (show) {
                this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
            }
        }
    }

    getBotReply(message) {
        const msg = message.toLowerCase();
        
        // Check each knowledge base category
        for (const [category, data] of Object.entries(this.knowledgeBase)) {
            if (data.keywords.some(keyword => msg.includes(keyword))) {
                return data.response;
            }
        }

        // Default response for unrecognized messages
        return "I'm sorry, I didn't quite understand that. 🤔\n\nI can help you with:\n• Our menu and food items\n• Opening hours\n• Location and directions\n• Special offers and combos\n• Contact information\n\nWhat would you like to know?";
    }

    // Method to clear chat (useful for testing)
    clearChat() {
        this.chatMessages.innerHTML = '';
        this.appendMessage("Hello! ☕ Welcome to Brew Cafe! I'm your personal coffee assistant. How can I help you today?", 'bot');
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Check if all required elements exist
    const requiredElements = [
        'chatbotToggle',
        'chatbotWindow', 
        'chatMessages',
        'chatInput',
        'sendButton'
    ];
    
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.error('Missing chatbot elements:', missingElements);
        return;
    }

    // Initialize the chatbot
    window.brewChatbot = new BrewChatbot();
    console.log('Brew Cafe Chatbot initialized successfully!');
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrewChatbot;
}