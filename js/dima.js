
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
        wrapCSS:'serial-fancy-wrap',
        padding:0,
        fitToView:false,
        autoSize:true,
        helpers:  {
            overlay : {
                css:{
                    'background-image':'none'
                }
            }
        }
    });

    $('.serial-popup-rows-wrap .serial-form-row').eq(0).find('.serial-form-acrodion-top label input').
    prop('checked',true);
    $('.serial-popup-rows-wrap .serial-form-row').eq(0).find('.serial-form-acrodion-top').addClass('active');
    $('.serial-popup-rows-wrap .serial-form-row').eq(0).find('.serial-form-acordion-bottom').slideDown(300);
    $('.serial-popup-rows-wrap .serial-form-row').eq(0).find('.serial-form-acrodion-top label').addClass('active');
    sumSerial();

    function sumSerial(){
        var sum = 0;
        $('.serial-label.active').each(function(){
            var val = $(this).find('.input-price').data('price');
            sum=sum+val;
        });
        var str = $('<span></span>');
        var sum = sum.toString();
        for(m=1;m<=sum.length;m++){
            str.prepend(sum.charAt(sum.length-m));
            if((m%3==0)&&(m!=sum.length)){
                str.prepend('&nbsp;');
            }
        }
        var allSum=str.text()+' .-';
        $('.serial-sum-val').text(allSum);
    };

    $(document).on('change','.serial-label input',function(){
        var parent = $(this).parents('.serial-label');
        console.log(parent.attr('class'));
        if(parent.is('.active')){
            parent.removeClass('active');
        }
        else{
            parent.addClass('active');
        }
        sumSerial();
    });

    $(document).on('change','.serial-form-acrodion-top input', function(){

        $('.serial-form-acrodion-top').removeClass('.active');
        $('.serial-form-acrodion-top .serial-label').removeClass('active');
        $('.serial-form-acordion-bottom input').prop('checked',false);
        $('.serial-form-acordion-bottom .serial-label').removeClass('active');
        $('.serial-form-acordion-bottom').slideUp(300);

        $(this).parents('.serial-form-acrodion-top').find('.serial-label').addClass('active');

        if($(this).parents('.serial-form-acordion-wrap').is('.has-bottom')){
            $(this).parents('.serial-form-acrodion-top').addClass('active');
            $(this).parents('.serial-form-acordion-wrap').find('.serial-form-acordion-bottom').slideDown(300);
        }
        sumSerial();
    });

};

function cardTabs(nav, tabs){
    nav.click(function(){
        if(!$(this).is('.active')){
            nav.removeClass('active');
            tabs.removeClass('active');
            var index = $(this).index();
            $(this).addClass('active');
            tabs.eq(index).addClass('active');
        }
    });
}

// /card

$(document).ready(function() {

    // index-functions call

    indexSlider();

    // /index-functions call

    // card call

    cardSlick();
    cardPopup();
    cardTabs($('.card-item-params-tabs li'), $('.card-item-params-wrap'));

    // /card call

});

$(window).load(function(){





});






