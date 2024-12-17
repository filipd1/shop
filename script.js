const mobileMenu = document.querySelector(".mobile__menu")
const mobileMenuIcon = document.querySelector(".mobile__menu__icon")
const mobileMenuExit = document.querySelector(".mobile__menu__icon--exit")

mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("show")
})

mobileMenuExit.addEventListener("click", () => {
    mobileMenu.classList.remove("show")
})

document.addEventListener("click", () => {
    if (mobileMenu.classList.contains("show") && !mobileMenu.contains(event.target) && event.target !== mobileMenuIcon)
        mobileMenu.classList.remove("show")
})