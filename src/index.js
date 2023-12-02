import Project from './project';

const thisProject = new Project('Gym');
thisProject.createTodo('Bench press', 'Very big');
thisProject.createTodo('Bencdddd', 'Very bdddig');
thisProject.createTodo('3', 'Very bdddig');
thisProject.createTodo('Bencddddsadasdasdd', 'Very bdddig');
thisProject.createTodo('Bencdddd', 'Very bdddig');
thisProject.createTodo('2', 'Very bdddig');
thisProject.deleteTodo('2');
thisProject.deleteTodo('3');

console.log(thisProject);
