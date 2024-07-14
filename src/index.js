const n = document.querySelector(".name");
/*변수명을 name으로 하면 오류가 난다.*/
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  n.style.color = "red";
});