//This page is created by Grace Tien

// Define function to toggle to show or hide the image.
function toggleImage(hideButtonId, imageId) {
    // Toggle imageId to show or hide the image.
    $(imageId).toggle();

    // Define 1st variable, assign the html button "hideButtonId" to the js variable "hideButton".
    hideButton = $(hideButtonId);

    // Define 2nd variable, assign the text value of "hideButton" to the js variable "hideButtonText".
    hideButtonText = hideButton.val();

    // If the button text is "Hide image", change the button text to "Show image".
    // If the button text is "Show image", change the button text to "Hide image".
    if(hideButtonText === 'Hide image') {
        hideButton.val('Show image');
    } else {
        hideButton.val('Hide image');
    }
}

// Define function to enlarge or reset the image size.
function enlargeImage(enlargeButtonId, imageId) {
   
    // Define 1st variable, assign the html button "enlargeButtonId" to the js variable "enlargeButton".
    enlargeButton = $(enlargeButtonId);

    // Define 2nd variable, assign the text value of "enlargeButton" to the js variable "enlargeButtonText".
    enlargeButtonText = enlargeButton.val();
 
    // If the button currently says "Enlarge image", change it to say "Reset image" and enlarge image size to width= 500px and height= auto.
    // If the button currently says "Reset image", change it to say "Enlarge image" and reset image size to width= 250px and height= auto.
    if(enlargeButtonText === 'Enlarge image') {
        enlargeButton.val('Reset image');
        $(imageId).css({"height": "800px", "width":"auto"});
    } else {
        enlargeButton.val('Enlarge image');
        $(imageId).css({"height": "600px", "width":"auto"});
    }
}