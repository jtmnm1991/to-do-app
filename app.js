function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  let id = 0;

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    newToDoText.value = '';

    renderTheUI();
  };

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const button = document.createElement('button');

    newLi.textContent = toDo.title;
    button.textContent = "delete";
    button.addEventListener('click', event => {
      toDos = toDos.filter((t) => t.id != toDo.id);
    renderTheUI();
    });

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(button);
  });
}

  addToDoForm.addEventListener('submit', event => {
    console.log("b");
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';

  });
};

window.onload = function() {
  onReady();
};
