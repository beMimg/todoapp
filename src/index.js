import './styles/style.css';
import App from './app';
import handleProjectModal from './utils';

const addProjectBtn = document.getElementById('add-project-btn');
const projectForm = document.querySelector('.project-form');
const projectInputValue = document.getElementById('project-name');
const projectsContainer = document.querySelector('.projects-container');

const app = new App();
app.createProject('Gym');
app.createProject('Cleaning');
app.createProject('Cooking');

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

console.log(app);
