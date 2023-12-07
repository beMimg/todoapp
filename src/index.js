import './styles/style.css';
import {
  handleProjectModal,
  handleTodoModal,
  getSelectedProject,
  handleEditModal,
} from './utils';
import {
  createProject,
  deleteProject,
  save,
  displayHowManyProjects,
  findTheIndex,
  saveAndRender,
} from './project';
import {
  createTodo,
  deleteTodo,
  displayHowManyTodos,
  displayTodo,
  editTodo,
} from './todo';

const projectForm = document.getElementById('project-form');
const projectInput = document.getElementById('project-name');
const projectsContainer = document.querySelector('.projects-container');
const todoForm = document.getElementById('todo-form');
const todoInputValue = document.getElementById('todo-name');
const todosContainer = document.querySelector('.todos-container');
const projectsHTML = document.querySelector('.projects');
const todos = document.querySelector('.todos');
const goBack = document.querySelector('.go-back');
const headerTitle = document.getElementById('this-projects-title');
const editTodoForm = document.getElementById('edit-todo-form');
const editTodoInput = document.getElementById('edit-todo-input');

let LOCAL_STORAGE_PROJECTS_KEY = 'projects_list';
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
saveAndRender(projects);
displayHowManyProjects(projects.length);

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectInput.value;
  createProject(projectName, projects);
  handleProjectModal();
  saveAndRender(projects);
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.id === 'delete-project-btn') {
    const targetProjectName = e.target.nextElementSibling.textContent;
    deleteProject(targetProjectName, projects);
    saveAndRender(projects);
  }
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.className === 'project-container') {
    e.target.classList.add('selected');
    const targetName = e.target.lastElementChild.textContent;
    const targetId = findTheIndex(targetName, projects);
    projectsHTML.classList = 'projects close';
    setTimeout(() => {
      todos.classList = 'todos open';
    }, 500);
    headerTitle.textContent = projects[targetId].name;
    displayTodo(projects[targetId].todos);
    displayHowManyTodos(projects[targetId].todos.length);
  }
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = todoInputValue.value;
  let index = getSelectedProject(projectsContainer);
  createTodo(todoName, projects[index].todos);
  save();
  displayTodo(projects[index].todos);
  handleTodoModal();
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.id === 'delete-todo-btn') {
    let index = getSelectedProject(projectsContainer);
    const targetTodoName = e.target.nextElementSibling.textContent;
    deleteTodo(targetTodoName, projects[index].todos);
    save();
    displayTodo(projects[index].todos);
  }
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.id === 'edit-todo-btn') {
    const index = getSelectedProject(projectsContainer);
    const targetTodoName =
      e.target.nextElementSibling.nextElementSibling.textContent;
    handleEditModal();
    handleEdit(index, targetTodoName);
  }
});

function handleEdit(index, targetTodoName) {
  editTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editTodo(targetTodoName, editTodoInput.value, projects[index].todos);
    save();
    displayTodo(projects[index].todos);
    handleEditModal();
  });
}

// // unselects all
goBack.addEventListener('click', () => {
  for (let i = 0; i < projects.length; i++) {
    projectsContainer.children[i].classList = 'project-container';
  }
  todos.classList = 'todos close';
  setTimeout(() => {
    projectsHTML.classList = 'projects open';
  }, 500);
});

export { projects, LOCAL_STORAGE_PROJECTS_KEY };
