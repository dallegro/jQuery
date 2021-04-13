//setInterval_vertical.js

$(function () {

    //img 크기설정
    $('#gallery img').css({
        width: 600,
        height: 600
    })

    $('#btn0').css('color', 'red');

    /*
    지역변수: var를 통해 선언된 변수
    전역변수: var 선언을 하지 않고, 변수명과 초기값만 입력한 경우, 모든곳에서 호출하여 사용 가능
    
    *같은 이름의 지역, 전역 변수가 있는 경우 지역변수가 우선 순위를 갖는다
    */

    n = 0;

    function move() {
        n++;
        if (n == 4) {
            $('#gallery').css('top', 0);
            n = 1;
        }
        $('#btngrp li').css('color', 'white');
        $('#btn' + n).css('color', 'red');
        $('#gallery').animate({
            top: -600 * n
        }); //animate()

        //선택된 버튼 조절
        if (n == 3) {
            $('#btngrp li').css('color', 'white');
            $('#btn0').css('color', 'red');
        } //if문 종료
    } //move
        
    cosmetic = setInterval(function(){
        move();
    },2000);
    
    //마우스 오버, 아웃
    $('#gallery').mouseenter(function(){
        clearInterval(cosmetic);
    }).mouseleave(function(){
        cosmetic=setInterval(function(){
            move();
        },2000);
    });
        
    
}); //jQuery