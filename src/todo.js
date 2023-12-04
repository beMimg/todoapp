import { findTheIndex } from './project';

const todosContainer = document.querySelector('.todos-container');
const howManyTodos = document.querySelector('.how-many-todos');

class Todo {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

const createTodo = (name, arr) => {
  if (arr.some((todo) => todo.name === name)) {
    console.error('This todo already exists.');
    return;
  }
  const newTodo = new Todo(name);
  arr.push(newTodo);
};

const deleteTodo = (name, arr) => {
  const index = arr.findIndex((todo) => todo.name === name);
  arr.splice(index, 1);
};

const editTodo = (prevName, nextName, arr) => {
  const index = findTheIndex(prevName, arr);
  arr[index].name = nextName;
};

const displayTodo = (arr) => {
  todosContainer.innerHTML = '';
  arr.forEach((todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList = 'todo-container';
    todoContainer.innerHTML = `
    <button class="delete-todo-btn">x</button>
    <h1 class="project-name">${todo.name}</h1>
  `;
    todosContainer.appendChild(todoContainer);
  });
};

const displayHowManyTodos = (arr) => {
  howManyTodos.textContent = arr;
};

export {
  Todo,
  createTodo,
  deleteTodo,
  editTodo,
  displayTodo,
  displayHowManyTodos,
};
