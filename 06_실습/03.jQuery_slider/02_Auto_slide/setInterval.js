//setInterval.js

$(document).ready(function () {

    //1)버튼 초기설정 - 색 변경
    $('.btngrp li:first').css({
        color: 'red'
    });
    //2) 오른쪽으로 이동하는 함수 만들기
    page = 0;

    function leftmove() {
        page++; //1증가하고 시작
        var imgidx = $(this).index()
        if (page == 4) {
            //4번째 이미지가 되었을때 if문 실행
            $('#gallery').css({
                left: '0'
            }); //css()

            page = 1;
        } //if문 종료
        $('.btngrp li').css({
            color: 'black'

            //버튼이 3이 되었을때 실행
        })
    } //leftmove
    slideStop = setInterval(function () {
        leftmove();
    }, 2000);

    //3)갤러리에 마우스 오버, 아웃처리
    //마우스 오버 : 자동실행 멈춤
    //마우스 아웃 : 자동실행 재시작

    $('#gallery, .btngrp li').mouseover(function () {
        clearInterval(slideStop);
    }).mouseout(function () {
        slideStop = setInterval(function () {
            leftmove();
        }, 2000);
    });



    /////////////////////////////////////////////////////

    //4) 버튼 클릭시, 빨간색으로 변경되고 해당 이미지 표시

    $('.btngrp li').click(function () { //버튼을 클릭하면

        //클릭된 버튼의 id값 저장
        cbtn = $(this).attr('id');
        console.log(cbtn);

        //substr(a, 문자개수) : 문자열 a인덱스부터 지정한 문자개수만큼 문자열 반환
        cbtn = Number(cbtn.substr(3, 1));
        console.log(cbtn);
        
        var idx = $(this).index('.btngrp li'); 
        console.log(idx);
        
        $('.btngrp li').css({
           color:'black' 
        });
        $(this).css({
            color:'red'
        });
        
        $('#gallery').animate({
            left:1280*-cbtn
        });
    }) //click
    /////////////////////////////////////////////////////

}); //jQuery