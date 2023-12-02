import Project from './project';
import App from './app';

// const thisProject = new Project('Gym');
// thisProject.createTodo('Bench press', 'Very big');
// thisProject.createTodo('Bencdddd', 'Very bdddig');
// thisProject.createTodo('3', 'Very bdddig');
// thisProject.createTodo('Bencddddsadasdasdd', 'Very bdddig');
// thisProject.createTodo('Bencdddd', 'Very bdddig');
// thisProject.createTodo('2', 'Very bdddig');
// thisProject.deleteTodo('2');
// thisProject.deleteTodo('3');
// thisProject.deleteAllTodos();
// thisProject.createTodo('2', 'Very bdddig');
// thisProject.deleteThisProject();
// console.log(thisProject);

const app = new App();
app.createProject('Gym');
app.createProject('House');
app.projects[0].createTodo('2', '21213');
console.log(app);
