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
        page3_animation();
    }
    else
    {
        page3_animation_clear();
    }
};

function page3_animation()
{
    /* line animation */
    var transition_prop1 = "height 2s linear 0s";
        setTimeout(function(){
        $("#page3_time_line_vertical").css({
            "transition-property":transition_prop1,
            "-webkit-transition":transition_prop1,
            "-moz-transition":transition_prop1,
            "-o-transition":transition_prop1,
            "height":"80%"});
    }, 500);

    var transition_prop2 = "width 1s linear, left 1s linear";
    setTimeout(function(){
        $("#page3_time_line_horizon_1").css({
            "transition-property":transition_prop2,
            "-webkit-transition":transition_prop2,
            "-moz-transition":transition_prop2,
            "-o-transition":transition_prop2,
            "width":"40%",
            "left":"10%"});
    }, 1000);

    var transition_prop3 = "width 1s linear, left 1s linear";
    setTimeout(function(){
        $("#page3_time_line_horizon_2").css({
            "transition-property":transition_prop3,
            "-webkit-transition":transition_prop3,
            "-moz-transition":transition_prop3,
            "-o-transition":transition_prop3,
            "width":"40%"});
    }, 1700);

    var transition_prop4 = "width 1s linear, left 1s linear";
    setTimeout(function(){
        $("#page3_time_line_horizon_3").css({
            "transition-property":transition_prop4,
            "-webkit-transition":transition_prop4,
            "-moz-transition":transition_prop4,
            "-o-transition":transition_prop4,
            "width":"40%",
            "left":"10%"});
    }, 2300);

    /* circle animation */
    var transition_prop5 = "width 0.1s linear,height 0.1s linear, left 0.1s linear,top 0.1s linear";
    setTimeout(function(){
        $("#page3_circle_1").css({
            "border":"2px solid rgba(255,255,255,1)",
            "transition-property":transition_prop5,
            "-webkit-transition":transition_prop5,
            "-moz-transition":transition_prop5,
            "-o-transition":transition_prop5,
            "height": "100px", "width":"100px", "left":"45%","top":"27.5%"});
    }, 1000);

    var transition_prop6 = "width 0.5s linear,height 0.5s linear, left 0.5s linear,top 0.5s linear, border 0.5s linear";
    setTimeout(function(){
        $("#page3_circle_1").css({
            "border":"2px solid rgba(255,255,255,0)",
            "transition-property":transition_prop6,
            "-webkit-transition":transition_prop6,
            "-moz-transition":transition_prop6,
            "-o-transition":transition_prop6,
            "-moz-border-radius": "300px",
            "-webkit-border-radius": "300px",
            "border-radius": "300px",
            "height": "300px", "width":"300px", "left":"35%","top":"22.5%"});
    }, 1100);
}

function page3_animation_clear()
{
    /* line animation clear */
    var transition_prop_1 = "height 0s linear";
    $("#page3_time_line_vertical").css({
    "transition-property":transition_prop_1,
    "-webkit-transition":transition_prop_1,
    "-moz-transition":transition_prop_1,
    "-o-transition":transition_prop_1,
    "height":"0"});

    $("#page3_time_line_horizon_1, #page3_time_line_horizon_2, #page3_time_line_horizon_3").css({
        "transition-property":transition_prop_1,
        "-webkit-transition":transition_prop_1,
        "-moz-transition":transition_prop_1,
        "-o-transition":transition_prop_1,});

    $("#page3_time_line_horizon_1, #page3_time_line_horizon_3").css({
        "width":"0","left":"50%"});

    $("#page3_time_line_horizon_2").css({
        "width":"0"});

    /* circle animation clear */
    var transition_prop_2 = "width 0s linear,height 0s linear, left 0s linear,top 0s linear, border 0s linear";
    $("#page3_circle_1").css({
        "border":"0px",
        "transition-property":transition_prop_2,
        "-webkit-transition":transition_prop_2,
        "-moz-transition":transition_prop_2,
        "-o-transition":transition_prop_2,
        "-moz-border-radius": "50px",
        "-webkit-border-radius": "50px",
        "border-radius": "50px",
        "height": "0px", "width":"0px", "left":"50%","top":"30%"});
}