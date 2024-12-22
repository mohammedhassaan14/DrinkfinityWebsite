// Initialize an empty array to store cart items
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Create an object for the product
    const product = {
        name: productName,
        price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    // Get the cart container where we will display cart items
    const cartContainer = document.getElementById('cart-container');

    // Clear the cart container before displaying updated items
    cartContainer.innerHTML = '';

    // Check if there are any items in the cart
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display the products in the cart
        let cartHTML = '<h3>Your Cart:</h3><ul>';
        
        // Loop through the cart array and create a list item for each product
        let totalAmount = 0;
        cart.forEach(item => {
            cartHTML += `<li>${item.name} - ₹${item.price}</li>`;
            totalAmount += item.price;
        });

        cartHTML += `</ul><p>Total Amount: ₹${totalAmount}</p>`;
        cartContainer.innerHTML = cartHTML;
    }
}