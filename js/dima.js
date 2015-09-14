
function indexSlider(){
    $('.index-slide').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000
    });

};

// card

function cardSlick(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable:false
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite:false,
      draggable:false
    });

    function addActiveSlide(index){
        if(index==0){
            $('.slider-nav .slick-prev').addClass('hide');
        }
        else if(index==($('.slider-nav-item').length-1)){
            $('.slider-nav .slick-next').addClass('hide');
        }
        else{
            $('.slider-nav .slick-prev, .slider-nav .slick-next').removeClass('hide');
        }
        $('.slider-nav-item').removeClass('active-style');
        $('.slider-nav-item').eq(index).addClass('active-style');

        $('.slider-nav').slick('slickGoTo', index, false);
        $('.slider-for').slick('slickGoTo', index, false);
    };

    addActiveSlide(0);

    $(document).on('click','.slider-nav-item',function(){
        var index = $(this).data('slick-index');
        addActiveSlide(index);
    });

    $(document).on('click','.slick-next:not(.hide)', function(){
        var index = $('.slider-nav-item.active-style').data('slick-index')+1;
        addActiveSlide(index);
    });

    $(document).on('click','.slick-prev:not(.hide)', function(){
        var index = $('.slider-nav-item.active-style').data('slick-index')-1;
        addActiveSlide(index);
    });

};

function cardPopup(){
    $('.button-serial').fancybox({

    });
};

// /card

$(document).ready(function() {

    // index-functions call

    indexSlider();

    // /index-functions call

    // card call

    cardSlick();
    cardPopup();

    // /card call

});

$(window).load(function(){





});






