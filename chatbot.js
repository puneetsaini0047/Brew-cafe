// AI Chatbot Functionality
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
        
        // Knowledge base for the cafe
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
                const message = action.getAttribute('data