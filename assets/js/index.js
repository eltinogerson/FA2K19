var navSt = false;
$(document).ready(() => {
    $(window).on("scroll",() => {
        var wScTop = $(this).scrollTop();
        if(wScTop > 50){
            if(navSt == false){
                $('navbar').removeClass("container");
                navSt = true;
            }
        }
    });
})