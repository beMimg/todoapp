import Todo from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.data = new Date();
    this.todos = [];
    this.howManyTodos = 0;
  }

  createTodo(name, priority) {
    const newTodo = new Todo(name, priority);
    this.todos.push(newTodo);
    this.howManyTodos += 1;
  }
}

export default Project;
