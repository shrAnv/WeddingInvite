document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".element");

    function showElements() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("show");
            }, index * 60000); // Adjust the delay (in milliseconds) between elements
        });
    }

    // Call the function to show elements when the page is loaded
    showElements();
});
