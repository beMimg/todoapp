import Todo from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.todos = [];
    this.howManyTodosActive = 0;
  }

  createTodo(name, priority) {
    if (this.todos.some((todo) => todo.name === name)) {
      console.error('This todo already exists.');
      return;
    }
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

  editTodo(prevName, nextName) {
    const index = this.todos.findIndex((todo) => todo.name === prevName);
    this.todos[index].name = nextName;
  }
}

export default Project;
