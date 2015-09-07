/*header*/
function loggedClick(){
    $(document).on('click','.userFirst', function(){
        $(this).parent().toggleClass('active');
        $('.userOther').slideToggle(400);
    });
    $(document).on('click','.loginIco', function(){
        $('.login_form').slideDown('400');
    });
    $(document).on('click','.login_form_close', function(){
        $('.login_form').slideUp('400');
    });

}
function navHover(){
    $('.nav_wrap').mouseover(function(){
        $(this).addClass('menuShow');
        $(this).find('.nav-title').addClass('active');
        $(this).find('.nav-menu').slideDown('300');
    });
    $('.nav_wrap').mouseleave(function() {
            if($(this).hasClass('menuShow')){
                $(this).removeClass('menuShow');
                $(this).find('.nav-title').removeClass('active');
                $(this).find('.nav-menu').slideUp('300');
            }
    });
}



$(document).ready(function() {
    loggedClick();
    navHover();
});