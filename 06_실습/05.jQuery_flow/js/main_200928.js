/////main.js

//신상품 정보 전역변수 세팅
var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
}




var acall; //setInterval 함수용
$(function (){
    //자동슬라이드 함수 호출하기
    acall=setInterval(flowImg,20);
    
    //마우스 오버시 멈춤, 아웃시 다시 실행-hover
    $('.flowImg li').hover(
        
        function(){ //마우스 오버시 실행코드
            clearInterval(acall); //인터발지우기
            
            //class값 읽어오기
            var cls = $(this).attr('class');
            console.log(cls);
            
            //신상정보 가져오기
            var info=sinsang[cls];
            console.log('신상정보: '+info);
            
            //상품정보박스 만들고 나타나게 하기
            $(this).append('<div class="ibox"></div>');
            
            //상품정보 넣기 - html
            $('.ibox').html(info.replace(/\^/g,'<br>')).animate({
                top:"105%",
                opacity:1
            },300,"easeOutCirc");
            
            
            //정규표현식 : /바꿀문자/, 만약 바꿀문자가 특수문자인 경우는 역슬래쉬를 사용한다 (ex. \^)
            
        },
        function() { //마우스 아웃시 실행코드
            acall=setInterval(flowImg, 20); //인터발 호출
            
            $('.ibox').remove(); //신상정보 삭제
        }
    
    );
    
    
    
    
}); ///jQuery




/*
함수명 : flowImg
기능 : 이미지를 왼쪽으로 계속 이동하여 흐르게 함

*/

var fnum=0;
function flowImg() {
    //함수실행여부 확인
    //console.log('흘러가고 있어요~~');
    
    fnum++; //left이동 픽셀수 증가
    //console.log(fnum);
    
    var fw=$('.flowImg li').first().width();
    //console.log(fw);
    
    //if else문
    //조건 : 이동한 픽셀수가 첫번째 li 하나의 너비보다 커졌을 때
    
    if(fnum>fw){
        $('.flowImg').append($('.flowImg li').first()).css({
            left:"0"
        });
        
        fnum=0; //초기화!
    }else{
        $('.flowImg').css({
            left:-fnum+'px'
        });
    } 
    
}






