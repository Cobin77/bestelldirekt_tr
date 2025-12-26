document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("calendly-btn");

    btn.addEventListener("click", function () {
        if (typeof Calendly !== "undefined") {
            Calendly.initPopupWidget({
                url: "https://calendly.com/bestelldirekt/30-minutiges-kennenlern-und-beratungsgesprach"
            });
        } else {
            console.error("Calendly-Skript ist noch nicht geladen.");
        }
    });
});
