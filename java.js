let menu = document.getElementById("menuicon")
console.log(menu)
let genric = document.querySelectorAll(".toggle")
console.log(genric)
let menubar = document.querySelector(".menubar")
console.log( menubar)


menu.addEventListener("click", function(){
    menubar.classList.toggle("espciallyforheight")
    genric.forEach(function (down){
        down.classList.toggle("displayofli")
    })
} )
