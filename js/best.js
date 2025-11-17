$(function(){
    
    // ham 클릭시 drawer 슬라이드 다운 과 슬라이드업 되게 하기
    let ham = document.querySelector('header .h_bottom .h_bottom_i .ham');
    let drawer = document.querySelector('header .h_bottom .h_bottom_i .menu_drawer');


    $(drawer).hide();
    $(ham).on('click',function(){
        $(drawer).stop().slideToggle();
    });


    // top버튼 동작
    $(".top").on("click",function(){
        $(window).scrollTop(0);
    });

});