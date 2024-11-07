//This page is created by Jenina Sanchez

$(document).ready(function(){

});

/*
    Function to toggle showing or hiding the image.
*/
function toggleImage(hideButtonId, imageId) {
    // First step is to toggle the image with imageId to show/hide.
    $(imageId).toggle();

    // Get the button input with the hideButtonId and assign it to the variable hideButton to make the next steps easier.
    hideButton = $(hideButtonId);

    // Get the current text of the hideButton and assign it to the variable hideButtonText
    hideButtonText = hideButton.val();

    // If the button currently says "Hide image", change it to say "Show image".
    // If it currently says "Show image", change it to say "Hide image"
    if(hideButtonText === 'Hide image') {
        hideButton.val('Show image');
    } else {
        hideButton.val('Hide image');
    }
}


/*
    Unique animation for "Adding recipes" page
    When clicking on links under "On this page", the page will slowly scroll down to the section
*/
function slowScroll(targetId) {
    $(window).scrollTo($(targetId), 600);
}


/* Unique animation for 
Scroll to top button from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

// Get the button:
let myButton = document.getElementById("scroll-button-hidden");

// When the user scrolls down 100 px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


/*
    Search bar functionality
*/
function returnSearchResults() {
    $('#tiles-nav').hide();
    $('#index-header').hide();

    // Filter through list
    var searchKeyword = $('#search-bar').val();
    var results = searchTopic(searchKeyword);

    // If there are results, show results
    if(results.length > 0) {
        //Hide results not found section, show results found section
        $('#results-not-found').hide();
        $('#results-found').show();

        //Display search term
        $('#search-keyword').text(searchKeyword);

        //Display search results
        var ulResults = $('#search-results-list');
        ulResults.empty();

        for(i = 0; i < results.length; i++) {
            var resultItem = results[i];

            // add li with link for each result
            var liResult = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', resultItem.url);
            link.innerHTML = resultItem.name;
            liResult.append(link);

            ulResults.append(liResult);
        }
    }
    // If none, then show error
    else {
        //Hide results found section, show results not found section
        $('#results-not-found').show();
        $('#results-found').hide();
    }
}

function searchTopic(searchKeyword) {
    var results = [];
    
    // Go through each subtopic in list
    for(i = 0; i < subtopicsList.length; i++) {
        var subtopic = subtopicsList[i];
        var subtopicName = subtopic.name;

        // compare name of subtopic with search keyword
        // transformed to uppercase to get case insensitive result
        if(subtopicName.toUpperCase().indexOf(searchKeyword.toUpperCase()) > -1) {
            // if name contains search keyword, add to results
            results.push(subtopic);
        }
    }

    return results;
}



// List of all subtopics
var subtopicsList = [
    {name:'Discovering recipes using the search bar', url: 'adding-recipes.html#discover-by-search'},
    {name: 'Discovering recipes by browsing', url: 'adding-recipes.html#discover-by-browse'},
    {name: 'Saving recipes from the app', url: 'adding-recipes.html#save-from-app'},
    {name: 'Adding a recipe from a URL', url: 'adding-recipes.html#add-from-url'},
    {name: 'Adding a custom recipe', url: 'adding-recipes.html#add-custom'},
    {name: 'Editing a recipe in your list', url: 'adding-recipes.html#edit-recipe'},
    {name: 'Deleting a recipe from your list', url: 'adding-recipes.html#delete-recipe'},
    {name: 'Creating a category for a recipe', url: 'organizing-recipes.html#create-category'},
    {name: 'Adding a category to a recipe', url: 'organizing-recipes.html#add-category'},
    {name: 'Favoriting a recipe', url: 'organizing-recipes.html#favorite-recipe'},
    {name: 'Printing your recipe', url: 'sharing-recipes.html#print-recipe'},
    {name: 'Sharing your recipe digitally', url: 'sharing-recipes.html#share-recipe'},
    {name: 'Adding ingredients to your grocery list', url: 'preparing-your-grocery-list.html#add-ingredients'},
    {name: 'Printing your grocery list', url: 'preparing-your-grocery-list.html#print-list'},
    {name: 'Changing your grocery retailer', url: 'ordering-groceries-online.html#change-retailer'},
    {name: 'Ordering your groceries', url: 'ordering-groceries-online.html#order-groceries'},
    {name: 'Recovering your username', url: 'recovering-account-information.html#recover-username'},
    {name: 'Resetting your password', url: 'recovering-account-information.html#recover-password'}
]