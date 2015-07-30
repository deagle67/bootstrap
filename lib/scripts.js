(function () {
    "use strict";

    window.addEventListener("load", function load(event) {
        window.removeEventListener("load", load, false);
        init();
    }, false);

    function init() {
        document.getElementById("photo").addEventListener("click", showTest, false);
        document.querySelector(".corpsduCV").addEventListener("click", showAlert, false);
        document.querySelector("#nom").addEventListener("click", showNom, false);
    }

    function showAlert() {
        alert("C'est mon cv!");
    }

    function showNom() {
        alert("C'est mon nom!");
    }

    function showTest() {
        alert("Pika!");
    }
}());