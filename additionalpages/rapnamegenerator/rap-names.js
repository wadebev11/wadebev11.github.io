var even = 1, firstName = "", lastName = "", index = 0, len = 0;
var adjective = [
    ["A", "Angry", "Azzy", "Arpy", "Abominable", "A$AP", "Articulate", "Acidic", "Acute"],
    ["B", "Bronze", "Big-booty", "Booty", "Blind", "Big", "Bangin'", "Ballin'", "Bashin'", "Bumpin'"],
    ["Crazy", "Cooky", "Cali", "Candy", "Crizzy", "Classy", "C"], //c
    ["D", "Diggy", "Draggin'", "Douggie", "Dank", "Dazed", "Dirty", "Dealin'", "Diggin'", "Dapper", "DJ"], 
    ["E", "Eazy", "Eggcellent", "Empty", "E-rock", "E-boy", "East"], //e
    ["F", "Fitty", "Fizzy", "Freaky", "Fine", "Faulty", "F'real", "Frankie", "Forever", "Foxy", "Funky", "Forensic", "Flame"],
    ["G", "Ghetto", "Gregarious", "Golden", "Glamorous", "Gangsta", "Grindin'"], //g
    ["H", "Higgy", "Honey", "Hangin'", "Handsy", "Hella", "Hollah", "Hollerin'", "Happy", "Home", "Hazy", "Hexa", "Huge"],
    ["I", "Infinity", "Incredible", "Icky", "Icy", "Indie", "Ice", "Izzy", "Iggy"], //i
    ["J", "Jumpin'", "Jivin'", "Jammin'", "Jiggy", "Jelly"],
    ["K", "Kickin'", "King", "Kool", "Koolin'"], //k
    ["L", "Lil", "Lazy", "Limp", "Leanin'", "Lethal"],
    ["M", "Money", "Madd", "Master", "Missy"], //m
    ["Notorious", "N", "North", "New-york"],
    ["O", "Octo"], //o
    ["P", "Prince", "Poppin", "Preachin", "Punctual"],
    ["Q", "Qwiggin'", "Queen", "Qualle", "Quick"], //q
    ["R", "Rank", "Ronnie"],
    ["S", "Saint", "Schoolboy", "Soggy", "Slurpin'", "Salty", "Spunky", "Spanky", "Spiffy", "South", "Shy", "Small", "Southern"],
    ["T", "Tall", "Two", "Trap"],
    ["U", "Ugly"], //u
    ["V", "Voodoo", "Velvet", "Vile"],
    ["Wizzy", "West"],
    ["X", "Xoomin'"], //x
    ["Ya-boy", "Yo-yo", "Yella", "Young"],
    ["Ziggy", "Zoozoo"]
];

var noun = [
    ["Animal", "Ace", "Aardvark", "Afro", "Alchemist"],
    ["Bandit", "Beatz", "Bizzle", "Blaze", "B-Rabbit", "Boss", "Bomb", "Biggy", "Baby", "Briggs", "Boston-Enthusiast", "Boy", "Bizkuit"],
    ["Crazz", "Chainz", "Convict", "Coast", "Central"], //c
    ["Dawg", "D", "Dolla", "Daddy", "Dragon"], 
    ["Echo", "Ember"], //e
    ["Fishizzle", "Fox", "Fish", "Flow", "Freak", "Fam"],
    ["Goose", "G", "Guy"], //g
    ["Ham", "Hound"],
    ["Island", "Ice"], //i
    ["Jam"],
    ["Kid", "Killa", "Kicks", "Kat"], //k
    ["Lova", "Lipz", "Lion"],
    ["Money", "Mac", "Man", /**/"Mommy", "Ma"], //m
    ["Ninja"],
    ["Off-da-Chain"], //o
    ["Pimp", "Problemz", "Pain", "Paradise", "Priest", "Prophet"],
    ["Quack", "Quake", "Qwav"], //q
    ["Rapper", "Rex", "Rat"],
    ["Smalls", "Snake", "Sketch", "Shawty", "Son", "Sizzle", "Scoot", "$", "Skillet", "Station"], //s
    ["Thief", "Tooth", "Thang", "Tiga"],
    ["Undefined", "Unleashed"], //u
    ["Vicker", "Valley"],
    ["Wizzle", "Dubs", "Waffle", "Whip"],
    ["X-ray", "X-con"],
    ["Yo", "Yagger"], //y
    ["Ziggs", "Zagger"]
];
  
function getWord(letter) {
    even++;
    len = getLength(letter);
    index = Math.floor(Math.random() * len);
    
    if (even % 2 == 0) {
        firstName = adjective[letter][index];
    } else {
        lastName = noun[letter][index];
        var li = document.createElement("li"), x = document.getElementById("list"),
        color = "#", nextRandom;
        x.appendChild(li);
        x.lastChild.innerHTML = (firstName + " " + lastName);
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
        
        
        x.lastChild.style.border = "2px solid " + color;
    }
}

function getLength(letter) {
    if (even % 2 == 0) {
        len = adjective[letter].length
    } else {
        len = noun[letter].length
    }
    return len;
}


    