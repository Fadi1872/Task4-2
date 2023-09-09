// this function is used to chang the horizontal cards so it is no more long
function resize (){
    var VPwidath = screen.width;
    if(VPwidath < 768){
        let news1 = document.getElementById('news1');
        news1.src = "./assete/img/news1H.jpg";
        let news2 = document.getElementById('news2');
        news2.src = "./assete/img/news2H.jpg";
    }
    else if(VPwidath >= 768){
        let news1 = document.getElementById('news1');
        news1.src = "./assete/img/news1V.jpg";
        let news2 = document.getElementById('news2');
        news2.src = "./assete/img/news2V.jpg";
    }
};

window.addEventListener('load' , resize);
window.addEventListener('resize', resize);



// this code is responsible for making the navbar fixed when i scroll 50px and it changes the background color to blue
// you can see i commented some pieces of the code, it was working correctly but the dropdown menu on top div it will always
// be under the navbar so i had to make the navbar at first absolute so i can give it a z index so the drop menu no longer
// gets under the navbar
var navEl = document.querySelector('.fixedMove');
var colorC = document.querySelector('.navchange');
window.addEventListener('scroll',()=>{
    let i = window.scrollY;
    if (i < 50){
        navEl.classList.remove('fixed-top');
        navEl.classList.add('position-absolute');
        colorC.classList.remove('bgBlue');
        /*  let x = 50 - i ;
        navEl.style ='top : '+ x + 'px !important'; */
    }
    else{
        navEl.classList.add('fixed-top');
        navEl.classList.remove('position-absolute');
        colorC.classList.add('bgBlue');
        /* navEl.style ='top : '+ 0 + 'px !important;'; */
    }
});


// this code is responsible for making the navlinks interactive
// so the code adds the active class on the navlink that is related (by id) to the section we are browsing  
let sections = document.querySelectorAll('div#home, section');
let navL = document.querySelectorAll('a.nav-link');
window.onscroll = () => {
    sections.forEach(item => {
        let i = window.scrollY;
        let offset = item.offsetTop;
        let height = item.offsetHeight;
        let id = item.getAttribute('id');

        if(i >= offset && i < offset + height){
            navL.forEach(linkes => {
                linkes.classList.remove('active');
                document.querySelector('a.nav-link[href*='+ id +']').classList.add('active');
            });
        };
    });
};
