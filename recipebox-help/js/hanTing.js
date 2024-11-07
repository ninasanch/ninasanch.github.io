//This page is created by Han Ting Chen.

/*
  Click to toggle the On This Page navigation (slides up/down)
*/
$(document).ready(function(){
  // When user clicks the "On this page" button (id toggle-slide)
  $("#toggle-slide").click(function(){
    // The contents (on this page navigation) will slide up/down
    $("#sliding-content").slideToggle("slow");
  });
});

/* Popup Function */
function popupFunction(buttonId, imageSrc) {

  //Get popup container
  var popupContainer = document.getElementById('popup-container');

  // Check current button text
  var popupButton = $(buttonId);
  var buttonText = popupButton.val();

  // If the image is popped out, then clear popup container
  // If image is not popped out, make it pop out
  if(buttonText === 'Close image') {
    popupButton.val('Pop out image');
    popupContainer.innerHTML = "";
  } else {
    // Change all current button values to 'Pop out image'
    $('.popoutButton').val('Pop out image');

    //Change this button to 'Close image'
    popupButton.val('Close image');
    
    //Create image to pop-up
    var img = document.createElement('img');
    img.setAttribute('src', imageSrc);
    img.setAttribute('class', 'popup-img');
    
    //Clear then add image
    popupContainer.innerHTML = "";
    popupContainer.appendChild(img);
  }
}
