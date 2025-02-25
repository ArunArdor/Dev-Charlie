/*
  Project: Dev Charlie Dashboard
  Author: Arun Batta
  Attribution:
    - jQuery Library: https://jquery.com/
    - jQuery UI: https://jqueryui.com/
    - Bootstrap Native: https://github.com/thednp/bootstrap.native
    - Console Easter Egg Inspired By: [Add Any Reference If Used]
*/

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hey Arun, don't click on the seal!");

    const secretSeal = document.getElementById("secretSeal");

    secretSeal.addEventListener("mouseenter", () => {
        secretSeal.classList.add("highlight");
        console.log("You found the hidden seal!");
    });

    secretSeal.addEventListener("mouseleave", () => {
        secretSeal.classList.remove("highlight");
    });
});
