/**
 * Created by keem on 8/31/2016.
 */


function startGame() {
    document.getElementById("start").style.visiblity = 'hidden';

    if (document.getElementById("start").innerHTML === "START") {
        document.getElementById("start").style.width = "100px";
        document.getElementById("start").innerHTML = "RESTART";
    }

    beginGame();
}

function beginGame() {

}