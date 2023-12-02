import Project from './project';

class App {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const newProject = new Project(name);
    this.projects.push(newProject);
  }
}

export default App;
