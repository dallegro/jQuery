// setInterval.js

$(document).ready(function(){
    
    //1)버튼 초기설정 - 색 변경
    $('.btngrp li:first').css({
        color: 'red'
    });
    
    //2)오른쪽으로 이동하는 함수 만들기
    page = 0;
    
    function leftmove (){
        page++; //1증가하고 시작
        
        if(page == 4){
            //4번째 이미지가 되었을 때 if문 실행
            $('#gallery').css({
                left: '0'
            });
            
            page=1;
        } //if문 종료
        
        $('.btngrp li').css({
            color: 'black'
        });
        
        $('#btn'+page).css({
            color: 'red'
        });
        
        $('#gallery').animate({
            left: 1280 * -page
        });
        
        //버튼이 4이 되었을 때 실행
        if(page==4){
            $('.btngrp li').css('color','black');
            $('#btn0').css('color','red');
        }
        
    } //leftmove
    
    
    slideStop = setInterval(function(){
            leftmove();
    },2000);
    
    
    //3) 갤러리에 마우스 오버, 아웃 처리
    //마우스 오버 : 자동실행 멈춤
    //마우스 아웃 : 자동실행 재시작
    $('#gallery, .btngrp li').mouseover(function(){
        clearInterval(slideStop);
    }).mouseout(function(){
        slideStop = setInterval(function(){
            leftmove();
        },2000);
    });
    
    
    //4) 버튼 클릭 시, 빨간색으로 변경되고 해당 이미지 표시
    $('.btngrp li').click(function(){
        
        //클릭된 버튼의 id값 저장
        cbtn = $(this).attr('id');
        console.log(cbtn);
        
        //substr(a, 문자개수) : 문자열 a인덱스부터 지정한 문자개수만큼 문자열 반환
        cbtn = Number(cbtn.substr(3, 1));
        console.log(cbtn);
        
        $('.btngrp li').css({
            color: 'black'
        });
        
        $(this).css({
            color:'red'
        });
        
        $('#gallery').animate({
            left: 1280 * -cbtn
        });
        
        
    }); //click()
    
    
    
    
    
    
}); //jQuery






