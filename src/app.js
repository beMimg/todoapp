import Project from './project';

const projectsContainer = document.querySelector('.projects-container');
const howManyProjects = document.querySelector('.how-many-projects');

class App {
  constructor() {
    this.projects = [];
    this.howManyProjectsActive = 0;
  }

  createProject(name) {
    if (this.projects.some((project) => project.name === name)) {
      console.error('This project already exists.');
      return;
    }
    const newProject = new Project(name);
    this.projects.push(newProject);
    this.displayProject();
    this.howManyProjectsActive += 1;
  }

  deleteProject(name) {
    const index = this.projects.findIndex((project) => project.name === name);
    this.projects.splice(index, 1);
    this.howManyProjectsActive -= 1;
  }

  displayProject() {
    projectsContainer.innerHTML = '';
    this.projects.forEach((project) => {
      const projectContainer = document.createElement('div');
      projectContainer.classList = 'project-container';
      projectContainer.innerHTML = `
    <button class="delete-project-btn">x</button>
    <h1 class="project-name">${project.name}</h1>
  `;
      projectsContainer.appendChild(projectContainer);
    });
  }

  displayHowManyProjects() {
    howManyProjects.textContent = this.howManyProjectsActive;
  }
}

export default App;
