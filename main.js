let offline = document.querySelector(".offline");
let online = document.querySelector(".online");
if (window.navigator.onLine) {
    offline.style.display = "none";
} else {
    online.style.display = "none";

};
window.addEventListener("online", function() {
    offline.style.display = "none";
    online.style.display = "block";

});
window.addEventListener("offline", function() {
    online.style.display = "none";
    offline.style.display = "block";

});