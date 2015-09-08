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
function navSearch(){
    $('#nav_search').on('change keyup',function() {
        if($(this).val() !== ""){
            $('.nav_search').addClass('active')
        }else{
            $('.nav_search').removeClass('active')
        }
    });
}
function delSearchInput(){
    $(document).on('click','.search_button',function(){
        if($('.nav_search').hasClass('active')){
            $('#nav_search').val(" ");
            $('.nav_search').removeClass('active');
        }
    });
}
function headeSelect(){
    if($('.headerCity select').length > 0){
        setTimeout(function() {
          $('.headerCity select').styler();
        }, 100)
    }
}
/*/header*/

/*footer*/
function ratingScript(){
    $(document).on('mouseenter', '.rating label', function(){
        var parent=$(this).parent();
        parent.find('.form-input').removeClass('hovered');
        var index=$(this).index();
        for(var i=0;i<=index;i++){
            parent.find('label').eq(i).find('.form-input').addClass('hovered');
        }
    });
    $(document).on('mouseleave', '.rating:not(.static) label', function(){
        var parent=$(this).parent();
        parent.find('.form-input').removeClass('hovered');
    });

    $(document).on('change','.rating input', function(){
        var parent=$(this).parents('.rating');
        parent.find('.form-input').removeClass('active');
        var index=$(this).parents('label').index();
        for(var i=0;i<=index;i++){
            parent.find('label').eq(i).find('.form-input').addClass('active');
        }
    });
}

/*/footer*/

function acordionIndex(){
    $('.oplata-title').click(function(){
        $('.oplata-item.active .oplata-text').slideUp();
        $('.oplata-item').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parent().find('.oplata-text').slideDown(300);
    });
}
function BrensSliderIndex(){
    if($('.brends_items').length > 0){
        $('.brends_items').slick({
            arrows:true,
            dots:false,
            autoplay: false,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1
        });
    }
}

function productItemsHeightElem(item){
    var height = 0;
    item.each(function(){
       var itemHeight = $(this).find('.product-item-wrapper').outerHeight();
       if(itemHeight>height){
           height = itemHeight;
       }
    });
    item.height(height);
}


$(document).ready(function() {
    headeSelect();
    productItemsHeightElem($('.reccomend-item .product-item'))
    productItemsHeightElem($('.popular-item .product-item'))
    BrensSliderIndex();
    acordionIndex();
    loggedClick();
    navHover();
    navSearch();
    delSearchInput();
    ratingScript();
});
$(window).resize(function() {
    productItemsHeightElem($('.reccomend-item .product-item'))
    productItemsHeightElem($('.popular-item .product-item'))
});