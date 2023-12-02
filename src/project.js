import Todo from './todo';

const todosContainer = document.querySelector('.todos-container');

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

  displayTodo() {
    todosContainer.innerHTML = '';
    this.todos.forEach((todo) => {
      const todoContainer = document.createElement('div');
      todoContainer.classList = 'todo-container';
      todoContainer.innerHTML = `
      <button class="delete-todo-btn">x</button>
      <h1 class="project-name">${todo.name}</h1>
    `;
      todosContainer.appendChild(todoContainer);
    });
  }
}

export default Project;
