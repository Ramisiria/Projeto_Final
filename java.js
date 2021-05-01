window.addEventListener("DOMContentLoaded", function(){

    var button = document.getElementById("burger");
    console.log(button)

    var menu = document.getElementById("nav-bar")
    console.log(menu)

    button.addEventListener("click", function(){
        menu.classList.toggle("active")
        }) 

});