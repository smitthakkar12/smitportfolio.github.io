new WOW().init();
$(document).ready(function() {
// When the dropdown is shown
$('.navbar-nav .dropdown').on('show.bs.dropdown', function () {
// Add the "show" class to the parent li element to indicate that the dropdown is open
$(this).addClass('show');
});

// When the dropdown is hidden
$('.navbar-nav .dropdown').on('hide.bs.dropdown', function () {
// Remove the "show" class from the parent li element to indicate that the dropdown is closed
$(this).removeClass('show');
});
});