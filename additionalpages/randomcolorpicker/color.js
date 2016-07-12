function changeBackground() {
    var color = "#", nextRandom;
    for (var i = 0; i < 6; i++) {
        nextRandom = Math.floor((Math.random() * 16));
        switch (nextRandom) {
            case 10:
                nextRandom = "a";
                break;
            case 11:
                nextRandom ="b";
                break;
            case 12:
                nextRandom ="c";
                break;    
            case 13:
                nextRandom ="d";
                break;
            case 14:
                nextRandom ="e";
                break;
            case 15:
                nextRandom ="f";
                break;
            default: 
                nextRandom = nextRandom;
        }
        color += nextRandom;
    }
    document.getElementById("hex").style.color = "black";
    document.getElementById("body").style.backgroundColor = color;
    document.getElementById("hex").innerHTML = color;
    
}