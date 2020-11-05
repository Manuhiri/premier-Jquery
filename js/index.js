var bg = $("#particles-js");

// Evènement
$(document).keydown(function () { 
    $(bg).css("background-color",getRandomColor);
});

$(".img").on("click", function () {  
    // Changement titre
    var name = $(this).attr("name");
    const initial = name.charAt(0).toUpperCase();
    const nameCapitalized = initial + name.slice(1);
    $("#titre").text(nameCapitalized);

    // Animation
    $(this).toggleClass("flash");

    // Music
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic("son/" + music);
});

// Lancer la musique au click sur play
$("#btn").click(function(){
    var artiste = $("#input").val();
    var music = artiste + ".mp3";
    const initial = artiste.charAt(0).toUpperCase();
    const nameCapitalized = initial + artiste.slice(1);
    playMusic("son/" + music);
    $("#titre").text(nameCapitalized);
});


//Fonction

function playMusic (music){
    var audio = new Audio(music);
    audio.play();
}

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}