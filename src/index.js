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