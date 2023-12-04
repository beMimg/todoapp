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
      return;
    }
    const newProject = new Project(name);
    this.projects.push(newProject);
    this.howManyProjectsActive += 1;
    let thisProjects_serialized = JSON.stringify(this.projects);
    localStorage.setItem('projectsLOCAL', thisProjects_serialized);
    this.saveAndDisplayProjects();
  }

  deleteProject(name) {
    const index = this.findTheIndex(name);
    this.projects.splice(index, 1);
    this.howManyProjectsActive -= 1;
  }

  saveAndDisplayProjects() {
    let thisProjects_deserialized = JSON.parse(
      localStorage.getItem('projectsLOCAL'),
    );
    console.log(thisProjects_deserialized);
    if (thisProjects_deserialized) {
      projectsContainer.innerHTML = '';
      thisProjects_deserialized.forEach((project) => {
        const projectContainer = document.createElement('div');
        projectContainer.classList = `project-container`;
        projectContainer.innerHTML = `
    <button class="delete-project-btn">x</button>
    <h1 class="project-name">${project.name}</h1>
  `;
        projectsContainer.appendChild(projectContainer);
      });
    }
  }

  displayHowManyProjects() {
    howManyProjects.textContent = this.howManyProjectsActive;
  }

  findTheIndex(name) {
    const index = this.projects.findIndex((project) => project.name === name);
    return index;
  }
}

export default App;
