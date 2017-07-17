(function($) {
  $(function(){
    // connect all of the squares of the tic tac toe board
    // create AI
    var playerX = $("#playerX"),
      playerO = $("#playerO"),
      yourID = $("#your-id"),
      computerID = $("#computer-id"),
      allBoxes = $(".box"),
      winners = $("#list-winners"),
      myPlayer = "X",
      computerPlayer = "O",
      currentPlayer = "O",
      turn = 0,
      placed = [" ", " ", " ",
                " ", " ", " ", 
                " ", " ", " ",];
    // choose player
    function resetGame(gameResult) {

      if (gameResult){
        var args = Array.from(arguments);
        var winner = args[1];
        if (winner === "tie"){
          winners.append("<li class='tie-text'>Tie</li>");
        }
        else {
          var html = winner === myPlayer ? "<li class='your-text'>You won</li>" 
                                       : "<li class='computer-text'>Computer won</li>";
          winners.append(html);
        }
      }
      allBoxes.html("&nbsp;");
      for (var i = 0; i < 9; i++){
        placed[i] = " ";
      }
      turn = 0; 
      currentPlayer = (Math.random() * 2).toFixed() === 1 ? computerPlayer : myPlayer;
      if (currentPlayer === computerPlayer){
        makeAIMove();
      }
    }

    playerX.click(function(){
      resetGame(false);
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
      resetGame(false);
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
    
    function checkWinner(player) {
      var winningCombo = [
        [0,1,2],[3,4,5],[6,7,8],
          [0,4,8],[2,4,6],
          [0,3,6],[1,4,7],[2,5,8]
      ];
      for (var i = 0; i < winningCombo.length; i++){


          var a = winningCombo[i][0];
          var b = winningCombo[i][1];
          var c = winningCombo[i][2];

        if ((player === placed[a] &&
            player === placed[b] &&
            player === placed[c])){
            
            resetGame(true, player);
            break;
        }

          else if (turn === 9){
            resetGame(true, "tie");
            break;
        }

      }
    }

    function makeAIMove() {
      var boxTaken = false;
      while (!boxTaken && turn !== 9){
        var AI = (Math.random() * 10).toFixed();
        var box = $("#box" + AI);
        if (box.html() === "&nbsp;"){
          placed[AI] = computerPlayer;
          box.html(computerPlayer);
          boxTaken = true;
        }
      }
      currentPlayer = myPlayer;
      turn++;
      checkWinner(computerPlayer);
    }

    function makeMove(player, boxNum) {
      var box = $("#box"+ boxNum);
      if (box.html() === "&nbsp;"){
        box.html(player);
        placed[boxNum] = player;
        turn++;
        currentPlayer = computerPlayer;
        checkWinner(placed[boxNum]);
        if (turn < 9){
          makeAIMove();
        }
      }
      else {
        console.log("Please select another box");
      }
    } 

    allBoxes.click(function(){
      var boxNum = $(this).attr('id').charAt(3);
      makeMove(myPlayer, boxNum);

    });
  });

})(jQuery);