(function($) {
  $(function(){
    // connect all of the squares of the tic tac toe board
    // create AI
    var playerX = $("#playerX"),
      playerO = $("#playerO"),
      yourID = $("#your-id"),
      computerID = $("#computer-id"),
      allBoxes = $(".box"),
      myPlayer = "X",
      computerPlayer = "O";
    // choose player
    function resetGame() {
      allBoxes.html("&nbsp;");
    }

    playerX.click(function(){
      resetGame();
      myPlayer = "X";
      computerPlayer = "O";
      if (playerX.hasClass("btn-success")){
        playerX.removeClass("btn-success").addClass("btn-danger");
        playerO.removeClass("btn-danger").addClass("btn-success");
      }
      else {
        playerO.removeClass("btn-success").addClass("btn-danger");
        playerX.removeClass("btn-danger").addClass("btn-success");
      }

      yourID.html("You are X");
      computerID.html("Computer is O");
    });

    playerO.click(function(){
      resetGame();
      myPlayer = "O";
      computerPlayer = "X";
      if (playerO.hasClass("btn-success")){
        playerO.removeClass("btn-success").addClass("btn-danger");
        playerX.removeClass("btn-danger").addClass("btn-success");
      }
      else {
        playerX.removeClass("btn-success").addClass("btn-danger");
        playerO.removeClass("btn-danger").addClass("btn-success");
      }

      yourID.html("You are O");
      computerID.html("Computer is X");
    });
  });

})(jQuery);