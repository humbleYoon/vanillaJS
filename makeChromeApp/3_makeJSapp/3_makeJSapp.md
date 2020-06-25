# Vanilla Javascript 1, #3 makeJSapp

## 3.0 Making a JS Clock part One

- clock.js

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
```



## 3.1 Making a JS Clock part Two

- setInterval(함수이름, 시간간격)
- 삼항연산자
  - 조건 ? True일 때 실행 : False일 때 실행

```javascript
function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
```



## 3.2 Saving the User Name part One

- localStorage
  - setItem
  - getItem

- index.html

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Something</title>
      <link rel="stylesheet" href="index.css" />
    </head>
    <body>
      <div class="js-clock">
        <h1>00:00</h1>
      </div>
      <form class="js-form form">
        <input type="text" placeholder="What is your name?" />
      </form>
      <h4 class="js-greetings greetings"></h4>
      <script src="clock.js"></script>
      <script src="greeting.js"></script>
    </body>
  </html>
  
  ```

- index.css

  ```css
  body {
    background-color: #ecf0f1;
  }
  
  .btn {
    cursor: pointer;
  }
  
  h1 {
    color: #2c3e50;
    transition: color 0.5s ease-in-out;
  }
  
  .clicked {
    color: #7f9c9d;
  }
  
  .form,
  .greetings {
    display: none;
  }
  
  .showing {
    display: block;
  }
  
  ```

- greeting.js

  ```javascript
  const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
  
  const USER_LS = "currentUser",
    SHOWING_ON = "showing";
  
  function paintGreeting(text) {
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
  }
  
  function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
      // she is not
    } else {
      // she is
      paintGreeting(currentUser);
    }
  }
  
  function init() {
    loadName();
  }
  
  init();
  
  ```

  

## 3.3 Saving the User Name part Two

- form
  - submit
    - event.preventDefault();
      - form 작성하고 제출할시 새로고침 되는 것이 default
      - event.preventDefault(); 를 통해 default 기능을 막음
- input.value

```javascript
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

```



## 3.4 Making a To Do List part One

- To Do List 에서 css를 만질 필요는 없음
  - 계속 showing 이므로(계속 보이도록 함)

- index.html

  ```javascript
  <!DOCTYPE html>
  <html>
    <head>
      <title>Something</title>
      <meta charset="utf-8" /> 
      <link rel="stylesheet" href="index.css" />
    </head>
    <body>
      <div class="js-clock">
        <h1>00:00</h1>
      </div>
      <form class="js-form form">
        <input type="text" placeholder="What is your name?" />
      </form>
      <h4 class="js-greetings greetings"></h4>
      <form class="js-toDoForm">
        <input type="text" placeholder="Write a to do" />
      </form>
      <ul class="js-toDoList"></ul>
      <script src="clock.js"></script>
      <script src="greeting.js"></script>
      <script src="todo.js"></script>
    </body>
  </html>ㅓ
  ```

  - ```html
    <meta charset="utf-8" />
    ```

    - emoji가 깨지지 않도록 charset 지정

- todo.js

  ```javascript
  const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
  
  const TODOS_LS = "toDos";
  
  function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
  }
  
  function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
      paintToDo(toDos);
    }
  }
  
  function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
  }
  
  init();
  
  ```

  - createElement("li" or "button" or "span"):  HTML 엘리먼트 생성
  - appendChild(엘리먼트 객체): 자식으로 삽입
  - 윈도우 키 + '.': 이모지 단축키

