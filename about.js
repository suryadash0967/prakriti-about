function myFunction(x) {
    bigNavBar = document.querySelector(".navbar-navigations");
    
    if (x.matches) {
        bigNavBar.remove();
    }
}

var x = window.matchMedia("(max-width: 880px)")

myFunction(x);

x.addEventListener("change", function () {
    myFunction(x);
});