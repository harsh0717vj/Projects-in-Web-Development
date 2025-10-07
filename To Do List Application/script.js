const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const addButton = document.querySelector("button");
function addTask() {
  if (inputBox.value.trim() === '') {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; 
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
  toggleButton(); 
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});
function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  const saved = localStorage.getItem("data");
  if (saved) listContainer.innerHTML = saved;
}
showTask();
function toggleButton() {
  if (inputBox.value.trim() === "") {
    addButton.disabled = true;
    addButton.style.opacity = "0.6";
    addButton.style.cursor = "not-allowed";
  } else {
    addButton.disabled = false;
    addButton.style.opacity = "1";
    addButton.style.cursor = "pointer";
  }
}
inputBox.addEventListener("input", toggleButton);
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && inputBox.value.trim() !== "") {
    addTask();
  }
});
toggleButton();
