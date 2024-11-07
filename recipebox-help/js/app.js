//Load Foundations library
$(document).foundation()

/*
    Common animation for the 6 pages: Increasing text size
*/
function toggleTextSize() {
    textSizeButton = $('#increaseTextButton');
    textSizeButtonText = textSizeButton.val();

    if(textSizeButtonText === 'Increase text size for tasks') {
        textSizeButton.val('Reset text size for tasks');
        $('.task-list').css('font-size', '18pt');
    } else {
        textSizeButton.val('Increase text size for tasks');
        $('.task-list').css('font-size', '12pt');
    }
}