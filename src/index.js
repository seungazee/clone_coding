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