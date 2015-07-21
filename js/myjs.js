/**
 * Created by George on 2015/5/26.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    watchSlidesProgress: true,
    loop: false,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
        building_animate(swiper.activeIndex);
    },
    onTransitionEnd: function(swiper){
        //     alert("df");
        swiperAnimate(swiper);
        building_animate(swiper.activeIndex);
        page2_white_bk_animation(swiper.activeIndex);
    }
})