$(document).ready(function() {
  $("#menu-icon").on("click", function() {
    $(this).toggleClass("fa-bars");
    $(this).toggleClass("fa-times");
  });
});
