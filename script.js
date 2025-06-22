function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" width="20" alt="Delete" />';
  delBtn.style.marginLeft = '10px';
  delBtn.style.cursor = 'pointer';
  delBtn.style.border = 'none';
  delBtn.style.background = 'none';

  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
