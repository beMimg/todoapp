function handleBtns() {
  const addProjectBtn = document.getElementById('add-project-btn');
  const projectFormModal = document.querySelector('.project-form-modal');

  addProjectBtn.addEventListener('click', () => {
    projectFormModal.classList.add('open');
  });
}

export default handleBtns;
