import Project from './project';

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
    this.howManyProjectsActive += 1;
  }

  deleteProject(name) {
    const index = this.projects.findIndex((project) => project.name === name);
    this.projects.splice(index, 1);
    this.howManyProjectsActive -= 1;
  }
}

export default App;
