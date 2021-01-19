const input = document.querySelector(".todoinputter");
const addBtn = document.getElementById("btn");
const todoHolder = document.querySelector(".todos");
const todoItem = document.querySelectorAll(".todos .todo-item");
const todoText = document.querySelectorAll(".todo-item .todo-text");
const clearAll = document.querySelector(".clear-all");
const clearYes = document.getElementById("clearYes");
const cancelNo = document.getElementById("cancelNo");
const overlay = document.querySelector(".overlay");
// functions

function addTodo() {
  // creating todo item
  const note = input.value;
  if (note.length > 0) {
    const newItem = document.createElement("li");
    newItem.setAttribute("class", "todo-item");
    newItem.innerHTML = `<input class="todo-text" value="${note}" readonly>
    <div class="control-todo-item">
      <i class='fas fa-check okBtn'></i>
      <i class="far fa-edit editBtn"></i>
      <i class="far fa-trash-alt deleteBtn"></i>
    </div>`;
    todoHolder.appendChild(newItem);
    // deleting this item
    const delBtn = newItem.querySelector(".deleteBtn");
    delBtn.addEventListener("click", () => {
      delBtn.parentElement.parentElement.remove();
    });

    // editin this item
    const editBtn = newItem.querySelector(".editBtn");
    const okBtn = newItem.querySelector(".okBtn");
    editBtn.addEventListener("click", () => {
      // activating this input
      const currentInput = editBtn.parentElement.previousElementSibling;
      currentInput.removeAttribute("readonly");
      currentInput.style.backgroundColor = "#55b3b1";
      currentInput.style.color = " #fff3e6";

      currentInput.focus();
      // displaying OK button
      editBtn.style.display = "none";
      okBtn.classList.add("show");
      okBtn.addEventListener("click", () => {
        currentInput.setAttribute("readonly", "true");
        currentInput.style.backgroundColor = "#fff3e6";
        currentInput.style.color = "#252525";

        okBtn.classList.remove("show");
        editBtn.style.display = "block";
      });
    });
    // removing text from main input
    input.value = "";
  }
}

// events
addBtn.addEventListener("click", addTodo);
window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
// clear all

clearAll.addEventListener("click", () => {
  overlay.style.display = "block";
});

cancelNo.addEventListener("click", () => {
  overlay.style.display = "none";
});

clearYes.addEventListener("click", () => {
  todoHolder.innerHTML = "";
  overlay.style.display = "none";
});
