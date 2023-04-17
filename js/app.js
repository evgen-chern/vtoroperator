$(function() {

    $('.change_lang').on('click', function (){
        $(this).toggleClass('active');
        $('.lang_list').stop(true).slideToggle();
    });

    let dropLink = '.dropdown_item';
    $(dropLink).hover(function (){
        $(this).children('.drop_link').toggleClass('active');
        $(this).children('.dropdown_menu').stop(true).slideToggle();
    });

    let dropMobile = '.drop_link__mobile';
    let dropMenuMobile = '.dropdown_menu__mobile';
    let popupWindow = '.popup_search';
    let closePopupLink = '.close_popup';
    let openPopupLink = '.header_top__links .search';
    $(document).on('click',function (e) {
        if (!$(e.target).closest('.change_lang').length) {
            $('.lang_list').stop(true).slideUp();
            $('.change_lang').removeClass('active');
        }
        if (!$(e.target).closest(dropMobile).length) {
            $(dropMenuMobile).stop(true).slideUp();
            $(dropMobile).removeClass('active');
        }
    });

    $(openPopupLink).on('click',function (){
        $(popupWindow).stop(true).fadeIn(300);
        $('body').addClass('locked');
    });
    $(closePopupLink).on('click',function (){
        $(popupWindow).stop(true).fadeOut(300);
        $('body').removeClass('locked');
    });

    if($(popupWindow).hasClass('opened')){
        console.log('yes');
    }

    $('.header_mobile__button').on('click',function (){
        $(this).toggleClass('active');
        $('.header_mobile__menu_wrapper').stop(true).slideToggle(400);
    });


    $(dropMobile).on('click',function (){
        $(this).toggleClass('active');
        $(this).siblings(dropMenuMobile).stop(true).slideToggle();
    });

    $('.slider__wrap').lightSlider({
        gallery: false,
        item: 1,
        loop:false,
        slideMargin: 0,
        controls: true,
        speed: 600,
    });

});