# Vanilla Javascript 1, #1 Practice

## 2.0 Your first JS Function

```javascript
function 함수이름(인자){

}
```





## 2.1 More Function Fun

- 백틱(`)

  ```javascript
  function 함수이름(인자){
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
function 함수명(event){
	console.log(event)
}
```

```javascript
const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);
```



