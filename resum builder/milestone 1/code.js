var toggleBut = document.getElementById("toggle-skills");
var skillsSec = document.getElementById("skills");
toggleBut.addEventListener("click", function () {
    if (skillsSec.style.display === "none") {
        skillsSec.style.display = "block";
    }
    else {
        skillsSec.style.display = "none";
    }
});
var toggleExpo = document.getElementById("toggle-experience");
var expoSec = document.getElementById("expo");
toggleExpo.addEventListener("click", function () {
    if (expoSec.style.display === "none") {
        expoSec.style.display = "block";
    }
    else {
        expoSec.style.display = "none";
    }
});
