window.onload = function() {
  onReady();
};

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function onDelete(e) {
  e.target.parentElement.outerHTML = "";
}

  addToDoForm.addEventListener('submit', () => {

    // get the text
  let title = newToDoText.value;

  // create a new li
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');

  let del = document.createElement('button');
  del.textContent = "delete";
  del.onclick = onDelete;

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // set the title
  newLi.textContent = title;

  // attach the checkbox to the li
  newLi.appendChild(checkbox);

  // attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';

  });
  }
