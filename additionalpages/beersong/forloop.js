function takeEmDown() {
    var toTakeDown = 0, verse ="", left = 0, inputType = "", plural ="s", amount ="'em";
    toTakeDown = parseInt(document.getElementById("beers").value);
    inputType = typeof toTakeDown;
    if (inputType === "number" && !isNaN(toTakeDown)) {
        if (toTakeDown == 1) {
            amount ="it";
        }
         for (var i = 99; i >= toTakeDown; i -= toTakeDown) {
            if (i-toTakeDown == 1) {
                plural ="";
            }
            verse += i + " bottles of beer on the wall, " + i + " bottles of beer!<br>Take " +
            toTakeDown + " down, pass " + amount + " around, " + (i-toTakeDown) + " bottle" + plural + " of beer on " +
            "the wall!<br><br>";
            left = i - toTakeDown;
        }
       if (left > 1) {
           verse += left + " bottles of beer on the wall, " + left + " bottles of beer!<br>Take " +
            left + " down, pass 'em around, " + (left-left) + " bottles of beer on " +
            "the wall!";
       } else if (left ==1) {
           verse += left + " bottle of beer on the wall, " + left + " bottle of beer!<br>Take " +
            left + " down, pass it around, " + (left-left) + " bottles of beer on " +
            "the wall!";
       }
    } else {
        verse += "Sorry I'm not intelligent enough to take " + document.getElementById("beers").value +
        " bottles of beer off the wall! :(";
    }
    document.getElementById("song").innerHTML = verse;
    document.getElementById("song").className = "full"
}