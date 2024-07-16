/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const todoInput = document.querySelector("input"); /*input 태그 가져오기*/
const todo = document.querySelector(".todo_box"); /*todo_box class 가져오기*/
const submitBtn = document.getElementById("todo_submit"); /*id todo_submit 가져오기*/

/*저장공간 만들기, 제출버튼 기능 설정하기*/
let todoList = [];

function setting(){
  loadStorage();
  submitBtn.addEventListener("click", createList);
  /*submit 버튼에 createList 함수가 실행될 수 있도록 연결*/
}
setting();

/*localStorage 불러오기 */
function loadStorage(){
  const storedTodo = localStorage.getItem("TODO");
  if(storedTodo != null){
    const myTodoList = JSON.parse(storedTodo);
    myTodoList.forEach( todo => {
      const {text} = todo;
      const {checked} = todo;
      printTodo(text, checked);
      storedTodo(text, checked);
    });
  }
}

/*todo List 배열 만들기*/
function createList(e){
  e.preventDefault();
  const todoValue = todoInput.value;
  if(todoValue == "")
    alert("할 일을 입력해주세요");
  else{
    printTodo(todoValue, 0);
    storedTodo(todoValue, 0);
    todoInput.value = "";
  }
}

function storeTodo(todoValue, checkValue)
{
    const todoListObj = {
        text : todoValue,
        id : todoList.length + 1,
        checked : checkValue,
    };
    todoList.push(todoListObj);
    localStorage.setItem("TODO", JSON.stringify(todoList));
} 

function printTodo(todoValue, checkValue)  
{
    const li = document.createElement("li");
    const   span = document.createElement( "span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    if (checkValue == 1)
    {
        span.InnerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn);  
        li.id = todoList.length + 1;
        li.style.color = "#ccc";
        li.style.textDecoration="line-through";
        todo.appendChild(li);
    }
    else (checkValue == 0)
    {
        span.innerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn); 
        li.id = todoList.length + 1;
        todo.appendChild(li);
    }
    span.addEventListener("click", checkTodo);
    delBtn.addEventListener("click", deleteTodo);
}

function deleteTodo(e)
{
    const {target : button} = e;
    const li = button.parentNode;
    todo.removeChild(li);
    todoList = todoList.filter((todo) => todo.id != Number(li.id));
    localStorage.setItem("TODO", JSON.stringify(todoList));
}

function checkTodo(e)
{
    const {target : span} = e;
    const li =  span.parentNode;
    li.style.color = "#ccc";
    li.style.textDecoration="line-through";
    todoList.forEach( currentElement => {
        if(currentElement.id ==  Number(li.id))
            currentElement.checked = 1;
    });
    localStorage.setItem("TODO", JSON.stringify(todoList));
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsa0RBQWtEO0FBQ2xELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lX2NvZGluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7IC8qaW5wdXQg7YOc6re4IOqwgOyguOyYpOq4sCovXHJcbmNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9fYm94XCIpOyAvKnRvZG9fYm94IGNsYXNzIOqwgOyguOyYpOq4sCovXHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb19zdWJtaXRcIik7IC8qaWQgdG9kb19zdWJtaXQg6rCA7KC47Jik6riwKi9cclxuXHJcbi8q7KCA7J6l6rO16rCEIOunjOuTpOq4sCwg7KCc7Lac67KE7Yq8IOq4sOuKpSDshKTsoJXtlZjquLAqL1xyXG5sZXQgdG9kb0xpc3QgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmcoKXtcclxuICBsb2FkU3RvcmFnZSgpO1xyXG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTGlzdCk7XHJcbiAgLypzdWJtaXQg67KE7Yq87JeQIGNyZWF0ZUxpc3Qg7ZWo7IiY6rCAIOyLpO2WieuQoCDsiJgg7J6I64+E66GdIOyXsOqysCovXHJcbn1cclxuc2V0dGluZygpO1xyXG5cclxuLypsb2NhbFN0b3JhZ2Ug67aI65+s7Jik6riwICovXHJcbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCl7XHJcbiAgY29uc3Qgc3RvcmVkVG9kbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVE9ET1wiKTtcclxuICBpZihzdG9yZWRUb2RvICE9IG51bGwpe1xyXG4gICAgY29uc3QgbXlUb2RvTGlzdCA9IEpTT04ucGFyc2Uoc3RvcmVkVG9kbyk7XHJcbiAgICBteVRvZG9MaXN0LmZvckVhY2goIHRvZG8gPT4ge1xyXG4gICAgICBjb25zdCB7dGV4dH0gPSB0b2RvO1xyXG4gICAgICBjb25zdCB7Y2hlY2tlZH0gPSB0b2RvO1xyXG4gICAgICBwcmludFRvZG8odGV4dCwgY2hlY2tlZCk7XHJcbiAgICAgIHN0b3JlZFRvZG8odGV4dCwgY2hlY2tlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qdG9kbyBMaXN0IOuwsOyXtCDrp4zrk6TquLAqL1xyXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGUpe1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0b2RvVmFsdWUgPSB0b2RvSW5wdXQudmFsdWU7XHJcbiAgaWYodG9kb1ZhbHVlID09IFwiXCIpXHJcbiAgICBhbGVydChcIu2VoCDsnbzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIpO1xyXG4gIGVsc2V7XHJcbiAgICBwcmludFRvZG8odG9kb1ZhbHVlLCAwKTtcclxuICAgIHN0b3JlZFRvZG8odG9kb1ZhbHVlLCAwKTtcclxuICAgIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9yZVRvZG8odG9kb1ZhbHVlLCBjaGVja1ZhbHVlKVxyXG57XHJcbiAgICBjb25zdCB0b2RvTGlzdE9iaiA9IHtcclxuICAgICAgICB0ZXh0IDogdG9kb1ZhbHVlLFxyXG4gICAgICAgIGlkIDogdG9kb0xpc3QubGVuZ3RoICsgMSxcclxuICAgICAgICBjaGVja2VkIDogY2hlY2tWYWx1ZSxcclxuICAgIH07XHJcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG9MaXN0T2JqKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVE9ET1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xyXG59IFxyXG5cclxuZnVuY3Rpb24gcHJpbnRUb2RvKHRvZG9WYWx1ZSwgY2hlY2tWYWx1ZSkgIFxyXG57XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0ICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3BhblwiKTtcclxuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICBpZiAoY2hlY2tWYWx1ZSA9PSAxKVxyXG4gICAge1xyXG4gICAgICAgIHNwYW4uSW5uZXJIVE1MID0gdG9kb1ZhbHVlO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7ICBcclxuICAgICAgICBsaS5pZCA9IHRvZG9MaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgbGkuc3R5bGUuY29sb3IgPSBcIiNjY2NcIjtcclxuICAgICAgICBsaS5zdHlsZS50ZXh0RGVjb3JhdGlvbj1cImxpbmUtdGhyb3VnaFwiO1xyXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSAoY2hlY2tWYWx1ZSA9PSAwKVxyXG4gICAge1xyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdG9kb1ZhbHVlO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRlbEJ0bik7IFxyXG4gICAgICAgIGxpLmlkID0gdG9kb0xpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrVG9kbyk7XHJcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvZG8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUpXHJcbntcclxuICAgIGNvbnN0IHt0YXJnZXQgOiBidXR0b259ID0gZTtcclxuICAgIGNvbnN0IGxpID0gYnV0dG9uLnBhcmVudE5vZGU7XHJcbiAgICB0b2RvLnJlbW92ZUNoaWxkKGxpKTtcclxuICAgIHRvZG9MaXN0ID0gdG9kb0xpc3QuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9IE51bWJlcihsaS5pZCkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUT0RPXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVG9kbyhlKVxyXG57XHJcbiAgICBjb25zdCB7dGFyZ2V0IDogc3Bhbn0gPSBlO1xyXG4gICAgY29uc3QgbGkgPSAgc3Bhbi5wYXJlbnROb2RlO1xyXG4gICAgbGkuc3R5bGUuY29sb3IgPSBcIiNjY2NcIjtcclxuICAgIGxpLnN0eWxlLnRleHREZWNvcmF0aW9uPVwibGluZS10aHJvdWdoXCI7XHJcbiAgICB0b2RvTGlzdC5mb3JFYWNoKCBjdXJyZW50RWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYoY3VycmVudEVsZW1lbnQuaWQgPT0gIE51bWJlcihsaS5pZCkpXHJcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNoZWNrZWQgPSAxO1xyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRPRE9cIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==