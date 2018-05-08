# 실험적 경량 뷰 라이브러리, 'JSON-PATH.js"

## 환영합니다.

프론트엔드에서 JSON와 뷰를 연결하기 위한 실험적 경량 라이브러리를 공개합니다.

## 특징

모델을 뷰에 주입하기 위한 데이터를 선언하거나 초기화 하는 코드가 필요 없다.

## 설명

**1. JSON객체 정의하기(data.json)**

```js
{
    "entry":{
        "title":"붉은여우",
        "alt":"까꿍~! 이 사진은 붉은여우 입니다.",
        "image":"redfox.jpg"
    }
}
```

위의 코드 내용은 아래의 html 코드에서 뷰 역할을 하는 또는 특정 컨테이너에 출력할 JSON 객체 입니다.


**2. 뷰(또는 컨테이너)에 할당할 JSON의 값을 지정하는 방법**

```html
<div id="jsonBindArea">
   <ul>
         <li>
            <p style="font-weight:bold">제목 ::</p>
            <p data-json-path="entry/title" style="text-decoration:underline;color:rgb(155, 23, 23)"></p>
         </li>
         <li>
            <p style="font-weight:bold">설명 ::</p>
            <textarea data-json-path="entry/alt" cols="50" rows="5"></textarea>
         </li>
         <li>
            <img data-json-path="entry/image" width="350">
         </li>
   </ul>
   </div>      
```

**이 HTML 소스코드에서 키포인트는 다음과 같습니다.**


첫번째, id 값을 'jsonBindArea' 로 지정한 컨테이너
두번째, data-json-path 속성이 삽입된 자식 요소들

즉, 특정 컨네이너에 영역의 자식 요소들에 설정한 data-json-path 속성를 통해 해당 자식 요소에 JSON 객체의 특정 값을 출력합니다.


 **3. JSON 객체와 뷰(또는 특정 컨테이너)를 연결** 


```html
<script src='js/json-path.js'></script>
<script>            
   jQuery(function($){
         $.get( "data.json", function( data) {
            jsonTemplate("jsonBindArea",data);
         });
   });
</script>
```

우선 html 페이지에 스크립트 파일인 json-path.js를 삽입합니다.
이 코드는 Jquery에서 제공하는 AJAX 프로그래밍 기능을 이용해 JSON 객체를 가져와 뷰와 연결합니다.

JSON 객체와 뷰를 연결하기 위해 jsonTemplate 함수를 호출하며 그 방법은 아래와 같습니다.

```js
jsonTemplate("컨테이너ID",JSON 객체)
```


 ## 실행결과
  
 ![실행결과 스크린샷 입니다.](Screenshot.png) 


