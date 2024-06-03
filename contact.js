// offer
var closeoffer = document.querySelector('.closeoffer');
closeoffer.addEventListener("click", function(){
    document.querySelector('.offer').style.display="none";
})

// navigation
var navicon = document.getElementById('side-navbar-activate');
var navtab = document.querySelector('.nav-panel');
navicon.addEventListener("click", function(){
    navtab.style.right = 0;
})

//close
var closenav = document.querySelector('.close-nav');
var navpanel = document.querySelector('.nav-panel');
closenav.addEventListener("click", function(){
    navtab.style.right = -50+'%';
})




// Slider
var left = document.querySelector(".slide-leftarrow")
var right = document.querySelector(".slide-rightarrow")
var slideposter = document.querySelector(".slide-poster")
var image = 0


right.addEventListener("click",function(){
    console.log(slideposter)
    if(image>200){
        slideposter.style.marginLeft =0;
    }else{
        slideposter.style.marginLeft = -image +'vw';
    }
    
})

left.addEventListener("click",function(){

    if(image==0){
        image = 200
        slideposter.style.marginLeft = - image +'vw';
    }else{
        
        image = image -100
        slideposter.style.marginLeft = - image+'vw';
    }     
})

