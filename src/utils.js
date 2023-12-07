const projectFormModal = document.getElementById('project-form-modal');
const todoFromModal = document.getElementById('todo-form-modal');
const closeProjectModal = document.getElementById('close-project-modal');
const closeTodoModal = document.getElementById('close-todo-modal');
const addProjectBtn = document.getElementById('add-project-btn');
const addTodoBtn = document.getElementById('add-todo-btn');
const closeEditModalBtn = document.getElementById('close-edit-modal');
const editTodoModal = document.getElementById('edit-todo-modal');

closeEditModalBtn.addEventListener('click', handleEditModal);

closeProjectModal.addEventListener('click', handleProjectModal);

closeTodoModal.addEventListener('click', handleTodoModal);

addProjectBtn.addEventListener('click', handleProjectModal);

addTodoBtn.addEventListener('click', handleTodoModal);

function handleProjectModal() {
  if (!projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('close');
    projectFormModal.classList.add('open');
  } else if (projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('open');
    projectFormModal.classList.add('close');
  }
}

function handleTodoModal() {
  if (!todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('close');
    todoFromModal.classList.add('open');
  } else if (todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('open');
    todoFromModal.classList.add('close');
  }
}

function getSelectedProject(container) {
  const containerChildren = container.children;
  let index = 0;
  for (let i = 0; i < containerChildren.length; i++) {
    if (containerChildren[i].classList.contains('selected')) {
      index = i;
    }
  }
  return index;
}

function handleEditModal() {
  if (editTodoModal.className === 'form-modal') {
    editTodoModal.classList.add('open');
  } else if (editTodoModal.classList.contains('open')) {
    editTodoModal.classList.remove('open');
    editTodoModal.classList.add('close');
  } else if (editTodoModal.classList.contains('close')) {
    editTodoModal.classList.remove('close');
    editTodoModal.classList.add('open');
  }
}

export {
  handleProjectModal,
  handleTodoModal,
  handleEditModal,
  getSelectedProject,
};
