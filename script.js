// get buttons


let openn = document.getElementById("open");

let closee = document.getElementById("close");

// sideBar

let sideBar = document.getElementById("sideBar");

openn.addEventListener("click" , function() {
    sideBar.classList.add("show");
    sideBar.classList.remove("hide");
})

closee.addEventListener("click" , function() {
    sideBar.classList.remove("show");
    sideBar.classList.add("hide");
})