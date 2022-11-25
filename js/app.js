var nav = document.getElementById("navbar")
theme = document.querySelector("meta[name='theme-color']");
window.onscroll = function(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.classList.add("scroll");
    }else{
        nav.classList.remove("scroll")
    }
}