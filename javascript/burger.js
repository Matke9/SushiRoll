function OpenZaklopen() {
    var x = document.getElementById("navigation");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}