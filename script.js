const menuBtn =
document.getElementById("menu-btn");
const sideMenu =
document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
});

function showSection(id) {
const sections = document.querySelectorAll('.section-content');
sections.forEach(section => section.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
