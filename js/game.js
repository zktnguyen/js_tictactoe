/**
 * Created by keem on 9/6/2016.
 */

var turn = 0;
var placed = [];

window.onload = function(){
    document.getElementById("game").style.visibility = 'hidden';

}

function beginGame(){
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("start").disabled = true;
    document.getElementById("game").style.visibility = 'visible';

    for (var i = 0; i < 9; i++){
        placed[i] = '';
    }

}

function makeMove(num){
    var player1 = 'x';
    var player2 = 'o';
    var but = document.getElementById("box"+num);
    if (but.disabled === false){
        if (turn % 2 === 0){
            console.log("I will place X on box " + num);
            but.style.opacity = 1;
            but.style.backgroundImage = "url('./img/x.png')";
            but.disabled = true;
        }
        else {
            console.log("I will place O on box " + num);
            but.style.opacity = 1;
            but.style.backgroundImage = "url('./img/o.png')";
            but.disabled = true;
        }
        turn++;
    }

    else {
        alert("Please choose another box.");
    }

    if (turn === 9){
        checkWinner(player1);
        checkWinner(player2);

    }

}




function checkWinner(player){
    // horizontal -> diagonal -> vertical
    var winningCombo = [[0,1,2],[3,4,5],[6,7,8],
        [0,4,8],[2,4,6],
        [0,3,6],[1,4,7],[2,5,8]
    ];
    for (var i = 0; i < winningCombo.length; i++){


        var a = winningCombo[i][0];
        var b = winningCombo[i][1];
        var c = winningCombo[i][2];

       // if (player === ){}
    }
}