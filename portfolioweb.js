function changeBackground(newImage) {
    document.body.style.background = "url('" + newImage + "') no-repeat center center fixed"; /* New background image */
    document.body.style.backgroundSize = "cover"; /* Set background image to cover entire screen */
 }
 
 function changeToDefault() {
    document.body.style.background = null; /* No background */
 }
 