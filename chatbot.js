// Function to handle sending messages
function sendMessage() {
    let userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() === '') return; // Don't send empty messages

    // Display user's message
    displayMessage(userMessage, 'user');
    
    // Get bot response
    let botResponse = getBotResponse(userMessage);
    
    // Display bot's response
    setTimeout(() => displayMessage(botResponse, 'bot'), 500);
    
    // Clear input field
    document.getElementById('user-input').value = '';
}

// Function to handle quick reply buttons
function quickReply(message) {
    displayMessage(message, 'user');
    let botResponse = getBotResponse(message);
    setTimeout(() => displayMessage(botResponse, 'bot'), 500);
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    let messageContainer = document.createElement('div');
    messageContainer.classList.add(sender + '-message');
    messageContainer.innerHTML = `<p>${message}</p>`;
    document.getElementById('chat-box').appendChild(messageContainer);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

// Function to generate bot responses based on user input
function getBotResponse(userMessage) {
    const userMessageLower = userMessage.toLowerCase();
    
    if (userMessageLower.includes('tell me about your website')) {
        return 'This website is a project by Sham\'s Products Pvt. Ltd, showcasing premium-quality juices under the brand "Drinkfinity." Our mission is to deliver refreshing, flavorful drinks. Let us know how we can assist you!';
    } else if (userMessageLower.includes('how many products are there')) {
        return 'We currently offer 9 exciting juice products: Litchi Juice, Strawberry Juice, Mango Juice, Blueberry Juice, Natural Litchi Juice, Healthy Juice, Orange Juice, Mix Juice Combo (3 bottles), and Special Mix Juice Combo (6 bottles).';
    } else if (userMessageLower.includes('show me the menu')) {
        return 'Here’s our menu: Litchi Juice ₹70, Natural Litchi Juice ₹60, Strawberry Juice ₹50, Mango Juice ₹50, Blueberry Juice ₹50, Healthy Juice ₹80, Orange Juice ₹50, Mix Juice Combo ₹150, Special Mix Juice Combo ₹400.';
    } else if (userMessageLower.includes('hey, chatbot')) {
        return 'Hello! How can I assist you today? Feel free to ask me anything about our products or services!';
    } else if (userMessageLower.includes('what is healthy juice')) {
        return 'Healthy Juice is a blend of fresh, organic ingredients designed to provide essential nutrients and energy. It’s perfect for staying fit and is priced at ₹80!';
    } else if (userMessageLower.includes('what is special mix juice combo')) {
        return 'Special Mix Juice Combo includes 6 premium bottles, each with a unique flavor. It’s perfect for variety lovers and priced at ₹400.';
    } else if (userMessageLower.includes('who is the owner of drinkfinity')) {
        return 'Drinkfinity is proudly created by Sham\'s Products Pvt. Ltd, as part of a creative college project.';
    } else if (userMessageLower.includes('what is the most popular juice')) {
        return 'Our most popular juices are Litchi Juice and Mix Juice Combo. Their refreshing taste makes them a favorite among customers!';
    } else if (userMessageLower.includes('where do i purchase products')) {
        return 'To purchase, go to the Products page, add items to your cart, and fill in your details (name, email, address, product, quantity). Submit the form to place your order!';
    } else {
        return 'I’m sorry, I didn’t understand that. Could you please ask something else about our products or services?';
    }
}
