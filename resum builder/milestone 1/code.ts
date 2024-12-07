const toggleBut = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSec = document.getElementById("skills") as HTMLUListElement;

toggleBut.addEventListener("click", () => {
    if (skillsSec.style.display === "none") {
        skillsSec.style.display = "block";
    } else {
        skillsSec.style.display = "none";
    }
});

const toggleExpo = document.getElementById("toggle-experience") as HTMLButtonElement;
const expoSec = document.getElementById("expo") as HTMLUListElement;

toggleExpo.addEventListener("click", () => {
    if (expoSec.style.display === "none") {
        expoSec.style.display = "block";
    } else {
        expoSec.style.display = "none";
    }
});