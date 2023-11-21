$(function() {
    // variables and constants

    // cached element references

    // year element ref
    const $yearEl = $('#year');
    // elements associated with hamburger menu
    const $hamburgerButton = $('#hamburger')
    const $hamburgerMenuEl = $('#top-nav-collapsible');


    // event listeners
    $hamburgerButton.on('click', toggleHamburgerMenu);

    // functions
    init();

    function init() {
        render();
    }
 
    function toggleHamburgerMenu() {
       $hamburgerMenuEl.slideToggle("slow");
    }

    function render() {
        // update footer year
        $yearEl.text(new Date().getFullYear());
    }
});