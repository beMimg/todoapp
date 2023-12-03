import './styles/style.css';
import App from './app';
import { handleProjectModal, handleTodoModal, getIndex } from './utils';

const addProjectBtn = document.getElementById('add-project-btn');
const projectForm = document.querySelector('.project-form');
const projectInputValue = document.getElementById('project-name');
const projectsContainer = document.querySelector('.projects-container');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoForm = document.querySelector('.todo-form');
const todoInputValue = document.getElementById('todo-name');
const todosContainer = document.querySelector('.todos-container');
const projects = document.querySelector('.projects');
const todos = document.querySelector('.todos');
const goBack = document.querySelector('.go-back');

const app = new App();
app.createProject('Gym');
app.createProject('Cleaning');
app.createProject('Cooking');
app.projects[0].createTodo('Bench', 'High');
app.projects[0].createTodo('Back', 'High');
app.projects[0].createTodo('Legs', 'High');
app.projects[1].createTodo('Legs', 'High');

addProjectBtn.addEventListener('click', handleProjectModal);

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectInputValue.value;
  app.createProject(projectName);
  app.displayHowManyProjects();
  handleProjectModal();
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete-project-btn') {
    const targetProjectName = e.target.nextElementSibling.textContent;
    app.deleteProject(targetProjectName);
    app.displayProject();
    app.displayHowManyProjects();
  }
});

projectsContainer.addEventListener('click', (e) => {
  if (e.target.className === 'project-container') {
    e.target.classList.add('selected');
    const targetName = e.target.lastElementChild.textContent;
    const targetId = app.findTheIndex(targetName);
    projects.classList = 'projects close';
    setTimeout(() => {
      todos.classList = 'todos open';
    }, 500);
    app.projects[targetId].displayTodo();
  }
});

addTodoBtn.addEventListener('click', handleTodoModal);

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoName = todoInputValue.value;
  let index = getIndex(projectsContainer);
  app.projects[index].createTodo(todoName);
  app.projects[index].displayTodo();
  handleTodoModal();
  console.log(app);
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete-todo-btn') {
    let index = getIndex(projectsContainer);
    const targetTodoName = e.target.nextElementSibling.textContent;
    app.projects[index].deleteTodo(targetTodoName);
    app.projects[index].displayTodo();
  }
});

// unselects all
goBack.addEventListener('click', () => {
  for (let i = 0; i < app.projects.length; i++) {
    projectsContainer.children[i].classList = 'project-container';
  }
  todos.classList = 'todos close';
  setTimeout(() => {
    projects.classList = 'projects open';
  }, 500);
});
console.log(app);
