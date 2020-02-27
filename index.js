/* initial file */
// const correctId = document.querySelector("#menu-icon");
// const correctClass = document.querySelector(".fa-bars");

$(document).ready(function() {
  $("#menu-icon").on("click", function() {
    $(this).toggleClass("fa-bars");
    $(this).toggleClass("fa-times");
  });
});
