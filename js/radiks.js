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
    var padHeight = $('.nav_1 .nav-menu:not(.nav-column)').outerHeight();
    $('.nav-menu:not(.nav-column)').hide();

    $('.nav_wrap').mouseover(function(){
        $(this).addClass('menuShow');
        $(this).find('.nav-title').addClass('active');
        $(this).find('.nav-menu:not(.nav-column)').slideDown('300');

        if($(this).hasClass('menuShow') && $(this).hasClass('nav_1')){
            $('.left-column-wrap').addClass('padding');
            $('.left-column-wrap').css("padding-top", padHeight);
        }
    });
    $('.nav_wrap').mouseleave(function() {
        $('.nav_wrap').removeClass('menuShow');
        $('.nav-menu:not(.nav-column)').slideUp('300');
        $('.nav-title').removeClass('active');

            if($(this).hasClass('menuShow')){
                $(this).removeClass('menuShow');
                $(this).find('.nav-title').removeClass('active');
                $(this).find('.nav-menu').slideUp('300');
            }
        $('.left-column-wrap').removeClass('padding');
        $('.left-column-wrap').css("padding-top", 0);
    });
}
function navigationBlockAcordion(){
    $('.navigation_block .nav-menu>ul>li').hover(function(e) {
        //e.preventDefault();
        if( $(this).find('ul').hasClass('active')){
            return false;
        }else{
        $('.navigation_block .nav-menu li').find('ul').slideUp(300,function(){
            $(this).removeClass('active');
        });
        $(this).find('ul').slideDown(300).addClass('active');
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
    $(this).removeAttr('style');
       var itemHeight = $(this).find('.product-item-wrapper').outerHeight();
       if(itemHeight>height){
           height = itemHeight;
       }
    });
    item.height(height);
}

function AddCart(){
        $(".numerical-input input").keydown(function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                (e.keyCode == 65 && e.ctrlKey === true) ||
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                     return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });

        var nowValue = 0;
        $(document).on('click','.input-plus',function(){
            nowValue = parseInt($(this).parent().find('input').val());

            nowValue = nowValue+ 1;
            var maxValue = $(".numerical-input input").data('max');
            if(nowValue<maxValue){
                 $(this).parent().find('input').val(nowValue);
            }
            PriceCount();
        });
        $(document).on('click','.input-minus',function(){
            nowValue = parseInt($(this).parent().find('input').val());
            nowValue = nowValue- 1;
            if(nowValue<1){
                nowValue = 1;
            }
            $(this).parent().find('input').val(nowValue);
            PriceCount();
        });

        function PriceCount(){
            var userPrice = 0;
            var point = 0;
            $('.bucket-item').each(function(){
                var buketInput = parseInt($(this).find('.numerical-input input').val());
                var bucketPrice = parseInt($(this).find('.price-span').html());

                userPrice = buketInput * bucketPrice;
                $(this).find('.numerical-input input').attr('data-price',userPrice);
                point++;
                if($('.bucket-item').length==point){
                    countValue();
                }
            });
        }

        var dataPrice = 0;
        function countValue(){
            var valOuter = 0;
            $('.bucket-item').each(function(){
                dataPrice = parseInt($(this).find('.numerical-input input').attr('data-price'));
                valOuter = valOuter + dataPrice;
            });
           $('.purchase-sum-value').html(valOuter+" "+"-");
        }
        $(document).on('click','.close-icon',function(){
            $(this).parents('.bucket-item').remove();
            PriceCount();
            if($('.bucket-item').length == 0){
                $('.purchase-sum-value').html(0+" "+"-");
            }
            countItems();
        });
        function countItems(){
            var count = $('.bucket_items .bucket-item').length;
            $('.bucket_subtitle span').html(count);
        }

        $(".numerical-input input").keyup(function(){
            PriceCount();
        });

        PriceCount();
}

function filterShow(){
    $('.filter_item_button_close').click(function() {
        $(this).parent().removeClass('active item_bottom_show');
        var checkitem = $(this).parent().find('.filter_item_bottom .filter_item_bottom_check');
        checkitem.each(function() {
            $(this).find('input[type=checkbox]').prop( "checked", false).trigger('refresh');
        });
    });
    $(document).on('click','.filter_item_button',function(){
        $(this).parent().addClass('active item_bottom_show');
    });
    $(document).on('click','.filter_item_filtering',function(){
        $(this).parent().parent().parent().removeClass('item_bottom_show');
    });
    $(document).on('click','.filter_reset',function(){
        $('.filter_item_bottom .filter_item_bottom_check input[type=checkbox]').each(function() {
            $(this).prop( "checked", false).trigger('refresh');
        });
        $('.filter_item').removeClass('active item_bottom_show');
    });

}

function filterStyling(){
    if($('.filter_item .filter_item_bottom_check input').length >1){
        $('.filter_item .filter_item_bottom_check input').styler();
    }
    if($(".katalog_products_button_select").length > 0){
        $(".katalog_products_button_select select").styler();
    }
}

function katalogButtonLineGrid(){
    if($('.katalog_products_button_grid').length >0){
        $('.icon.icon_line').click(function() {
            $('.katalog_products_button_grid span').removeClass('active');
            $(this).addClass('active');
            $('.product-items-wrap').addClass('line');

            productItemsHeightElem($('.product-item'));

            $('.product-item').each(function(){
                var titleWidth = $(this).find('.product-item-link').outerWidth();
                $(this).find('.product-item-description').css({"transform":"translateX(-"+titleWidth+"px)"})
            });

        });
        $('.icon.icon_grid').click(function() {
            $('.product-item-description').removeAttr('style');
            setTimeout(function(){
                productItemsHeightElem($('.product-item'));
            },100);

            $('.katalog_products_button_grid span').removeClass('active');
            $(this).addClass('active');
            $('.product-items-wrap').removeClass('line');
        });
    }
}

// function katalogBrendMiddleAcordion(){
//     $('.kbm_item').click(function() {
//         // if( $(this).hasClass('active')){
//         //     return false;
//         // }else{
//         //$('.kbm_row .kbm_item .kbm_description').slideUp(400).removeClass('active');
//         $(this).toggleClass('active').find('.kbm_description').slideToggle(400);
//         // }
//     });
// }
function block_product_item_one_height(){
    if($('.block_product_item').length > 0){
        setTimeout(function(){
             var height = 0;
            $('.block_product_item').each(function(){
                var itemHeight = $(this).outerHeight();
                if(itemHeight>height){
                    height = itemHeight;
                }
             });
             $('.block_product_item').height(height)
        },100)
    }
;
}
function block_information_row_one_height(){
    if($('.information_row').length > 0){
        setTimeout(function(){
             var height = 0;
            $('.information_row').each(function(){
                var itemHeight = $(this).outerHeight();
                if(itemHeight>height){
                    height = itemHeight;
                }
             });
             $('.information_row').height(height)
        },100)
    }
}
function block_news_items_one_height(){
    if($('.news_page_wrap .news_items').length > 0){
        setTimeout(function(){
             var height = 0;
            $('.news_item').each(function(){
                var itemHeight = $(this).outerHeight();
                if(itemHeight>height){
                    height = itemHeight;
                }
             });
             $('.news_item').height(height)
        },100)
    }
}
function pikupSelectWrap(){
    function pikupSelect(){
        var selected = $('#pickup').val();
        $('.pickup_adres_wrap div').removeClass('active');
        $('.pickup_adres_wrap').find("#"+selected).addClass('active');
    }
    pikupSelect();
    $(document).on('change', '#pickup', function() {
        pikupSelect();
    });
    $('.pickup_adres_show_more_title').click(function() {
        $(this).toggleClass('active');
    });

    $('.pickup_sub_title select').styler();
}

function bucketRadioStyler(){
    if($('.radio_button_normal').length > 0){
        $('.radio_button_normal').styler();
    }
    if($('.select_white').length > 0){
        $('.select_white').styler();
    }
}

function devilary_company_radio_form(){
    $(document).on('click','.devilary_company_row label',function(){
        $('.devilary_company_form').removeClass('active');
        var item = $(this).find('.checked').parent().parent().index();
        $('.devilary_company_form').eq(item).addClass('active');
    });
}

function application_for_rent_Upload(){
    var manualUploader = new qq.FineUploader({
        element: document.getElementById('fine-uploader-manual-trigger'),
        template: 'qq-template-manual-trigger',
        request: {
            endpoint: '/uploads'
        },
        thumbnails: {
        },
        autoUpload: false,
        debug: true
    });

    qq(document.getElementById("trigger-upload")).attach("click", function() {
        manualUploader.uploadStoredFiles();
    });
}

function rentCalc(){
    var itemProduct;
    $('.product-item-calc-button').click(function() {
        $(this).parent().parent().find('.product-item-bottom').addClass('active');
        itemProduct = $(this).parent().parent().parent();
        console.log(itemProduct);
    });
    $('.product-item-bottom-close').click(function() {
        $(this).parent().parent().find('.product-item-bottom').removeClass('active');
        itemProduct.find('.product-item-bottom-calc input').val(" ");
        itemProduct.find('.product-item-bottom-price .calc-price').text(0);
    });

    $(document).on('change', '.product-item-bottom-calc input', function() {
        calcSum();
    });

    function calcSum(){
        var day_3 = itemProduct.find('.product-item-description .day_3').text();
        var day_2 = itemProduct.find('.product-item-description .day_2').text();
        var day_1 = itemProduct.find('.product-item-description .day_1').text();
        var inp = itemProduct.find('.product-item-bottom-calc input').val();
        var sum = 0;
        if(7<=inp && inp<=14){
            sum = inp*parseInt(day_1);
        }else if(15<=inp && inp<=30){
             sum = inp*parseInt(day_2);
        }else if(30<inp){
             sum = inp*parseInt(day_3);
        }else{
            sum = 0;
        }
        itemProduct.find('.product-item-bottom-price .calc-price').text(sum);
    }
}


function block_elect_item_one_height(){
    if($('.elect_item').length > 0){
             var height = 0;
            $('.elect_item').each(function(){
                var itemHeight = $(this).outerHeight();
                if(itemHeight>height){
                    height = itemHeight;
                }
             });
             $('.elect_item').height(height)
    }
}
function block_elect_item_remove_button(){
    $('.elect_item_img_close').click(function() {
        $(this).parent().remove();
    });
}

function rentCardCalc(){
    var itemProduct = $('.rent-item');

    $(document).on('change', '.card-item-bottom-calc input', function() {
        calcSum();
    });

    function calcSum(){
        var day_3 = itemProduct.find('.card-item-description .day_3').text();
        var day_2 = itemProduct.find('.card-item-description .day_2').text();
        var day_1 = itemProduct.find('.card-item-description .day_1').text();
        var inp = itemProduct.find('.card-item-bottom-calc input').val();
        var sum = 0;
        if(7<=inp && inp<=14){
            sum = inp*parseInt(day_1);
        }else if(15<=inp && inp<=30){
             sum = inp*parseInt(day_2);
        }else if(30<inp){
             sum = inp*parseInt(day_3);
        }else{
            sum = 0;
        }
        itemProduct.find('.card-item-bottom-calc .calc-price').text(sum);
    }
}

$(document).ready(function() {
    rentCardCalc();
    block_elect_item_remove_button();
    block_elect_item_one_height();
    rentCalc()
    application_for_rent_Upload();
    devilary_company_radio_form();
    bucketRadioStyler();
    block_news_items_one_height();
    pikupSelectWrap();
    block_information_row_one_height();
    block_product_item_one_height();
    katalogButtonLineGrid();
    filterStyling();
    filterShow();
    navigationBlockAcordion();
    AddCart(); //!\\
    $('.fancybox').fancybox({
        autoHeight:true,
        scrolling:"no",
        padding:0
    });
    headeSelect();
    BrensSliderIndex();
    acordionIndex();
    loggedClick();
    navHover();
    navSearch();
    delSearchInput();
    ratingScript();
});
$(window).load(function() {
    productItemsHeightElem($('.reccomend-item .product-item'));
    productItemsHeightElem($('.popular-item .product-item'));
    productItemsHeightElem($('.katalog-item .product-item'));
    productItemsHeightElem($('.card-item-reccomend-product .product-item'));
});
$(window).resize(function() {
    productItemsHeightElem($('.reccomend-item .product-item'));
    productItemsHeightElem($('.popular-item .product-item'));
    block_product_item_one_height();
});