# Vanilla Javascript 1, #2 Practice

## 2.0 Your first JS Function

```javascript
function 함수이름(인자) {}
```



## 2.1 More Function Fun

- 백틱(`)

  ```javascript
  function 함수이름(인자) {
    console.log(`Hello ${name} you are ${age} years old`);
  }
  ```



## 2.2 JS DOM Functions

- DOM: Document Object Module
- getElementById



## 2.3 Modifying the DOM with JS

- querySelector



## 2.4 Events and event handlers

- addEventListener("상황", 함수명)
  - "상황": "resize", "click", ...

```javascript
function 함수명(event) {
  console.log(event);
}
```

```javascript
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
```



## 2.5 If, else, and, or

- if, else

```javascript
if (condition) {
  block;
} else {
  block;
}
```

- and
  - &&
- or
  - ||

```javascript
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
```

- prompt
  - alert랑 비슷
  - 예전 문법. 지금은 안씀
  - 안좋음. 쓰지마



## 2.6 DOM - If else - Function practice

- rgb: https://flatuicolors.com/
- javascript DOM event MDN



- className



## 2.7 DOM - If else - Function practice Two

- JS는 스타일(css)을 직접적으로 만지지 않음
- 그저 클래스를 변경해준다거나 함



- HTML className MDN
- classList
- contains
- toggle
