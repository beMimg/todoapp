import './styles/style.css';
import {
  handleProjectModal,
  handleTodoModal,
  getSelectedContainer,
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
  displayTodo,
  displayHowManyTodos,
} from './todo';

const addProjectBtn = document.getElementById('add-project-btn');
const projectForm = document.querySelector('.project-form');
const projectInputValue = document.getElementById('project-name');
const projectsContainer = document.querySelector('.projects-container');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoForm = document.querySelector('.todo-form');
const todoInputValue = document.getElementById('todo-name');
const todosContainer = document.querySelector('.todos-container');
const projectsHTML = document.querySelector('.projects');
const todos = document.querySelector('.todos');
const goBack = document.querySelector('.go-back');

addProjectBtn.addEventListener('click', handleProjectModal);

let LOCAL_STORAGE_PROJECTS_KEY = 'projects_list';
let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
saveAndRender(projects);
displayHowManyProjects(projects.length);

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectInputValue.value;
  createProject(projectName, projects);
  handleProjectModal();
  saveAndRender(projects);
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete-project-btn') {
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
    displayTodo(projects[targetId].todos);
  }
});

addTodoBtn.addEventListener('click', handleTodoModal);

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = todoInputValue.value;
  let index = getSelectedContainer(projectsContainer);
  createTodo(todoName, projects[index].todos);
  save();
  displayTodo(projects[index].todos);
  handleTodoModal();
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete-todo-btn') {
    let index = getSelectedContainer(projectsContainer);
    const targetTodoName = e.target.nextElementSibling.textContent;
    deleteTodo(targetTodoName, projects[index].todos);
    save();
    displayTodo(projects[index].todos);
  }
});

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
