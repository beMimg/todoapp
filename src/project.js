import Todo from './todo';

const projectsContainer = document.querySelector('.projects-container');
const howManyProjects = document.querySelector('.how-many-projects');

class Project {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.todos = [];
    this.howManyTodosActive = 0;
  }
}

const createProject = (name, arr) => {
  if (arr.some((project) => project.name === name)) {
    return;
  }
  const newProject = new Project(name);
  arr.push(newProject);
  // saveLOCAL();
};

const deleteProject = (name, arr) => {
  const index = findTheIndex(name, arr);
  arr.splice(index, 1);
  // saveLOCAL();
};

const displayProjects = (arr) => {
  projectsContainer.innerHTML = '';
  arr.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList = `project-container`;
    projectContainer.innerHTML = `
    <button class="delete-project-btn">x</button>
    <h1 class="project-name">${project.name}</h1>
  `;
    projectsContainer.appendChild(projectContainer);
  });
};

const displayHowManyProjects = (arr) => {
  howManyProjects.textContent = arr;
};

const findTheIndex = (name, arr) => {
  const index = arr.findIndex((project) => project.name === name);
  return index;
};

// const saveLOCAL = () => {
//   let thisProjects_serialized = JSON.stringify(this.projects);
//   localStorage.setItem('projectsLOCAL', thisProjects_serialized);
// };

export {
  Project,
  createProject,
  deleteProject,
  displayProjects,
  displayHowManyProjects,
  findTheIndex,
  // saveLOCAL,
};
