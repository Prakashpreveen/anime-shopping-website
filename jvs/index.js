// Get elements

// navigation-button element
let navbar = document.querySelector('.navbar')
let menubtn = document.querySelector('#products-btn')
// cart-button element
let cartitem = document.querySelector('.cart-container');
let shopbtn = document.querySelector('#shopping-cart-btn');
// searchbar-button element
let searchForm = document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn');


// Toggle navbar function
menubtn.onclick = () => {
    navbar.classList.toggle('active');
    cartitem.classList.remove('active');
    searchForm.classList.remove('active');
}

// Toggle cart function
shopbtn.onclick = () => {
    cartitem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Toggle search form function
searchbtn.onclick = () => {
    searchForm.classList.toggle('active'); 
    navbar.classList.remove('active'); 
    cartitem.classList.remove('active'); 
}


// Close all on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
    searchForm.classList.remove('active');
}

// Product Like Button
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        
        // Toggle classes for filled and outlined hearts
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas'); // Switch to filled heart
            button.classList.add('liked'); // Add liked class for styling
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far'); // Switch back to outline heart
            button.classList.remove('liked'); // Remove liked class
        }
    });
});