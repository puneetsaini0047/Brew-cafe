const menuOpenButton = document.querySelector(".fa-bars");
const menuCloseButton = document.querySelector(".fa-times");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Initializing the Swiper slider
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


// --- AI CHATBOT SCRIPT ---

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".chatbot-popup .close-btn");
const chatBody = document.querySelector(".chatbot-popup .chat-body");
const chatForm = document.querySelector(".chatbot-popup .chat-form");
const chatInput = document.querySelector(".chat-form textarea");

// Cafe-specific data for the bot
const cafeData = {
    menu: "We have a wide range of items! This includes Hot and Cold Beverages, Desserts, Special Combos, and snacks like Burgers & Fries. For a detailed view, please check out our full menu by clicking the 'Order Now' button!",
    hours: "We are open from 9:00 AM to 5:00 PM, Monday to Friday. We are closed on Sundays.",
    location: "You can find us at DLF Cyber City, Phase II, Gurugram.",
    specials: "Our current specials are the 'Coffee & Cake Combo' and the 'Afternoon Special'. They are delicious!",
    default: "I'm sorry, I'm not sure how to answer that. You can ask me about our menu, opening hours, location, or today's specials."
};

// Function to generate a response from the bot
const getBotResponse = (userInput) => {
    const message = userInput.toLowerCase();
    
    if (message.includes("menu") || message.includes("food") || message.includes("drink")) {
        return cafeData.menu;
    } else if (message.includes("hours") || message.includes("open") || message.includes("time")) {
        return cafeData.hours;
    } else if (message.includes("location") || message.includes("address") || message.includes("where")) {
        return cafeData.location;
    } else if (message.includes("special") || message.includes("combo")) {
        return cafeData.specials;
    } else if (message.includes("hello") || message.includes("hi")) {
        return "Hello there! How can I assist you with your Brew Cafe questions?";
    } else {
        return cafeData.default;
    }
};

// Function to append a message to the chat body
const appendMessage = (message, className) => {
    const chatMessage = document.createElement("li");
    chatMessage.classList.add("chat-message", className);
    chatMessage.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(chatMessage);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
};

// Handle form submission
const handleChat = (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Clear the input and append user's message
    chatInput.value = "";
    appendMessage(userMessage, "user-message");

    // Get and append bot's response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        appendMessage(botResponse, "bot-message");
    }, 600);
};

// Event listeners for the chatbot
chatForm.addEventListener("submit", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));