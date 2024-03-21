function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var contentElement = document.getElementById("content");
    contentElement.classList.toggle("cuerpo-central-dark");
}
