document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const navBarList = document.getElementById("navBarList");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
            // Scrolled down
            navBar.style.transition = "0.2s";
            navBarList.style.color = "white";
            navBar.style.background = "rgba(213, 81, 113,0.7)";
            navBar.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
            navBar.style.backdropFilter = "blur(4px)";
            navBar.style.webkitBackdropFilter = "blur(4px)";
            navBar.style.borderRadius = "1px";
            navBar.style.border = "1px solid rgba(255, 255, 255, 0.18)";
            navBar.style.color = "white";
            navBar.style.transition = "1s"
        } else {
            // Scrolled back to the top
            navBar.style.transition = "0.2s";
            navBar.style.background = "rgba(0, 0, 0, 0.4)";
            navBarList.style.color = "rgb(214, 82, 115)"; // Change color to white or any other color you prefer
            navBar.style.boxShadow = "none";
            navBar.style.backdropFilter = "none";
            navBar.style.webkitBackdropFilter = "none";
            navBar.style.borderRadius = "none";
            navBar.style.border = "none";
            navBar.style.transition = "1s"
        }
    });
});
