let toggler = document.querySelector(".nav_toggler");
let navMenu = document.querySelector(".nav_menu");
let listItem = document.getElementsByClassName("nav_list-item")

// Toggle Menu
toggler.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-active")
    if (navMenu.classList.contains("nav-menu-active")) {
        toggler.innerHTML = `<i class='bx bx-x'></i>`
    }
    else {
        toggler.innerHTML = `<i class='bx bx-menu-alt-right'></i>`
    }

})

// Active Menu
for (let i in listItem) {
    listItem[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    })
};

