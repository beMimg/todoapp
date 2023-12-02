import Todo from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.data = Date.now();
    this.todos = [];
    this.howManyTodosActive = 0;
  }

  createTodo(name, priority) {
    const newTodo = new Todo(name, priority);
    this.todos.push(newTodo);
    this.howManyTodosActive += 1;
  }

  deleteTodo(name) {
    const index = this.todos.findIndex((todo) => todo.name === name);
    this.todos.splice(index, 1);
    this.howManyTodosActive -= 1;
  }

  deleteAllTodos() {
    this.todos = [];
    this.howManyTodosActive = 0;
  }

  deleteThisProject() {}
}

export default Project;
