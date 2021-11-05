document.body.onscroll = function(){
    let scrollY = window.scrollY;
    let viewHeight = window.innerHeight;
    document.querySelector("#yyy").innerText = scrollY;

    graybg = document.querySelector('#img-l11-1').offsetTop;
    if(scrollY+viewHeight-200 < graybg){
        document.querySelector('#bg').dataset.active = 1;
    }else{
        document.querySelector('#bg').dataset.active = 0;
    }
}