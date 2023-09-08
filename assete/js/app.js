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


var navEl = document.querySelector('.fixedMove');
var colorC = document.querySelector('.navchange');
window.addEventListener('scroll',()=>{
    let i = window.scrollY;
    if (i < 50){
        let x = 50 - i ;
        navEl.style ='top : '+ x + 'px !important';
    }
    else if( i >= 50){
        navEl.style ='top : '+ 0 + 'px !important';
    }
    if(i >= 50){
        colorC.classList.add('bgBlue')
    }
    else if(i < 50){
        colorC.classList.remove('bgBlue')
    }
});





resize();

