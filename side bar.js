var isOpen = false
let but_sidebar = document.getElementById("side-bar-button")
let sidebar = document.querySelector(".side-bar")
but_sidebar.addEventListener("click", function () {
    if (isOpen === false) {
        sidebar.classList.add("open")
        isOpen = true
    }
    else {
        sidebar.classList.remove("open")
        isOpen = false
    }
})

