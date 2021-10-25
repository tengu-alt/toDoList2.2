let arrayOfTasks = [];
function clear() {
  while (document.getElementById('ls').firstChild) {
    document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
  }
  localStorage.clear();
  document.location.reload();
}
function adder() {
  if (
    document.querySelector('input').value !== '' &&
    document.querySelector('input').value === document.querySelector('input').value.trimRight()
  ) {
    while (document.getElementById('ls').firstChild) {
      document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
    }
    arrayOfTasks.push(document.querySelector('input').value);
    arrayOfTasks.sort();
    localStorage.setItem('tasks', arrayOfTasks);
    document.querySelector('input').value = '';

    arrayOfTasks = localStorage.getItem('tasks').split(',');
    for (let i = 0; i < arrayOfTasks.length; i += 1) {
      const task = document.createElement('li');
      task.innerHTML = arrayOfTasks[i];
      document.getElementById('ls').appendChild(task);
    }
  }
}
function toDoList() {
  if (localStorage.getItem('tasks') != null) {
    arrayOfTasks = localStorage.getItem('tasks').split(',');
    arrayOfTasks.sort();
  }
  const form = document.createElement('input');
  form.type = 'text';
  document.body.append(form);
  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'addNew';
  document.body.append(button);
  const buttonClr = document.createElement('button');
  buttonClr.type = 'button';
  buttonClr.innerHTML = 'clear';
  document.body.append(buttonClr);
  buttonClr.addEventListener('click', clear);
  const container = document.createElement('div');
  container.id = 'cont';
  document.body.append(container);
  const list = document.createElement('ul');
  list.id = 'ls';
  document.getElementById('cont').appendChild(list);
  for (let i = 0; i < arrayOfTasks.length; i += 1) {
    const task = document.createElement('li');
    task.innerHTML = arrayOfTasks[i];
    document.getElementById('ls').appendChild(task);
  }
  button.addEventListener('click', adder);
  window.addEventListener('keypress', function event(e) {
    if (e.key === 'Enter') {
      adder();
    }
  });
}
window.addEventListener('load', toDoList);
