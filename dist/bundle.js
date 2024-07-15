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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBbUQ7QUFDbkQsa0RBQWtEO0FBQ2xELDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZV9jb2RpbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpOyAvKmlucHV0IO2DnOq3uCDqsIDsoLjsmKTquLAqL1xyXG5jb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvX2JveFwiKTsgLyp0b2RvX2JveCBjbGFzcyDqsIDsoLjsmKTquLAqL1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9fc3VibWl0XCIpOyAvKmlkIHRvZG9fc3VibWl0IOqwgOyguOyYpOq4sCovXHJcblxyXG4vKuyggOyepeqzteqwhCDrp4zrk6TquLAsIOygnOy2nOuyhO2KvCDquLDriqUg7ISk7KCV7ZWY6riwKi9cclxubGV0IHRvZG9MaXN0ID0gW107XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nKCl7XHJcbiAgbG9hZFN0b3JhZ2UoKTtcclxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUxpc3QpO1xyXG59XHJcbnNldHRpbmcoKTtcclxuXHJcbi8qbG9jYWxTdG9yYWdlIOu2iOufrOyYpOq4sCAqL1xyXG5mdW5jdGlvbiBsb2FkU3RvcmFnZSgpe1xyXG4gIGNvbnN0IHN0b3JlZFRvZG8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRPRE9cIik7XHJcbiAgaWYoc3RvcmVkVG9kbyAhPSBudWxsKXtcclxuICAgIGNvbnN0IG15VG9kb0xpc3QgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG8pO1xyXG4gICAgbXlUb2RvTGlzdC5mb3JFYWNoKCB0b2RvID0+IHtcclxuICAgICAgY29uc3Qge3RleHR9ID0gdG9kbztcclxuICAgICAgY29uc3Qge2NoZWNrZWR9ID0gdG9kbztcclxuICAgICAgcHJpbnRUb2RvKHRleHQsIGNoZWNrZWQpO1xyXG4gICAgICBzdG9yZWRUb2RvKHRleHQsIGNoZWNrZWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9