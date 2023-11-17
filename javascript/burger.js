const otvoreno = false;

function OpenZaklopen() {
    var x = document.getElementById("navigation");

    if (x.style.height === "150px") {
        x.style.height = "0";
    } else {
        x.style.height = "150px";
    }
}


function setNavigationHeight() {
    var x = document.getElementById("navigation");

    const windowWidth = window.innerWidth;
    if (windowWidth > 700) {
        x.style.height = '40px';
    } else if (x.style.height === '150px') {
        x.style.height = '150px';
    } else {
        x.style.height = '0';
    }
}

// Detect the resize event of the window and call the function
window.addEventListener('resize', setNavigationHeight);

// Call the function initially to set the correct height
setNavigationHeight();