import './styles/style.css';
import App from './app';
import { handleProjectModal, handleTodoModal } from './utils';

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
    const targetName = e.target.lastElementChild.textContent;
    const targetId = app.projects.findIndex(
      (project) => project.name === targetName,
    );
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
  app.projects[0].createTodo(todoName);
  app.projects[0].displayTodo();
  handleTodoModal();
});

todosContainer.addEventListener('click', (e) => {
  if (e.target.className === 'delete-todo-btn') {
    const targetTodoName = e.target.nextElementSibling.textContent;
    app.projects[0].deleteTodo(targetTodoName);
    app.projects[0].displayTodo();
  }
});

console.log(app);
