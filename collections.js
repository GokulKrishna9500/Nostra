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


// search product
var search = document.querySelector('.search');
var product = document.querySelectorAll('.product-item');

search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()
   for (var i=0; i<product.length; i++) {
    console.log(enteredvalue, product.length)
    var productname = product[i].querySelector("h2").textContent
    if (productname.toUpperCase().indexOf(enteredvalue)<0) {
        product[i].style.display = 'none';
    }else{
        product[i].style.display = 'block';
    }
    }
})

//filter product
var filter = document.querySelectorAll('.filter')
console.log(filter.length)

var check = document.querySelector('.products-containerone')
check.addEventListener("click", function(){
    console.log(filter[0])
    for(var i = 0; i < filter.length; i++) {
        var checked = filter[i].querySelector("input")
        console.log(checked)
    console.log(checked.checked)

        if(checked.checked === true) {
           var selected = filter[i].textContent.toLowerCase()
           console.log(selected)
           for(var j = 0; j < product.length; j++) {
           var item = product[j].querySelector("h2").classList.contains(selected)
            console.log(selected +"checking!!!" + item + product[j].querySelector("h2").classList)
           }
        }
    }
    
    

})






