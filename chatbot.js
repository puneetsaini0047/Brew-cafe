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

        // Cafe Knowledge Base
        this.knowledgeBase = {
            menu: {
                "hot beverages": {
                    items: ["Espresso ₹120", "Cappuccino ₹180", "Latte ₹200", "French Roast ₹160", "Hot Chocolate ₹150"],
                    description: "From bold espressos to creamy lattes - hot drinks that spark joy in every sip."
                },
                "cold beverages": {
                    items: ["Iced Coffee ₹140", "Frappuccino ₹220", "Cold Brew ₹160", "Iced Latte ₹190"],
                    description: "Cold, crisp, and crafted to refresh you instantly."
                },
                "refreshments": {
                    items: ["Fresh Orange Juice ₹120", "Lemonade ₹100", "Fruit Smoothie ₹180", "Iced Tea ₹90"],
                    description: "Fruit and icy refreshment drinks to make you feel refresh."
                },
                "desserts": {
                    items: ["Chocolate Cake ₹250", "Cheesecake ₹280", "Tiramisu ₹320", "Croissant ₹120", "Muffin ₹100"],
                    description: "Treat yourself to something irresistibly sweet."
                },
                "combos": {
                    items: ["Coffee & Cake Combo ₹350", "Breakfast Combo ₹280", "Afternoon Special ₹400"],
                    description: "Your favourite eating and drinking combos."
                },
                "snacks": {
                    items: ["Classic Burger ₹280", "Chicken Burger ₹260", "Veggie Burger ₹240", "French Fries ₹120", "Onion Rings ₹140"],
                    description: "Quick bites to satisfy your small size hunger."
                }
            },
            info: {
                hours: "Monday - Friday: 9:00 AM - 5:00 PM, Sunday: Closed",
                location: "DLF Cyber City, Phase II, Gurugram",
                contact: "info@Brewcafewebsite.com, (+91) 65476*****",
                specialties: ["Hand-crafted coffees", "Fresh bakes", "Cozy atmosphere", "Free WiFi"],
                offers: ["Happy Hour: 20% off on all beverages (3-5 PM)", "Student Discount: 15% off with valid ID", "Loyalty Card: Buy 10 get 1 free"]
            }
        };
    }

    initializeEventListeners() {
        this.chatbotToggle.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Auto-focus input when chat opens
        this.chatbotToggle.addEventListener('click', () => {
            if (!this.isOpen) {
                setTimeout(() => this.chatInput.focus(), 300);
            }
        });
    }

    setupQuickActions() {
        const quickActions = document.querySelectorAll('.quick-action');
        quickActions.forEach(action => {
            action.addEventListener('click', () => {
                const message = action.getAttribute('data-message');
                this.chatInput.value = message;
                this.sendMessage();
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatbotWindow.classList.toggle('active', this.isOpen);
        this.chatbotToggle.classList.toggle('active', this.isOpen);
    }

    sendMessage() {
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

        // Menu
        if (msg.includes('menu')) {
            let reply = 'Here is our menu:\n';
            Object.entries(this.knowledgeBase.menu).forEach(([category, data]) => {
                reply += `\n${category.charAt(0).toUpperCase()+category.slice(1)}:\n${data.items.join(', ')}\n${data.description}\n`;
            });
            return reply;
        }
        // Hours/Time
        if (msg.includes('hours') || msg.includes('time') || msg.includes('open')) {
            return this.knowledgeBase.info.hours;
        }
        // Location/Address
        if (msg.includes('location') || msg.includes('address') || msg.includes('where')) {
            return this.knowledgeBase.info.location;
        }
        // Contact
        if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
            return this.knowledgeBase.info.contact;
        }
        // Specials/Offers
        if (msg.includes('special') || msg.includes('combo') || msg.includes('offer')) {
            return "Here are our current offers:\n" + this.knowledgeBase.info.offers.join('\n');
        }
        // Greetings
        if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! 👋 How can I assist you with Brew Cafe today?";
        }
        // Thanks
        if (msg.includes('thank')) {
            return "You're welcome! Enjoy your time at Brew Cafe.";
        }
        // Specialties
        if (msg.includes('specialties') || msg.includes('unique') || msg.includes('wifi')) {
            return "Our specialties:\n" + this.knowledgeBase.info.specialties.join('\n');
        }
        // Desserts
        if (msg.includes('dessert') || msg.includes('sweet')) {
            return "Desserts:\n" + this.knowledgeBase.menu.desserts.items.join(', ') + "\n" + this.knowledgeBase.menu.desserts.description;
        }
        // Snacks
        if (msg.includes('snack') || msg.includes('burger') || msg.includes('fries')) {
            return "Snacks:\n" + this.knowledgeBase.menu.snacks.items.join(', ') + "\n" + this.knowledgeBase.menu.snacks.description;
        }
        // Default fallback
        return "I'm sorry, I didn't understand that. You can ask me about our menu, hours, location, offers, or anything related to Brew Cafe!";
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    new BrewChatbot();
});