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

resize();

