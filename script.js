const btnCreatTask = document.querySelector('#criar-tarefa');
const body = document.querySelector('body');
const listTask = document.querySelector('#lista-tarefas');
const taskContainer = document.querySelector('#container');
const inputField = document.querySelector('#texto-tarefa');
const deleteButton = document.querySelector('#apaga-tudo');
const finishedButton = document.querySelector('#remover-finalizados');

function addTask() {
  const task = inputField.value;
  if (task !== '') {
    const listItem = document.createElement('li');
    listItem.className = 'new-item';
    listItem.innerText = task;
    listTask.appendChild(listItem);

    taskContainer.reset();
  } else {
    alert('Tarefa inválida');
  }
}

function backgroundColor(event) {
  const clickedItem = event.target;
  const listTaskChildren = listTask.children;
  const backColor = 'rgb(128, 128, 128)';
  const selected = 'LI';
  if (clickedItem.tagName === selected) {
    for (let index = 0; index < listTaskChildren.length; index += 1) {
      listTaskChildren[index].style.backgroundColor = '';
    }
    clickedItem.style.backgroundColor = backColor;
  }
}

function scratch(event) {
  const clickedItem = event.target;
  const selected = 'LI';
  if (clickedItem.tagName === selected) {
    clickedItem.classList.toggle('completed');
  }
}

function cleanList() {
  localStorage.clear();
  const listTaskItem = listTask.children;
  if (listTaskItem.length !== 0) {
    while (listTask.firstChild) {
      listTask.firstChild.remove();
    }
  }
}

function removeFinished() {
  for (let index = 0; index < listTask.children.length; index += 1) {
    if (listTask.children[index].className === 'new-item completed') {
      listTask.children[index].remove();
    }
  }
  console.log(listTask.children[1].className);
  console.log(localStorage);
}

body.addEventListener('click', backgroundColor);
body.addEventListener('dblclick', scratch);
btnCreatTask.addEventListener('click', addTask);
deleteButton.addEventListener('click', cleanList);
finishedButton.addEventListener('click', removeFinished);