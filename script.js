(function() {
    // variables and constants

    // cached element references
    const yearEl = document.getElementById('year');
    // event listeners

    // functions
    init();

    function init() {
        render();
    }

    function render() {
        // update footer year
        yearEl.innerText = new Date().getFullYear();
    }

})();