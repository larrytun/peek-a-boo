$(document).ready(function() {

  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#hide").click(function() {
    $("img").fadeToggle();

  });
});
