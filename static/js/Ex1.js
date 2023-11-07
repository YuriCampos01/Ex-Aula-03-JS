$(document).ready(function() {
    $("#toggleButton").click(function() {
      $("#textToToggle").toggle();
      var buttonText = $(this).text();

      if (buttonText === "Mostrar") {
        $(this).text("Esconder");
      } else {
        $(this).text("Mostrar");
      }
    });
  });