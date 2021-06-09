let openNav = document.querySelectorAll('#menuloop')[0];

let Nav = document.querySelectorAll('#menu')[0];

let cls = document.querySelectorAll('#closeMenu')[0];

openNav.addEventListener('click', function(e){
    Nav.style.opacity = "1";
    Nav.style.visibility = "visible";
});

cls.addEventListener('click', function(e){
    Nav.style.opacity = "0";
    Nav.style.visibility = "hidden";
});

document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
    })
})

document.querySelectorAll(".modal-container").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("active");
    })
})

