// Script for Smooth Scrolling Navigation

// Select all links with hashes
$('a[href*="#"]').on('click', function(event) {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Animate smooth scrolling to the target section
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});

// Interactive features (example: button click to toggle content)
$('.toggle-button').on('click', function() {
  $('.toggle-content').toggle();
});