function handleProjectModal() {
  const projectFormModal = document.querySelector('.project-form-modal');
  if (!projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('close');
    projectFormModal.classList.add('open');
  } else if (projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('open');
    projectFormModal.classList.add('close');
  }
}

function handleTodoModal() {
  const todoFromModal = document.querySelector('.todo-form-modal');
  if (!todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('close');
    todoFromModal.classList.add('open');
  } else if (todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('open');
    todoFromModal.classList.add('close');
  }
}

function getIndex(container) {
  const containerChildren = container.children;
  let index = 0;
  for (let i = 0; i < containerChildren.length; i++) {
    if (containerChildren[i].classList.contains('selected')) {
      index = i;
    }
  }
  return index;
}

export { handleProjectModal, handleTodoModal, getIndex };
