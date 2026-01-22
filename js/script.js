const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("mobileOverlay");

document.getElementById("openMobileMenu").onclick = () => {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
};

document.getElementById("closeMobileMenu").onclick = closeMenu;
overlay.onclick = closeMenu;

function closeMenu() {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
}
