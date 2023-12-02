import './styles/style.css';
import App from './app';
import handleProjectModal from './utils';

const addProjectBtn = document.getElementById('add-project-btn');
const projectForm = document.querySelector('.project-form');
const projectInputValue = document.getElementById('project-name');
const app = new App();

addProjectBtn.addEventListener('click', handleProjectModal);

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const projectName = projectInputValue.value;
  app.createProject(projectName);
  handleProjectModal();
});

app.createProject('Gym');
app.createProject('Cleaning');
app.createProject('Cooking');

app.projects[0].createTodo('Bench', 'High');
app.projects[0].createTodo('Este', 'High');
app.projects[0].createTodo('Back', 'High');
app.projects[0].createTodo('Bench', 'High');
app.projects[1].createTodo('Bench', 'High');
app.createProject('Cleaning');

app.projects[0].editTodo('Este', 'This');
console.log(app);
