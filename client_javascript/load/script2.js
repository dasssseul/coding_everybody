// script 태그를 head 태그에 위치시켰을 경우 window.onload 이용
// 웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수
window.onload = function(){
    var hw = document.getElementById('hw');
        hw.addEventListener('click', function(){
            alert('Hello world');
        })
}