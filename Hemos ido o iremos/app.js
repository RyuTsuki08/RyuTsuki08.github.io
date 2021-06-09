let boxs = [document.querySelectorAll('.box1')[0],
document.querySelectorAll('.box2')[0],
document.querySelectorAll('.box3')[0],
document.querySelectorAll('.box4')[0],
document.querySelectorAll('.box5')[0],
document.querySelectorAll('.box6')[0],
document.querySelectorAll('.box7')[0]];

let Boxs2 = [document.querySelectorAll('.Box1')[0],
document.querySelectorAll('.Box2')[0],
document.querySelectorAll('.Box3')[0],
document.querySelectorAll('.Box4')[0],
document.querySelectorAll('.Box5')[0],
document.querySelectorAll('.Box6')[0],
document.querySelectorAll('.Box7')[0],
];

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

boxs[0].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[0].style.opacity = "1";
    Boxs2[0].style.visibility = "visible";
});

boxs[1].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[1].style.opacity = "1";
    Boxs2[1].style.visibility = "visible";
});

boxs[2].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[2].style.opacity = "1";
    Boxs2[2].style.visibility = "visible";
});

boxs[3].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[3].style.opacity = "1";
    Boxs2[3].style.visibility = "visible";
});

boxs[4].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[4].style.opacity = "1";
    Boxs2[4].style.visibility = "visible";
});

boxs[5].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[5].style.opacity = "1";
    Boxs2[5].style.visibility = "visible";
});

boxs[6].addEventListener('click', function(e){
    e.prevenDefault;
    Boxs2[6].style.opacity = "1";
    Boxs2[6].style.visibility = "visible";
});



