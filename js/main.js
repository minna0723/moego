    $('.box1_slide').bxSlider({
        pager:false,
        mode:'fade',
        auto: true,
        autoControls: true,
        pause: 4000,
    });
    $(".box2_scroll").niceScroll({
        cursoropacitymin : 1,
        cursoropacitymax : 1,
        cursorcolor:"#aba2a1",
        cursorwidth:"8px",
        background:"rgba(0,0,0,0.1)",
        borderradius:20,
    }) ; 
    $('.box4_slides').bxSlider({
        pager:false,
        auto: true,
        autoControls: true,
        pause: 4000,
        minSlides: 3,
        maxSlides: 3, 
        slideWidth: 208,
        slideMargin: 15,
        moveSlides: 1,
    });
    $('.box5_slides').bxSlider({
        pager:false,
        auto: true,
        autoControls: true,
        pause: 4000,
        minSlides: 4,
        maxSlides: 4, 
        slideWidth: false,
        slideMargin: 18,
        moveSlides: 1,
    }); 
    $('.box8_slides').bxSlider({
        pager:true,
        pagerType:'short',
        auto: true,
        mode:'fade',
        autoControls: true,
        pause: 4000,
    });
    $('.footer_slide').bxSlider({
        pager:false,
        pause: 4000,
        minSlides: 4,
        maxSlides: 4, 
        slideWidth: false,
        slideMargin: 18,
        moveSlides: 1,
    });


$('.close_check a i').click(function(){
    $('.top_banner').css('display','none');
});

$('.box3_menu1').click(function(){
    $('.box3_menu1').addClass('active');
    $('.box3_menu2').removeClass('active');
    $('.box3_menu3').removeClass('active');
    $('.box3_menu4').removeClass('active');
    $('.box3_content1').addClass('active');
    $('.box3_content2').removeClass('active');
    $('.box3_content3').removeClass('active');
    $('.box3_content4').removeClass('active');
});
$('.box3_menu2').click(function(){
    $('.box3_menu2').addClass('active');
    $('.box3_menu1').removeClass('active');
    $('.box3_menu3').removeClass('active');
    $('.box3_menu4').removeClass('active');
    $('.box3_content2').addClass('active');
    $('.box3_content1').removeClass('active');
    $('.box3_content3').removeClass('active');
    $('.box3_content4').removeClass('active');
});
$('.box3_menu3').click(function(){
    $('.box3_menu3').addClass('active');
    $('.box3_menu2').removeClass('active');
    $('.box3_menu1').removeClass('active');
    $('.box3_menu4').removeClass('active');
    $('.box3_content3').addClass('active');
    $('.box3_content2').removeClass('active');
    $('.box3_content1').removeClass('active');
    $('.box3_content4').removeClass('active');
});
$('.box3_menu4').click(function(){
    $('.box3_menu4').addClass('active');
    $('.box3_menu2').removeClass('active');
    $('.box3_menu3').removeClass('active');
    $('.box3_menu1').removeClass('active');
    $('.box3_content4').addClass('active');
    $('.box3_content2').removeClass('active');
    $('.box3_content3').removeClass('active');
    $('.box3_content1').removeClass('active');
});


$('.box5_menu1').click(function(){
    $('.box5_menu1 img').attr("src","/images/box5_facebook_active.png");
    $('.box5_menu3 img').attr("src","/images/box5_youtube.png");
    $('.box5_menu2 img').attr("src","/images/box5_blog.png");
    $('.box5_menu1').addClass('active');
    $('.box5_menu2').removeClass('active');
    $('.box5_menu3').removeClass('active');
});
$('.box5_menu2').click(function(){
    $('.box5_menu2 img').attr("src","/images/box5_blog_active.png");
    $('.box5_menu1 img').attr("src","/images/box5_facebook.png");
    $('.box5_menu3 img').attr("src","/images/box5_youtube.png");
    $('.box5_menu2').addClass('active');
    $('.box5_menu1').removeClass('active');
    $('.box5_menu3').removeClass('active');
});
$('.box5_menu3').click(function(){
    $('.box5_menu3 img').attr("src","/images/box5_youtube_active.png");
    $('.box5_menu1 img').attr("src","/images/box5_facebook.png");
    $('.box5_menu2 img').attr("src","/images/box5_blog.png");
    $('.box5_menu3').addClass('active');
    $('.box5_menu2').removeClass('active');
    $('.box5_menu1').removeClass('active');
});

/* 반응형 */
$(window).resize(function(){
    if($(window).width() > 900){
        $(".box2_scroll").niceScroll({
            cursoropacitymin : 1,
            cursoropacitymax : 1,
            cursorcolor:"#aba2a1",
            cursorwidth:"8px",
            background:"rgba(0,0,0,0.1)",
            borderradius:20,
        }) ; 
    }
});

var filter = "win16|win32|win64|mac|macintel"; if ( navigator.platform ) { 
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
        //mobile alert('mobile 접속'); 
    } else { 
        //pc alert('pc 접속');
        $(".box7_scroll").niceScroll({
            cursoropacitymin : 1,
            cursoropacitymax : 1,
            cursorcolor:"#aba2a1",
            cursorwidth:"8px",
            background:"rgba(0,0,0,0.1)",
            borderradius:20,
            disableoutline : true,
            sensitiverail : true,
        }) ;
    } }