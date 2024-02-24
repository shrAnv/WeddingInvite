        document.addEventListener('DOMContentLoaded', function () {
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

            var backgroundImage = new Image();
            backgroundImage.src = "C:/Users/DELL/OneDrive/Documents/weddinginvitre/images/download (1).jpeg";

            backgroundImage.onload = function () {
                var element = document.getElementById('dynamicElement');
                var imageSize = {
                    width: backgroundImage.width,
                    height: backgroundImage.height
                };

                // Set the size of the element based on the image size
                element.style.width = imageSize.width + 'px';
                element.style.height = imageSize.height + 'px';
            };
        });
