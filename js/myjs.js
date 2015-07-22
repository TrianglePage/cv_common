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
        //time_line_vertical_animate(swiper.activeIndex);
    },
    onTransitionEnd: function(swiper){
        swiperAnimate(swiper);
        time_line_vertical_animate(swiper.activeIndex);
    }
})

function time_line_vertical_animate(index)
{
    if(index == 2)
    {
        setTimeout(function(){
            $("#page3_time_line_vertical").css({
                "transition-property":"height 2s linear 0s",
                "-webkit-transition":"height 2s linear 0s",
                "-moz-transition":"height 2s linear 0s",
                "-o-transition":"height 2s linear 0s"});
            document.getElementById("page3_time_line_vertical").style.height = "80%";
        }, 500);
        setTimeout(function(){
            $("#page3_time_line_horizon_1").css({
                "transition-property":"width 1s linear, left 1s linear",
                "-webkit-transition":"width 1s linear, left 1s linear",
                "-moz-transition":"width 1s linear, left 1s linear",
                "-o-transition":"width 1s linear, left 1s linear"});
            document.getElementById("page3_time_line_horizon_1").style.width = "40%";
            document.getElementById("page3_time_line_horizon_1").style.left = "10%";
        }, 1000);

        setTimeout(function(){
            $("#page3_time_line_horizon_2").css({
                "transition-property":"width 1s linear, left 1s linear",
                "-webkit-transition":"width 1s linear, left 1s linear",
                "-moz-transition":"width 1s linear, left 1s linear",
                "-o-transition":"width 1s linear, left 1s linear"});
            document.getElementById("page3_time_line_horizon_2").style.width = "40%";
        }, 1700);

        setTimeout(function(){
            $("#page3_time_line_horizon_3").css({
                "transition-property":"width 1s linear, left 1s linear",
                "-webkit-transition":"width 1s linear, left 1s linear",
                "-moz-transition":"width 1s linear, left 1s linear",
                "-o-transition":"width 1s linear, left 1s linear"});
            document.getElementById("page3_time_line_horizon_3").style.width = "40%";
            document.getElementById("page3_time_line_horizon_3").style.left = "10%";
        }, 2300);
    }
    else
    {
        $("#page_1_blue").css({
            "transition-property":"height 0s linear 0s",
            "-webkit-transition":"height 0s linear 0s",
            "-moz-transition":"height 0s linear 0s",
            "-o-transition":"height 0s linear 0s"});
        document.getElementById("page3_time_line_vertical").style.height = "0";
    }
};