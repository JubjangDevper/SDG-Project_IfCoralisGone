document.body.onscroll = function(){
    let scrollY = window.scrollY;
    let viewHeight = window.innerHeight;
    document.querySelector("#yyy").innerText = scrollY;
}
