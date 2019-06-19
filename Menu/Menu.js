
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference.
menu.classlist.toggle('menu--open')
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu'click', toggleMenu);
menuButton.addEventListener('click', function ()  {
    toggleMenu();
} );
