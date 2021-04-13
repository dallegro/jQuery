// main.js

//신상품 정보 전역변수 셋팅
var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG ^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
}

var acall; //setInterval 담을 변수!

$(function () {

    //자동슬라이드 함수 호출
    acall = setInterval(flowImg, 20);


    //마우스 오버시 멈춤, 마우스 아웃시 다시 실행!
    $('.flowImg li').hover(function () { //마우스오버시 실행

        //인터벌 지우기
        clearInterval(acall); //.clearInterval() - 일정 시간마다 함수를 반복 실행 중지


        //각 li의 class값 읽어오기
        var cls = $(this).attr('class');
        console.log('클래스명 : ' + cls);
        /*.attr() - 새로운 속성을 생성하거나 기존의 속성을 변경할 때 사용합니다.*/

        //신상정보 가져오기
        var info = sinsang[cls]; //=요소[속성]; - 특정 속성을 가지고 있는 문서 객체를 선택함
        console.log('신상정보 : ' + info);

        //상품 정보박스 만들기
        $(this).append('<div class= "ibox"></div>');
        /*$(a).append(b) -  b를 a안의 뒷 부분에 추가함 
        선택한 요소(b)를 (a)의 마지막 위치에 추가합니다*/

        //상품정보 넣기
        $('.ibox').html(info.replace(/\^/g, '<br>'))
            .animate({
                top: '105%',
                opacity: 1
            }, 300, 'easeOutCirc');
        //.html() - 선택한 요소 내부의 html을 읽고 쓸 수 있습니다.
        // 정규표현식 : /바꿀문자/ 
        // 만약 바꿀 문자가 특수문자라면 역슬래시 사용!! ex) \^
        // .replace()중의 g는?? ->> global을 의미함, 내용안의 대체할 문자를 모두 찾는다는 의미! 예제에서는 모든 '/\^/'를 찾는다는 말!

    }, function () { //마우스 아웃시 실행
        acall = setInterval(flowImg, 20); //인터발 실행!
        //.setInterval(function(함수), millisecond(1/1000초)) 
        // -  일정 시간마다 함수를 반복 실행함

        $('.ibox').remove(); //신상정보박스 삭제

    }); //.hover() - 선택한 요소에 마우스를 올렸을 때(mouseenter)와 벗어 났을 때(mouseleave) 각각 이벤트가 발생

}); //jQuery



/*/////////////////////////////////////////////////
    함수명 : flowImg
    기능 : 이미지를 왼쪽으로 계속 이동하여 흐르게함
/////////////////////////////////////////////////*/


var fnum = 0; //이동하는 픽셀 수를 담는 변수

function flowImg() {
    console.log('나는 흘러가고 있어~~~');

    fnum++; //1씩 증가(left이동 픽셀수 증가)
    console.log(fnum);

    var fw = $('.flowImg li').first().width(); //첫번째 li크기
    /*flow width*/
    console.log('li의 크기: ' + fw);

    //if else문
    //이동한 픽셀수가 li 하나의 너비보다 커졌을때
    //.flowImg의 첫번째 li를 맨 뒤로 이동시키고 left값을 초기화

    /*$(a).append(b) -  b를 a안의 뒷 부분에 추가함 
    선택한 요소(b)를 (a)의 마지막 위치에 추가합니다*/

    /*$(a).prepend(b) - b를 a안의 앞 부분에 추가함 
    선택한 요소(b)를 (a)의 처음 위치에 추가합니다.*/

    if (fnum > fw) {
        $('.flowImg').append($('.flowImg li:first')).css({
            left: 0
        });

        fnum = 0;
    } else {
        $('.flowImg').css({
            left: -fnum + 'px'
        });
    }
} //flowImg