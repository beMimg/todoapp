/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCAL_STORAGE_PROJECTS_KEY: () => (/* binding */ LOCAL_STORAGE_PROJECTS_KEY),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




var addProjectBtn = document.getElementById('add-project-btn');
var projectForm = document.getElementById('project-form');
var projectInputValue = document.getElementById('project-name');
var projectsContainer = document.querySelector('.projects-container');
var addTodoBtn = document.getElementById('add-todo-btn');
var todoForm = document.getElementById('todo-form');
var todoInputValue = document.getElementById('todo-name');
var todosContainer = document.querySelector('.todos-container');
var projectsHTML = document.querySelector('.projects');
var todos = document.querySelector('.todos');
var goBack = document.querySelector('.go-back');
var headerTitle = document.getElementById('this-projects-title');
addProjectBtn.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_1__.handleProjectModal);
var LOCAL_STORAGE_PROJECTS_KEY = 'projects_list';
var projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
(0,_project__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)(projects);
(0,_project__WEBPACK_IMPORTED_MODULE_2__.displayHowManyProjects)(projects.length);
projectForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var projectName = projectInputValue.value;
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(projectName, projects);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleProjectModal)();
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)(projects);
});
projectsContainer.addEventListener('click', function (e) {
  if (e.target.id === 'delete-project-btn') {
    var targetProjectName = e.target.nextElementSibling.textContent;
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(targetProjectName, projects);
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)(projects);
  }
});
projectsContainer.addEventListener('click', function (e) {
  if (e.target.className === 'project-container') {
    e.target.classList.add('selected');
    var targetName = e.target.lastElementChild.textContent;
    var targetId = (0,_project__WEBPACK_IMPORTED_MODULE_2__.findTheIndex)(targetName, projects);
    projectsHTML.classList = 'projects close';
    setTimeout(function () {
      todos.classList = 'todos open';
    }, 500);
    headerTitle.textContent = projects[targetId].name;
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[targetId].todos);
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayHowManyTodos)(projects[targetId].todos.length);
  }
});
addTodoBtn.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_1__.handleTodoModal);
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var todoName = todoInputValue.value;
  var index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectedContainer)(projectsContainer);
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.createTodo)(todoName, projects[index].todos);
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.save)();
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[index].todos);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleTodoModal)();
});
todosContainer.addEventListener('click', function (e) {
  if (e.target.id === 'delete-todo-btn') {
    var index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectedContainer)(projectsContainer);
    var targetTodoName = e.target.nextElementSibling.textContent;
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(targetTodoName, projects[index].todos);
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.save)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[index].todos);
  }
});

// // unselects all
goBack.addEventListener('click', function () {
  for (var i = 0; i < projects.length; i++) {
    projectsContainer.children[i].classList = 'project-container';
  }
  todos.classList = 'todos close';
  setTimeout(function () {
    projectsHTML.classList = 'projects open';
  }, 500);
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   displayHowManyProjects: () => (/* binding */ displayHowManyProjects),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   findTheIndex: () => (/* binding */ findTheIndex),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   saveAndRender: () => (/* binding */ saveAndRender)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var projectsContainer = document.querySelector('.projects-container');
var howManyProjects = document.getElementById('how-many-projects');
var Project = /*#__PURE__*/_createClass(function Project(name) {
  _classCallCheck(this, Project);
  this.name = name;
  this.id = Date.now();
  this.todos = [];
  this.howManyTodosActive = 0;
});
var createProject = function createProject(name, arr) {
  if (arr.some(function (project) {
    return project.name === name;
  }) || name.length === 0) {
    return;
  }
  displayHowManyProjects(arr.length + 1);
  var newProject = new Project(name);
  arr.push(newProject);
};
var deleteProject = function deleteProject(name, arr) {
  var index = findTheIndex(name, arr);
  arr.splice(index, 1);
  displayHowManyProjects(arr.length);
};
var displayProjects = function displayProjects(arr) {
  projectsContainer.innerHTML = '';
  arr.forEach(function (project) {
    var projectContainer = document.createElement('div');
    projectContainer.classList = "project-container";
    projectContainer.innerHTML = "\n    <button id=\"delete-project-btn\" class=\"delete-btn\">x</button>\n    <h1 class=\"project-name\">".concat(project.name, "</h1>\n  ");
    projectsContainer.appendChild(projectContainer);
  });
};
var displayHowManyProjects = function displayHowManyProjects(arr) {
  howManyProjects.textContent = arr;
};
var findTheIndex = function findTheIndex(name, arr) {
  var index = arr.findIndex(function (project) {
    return project.name === name;
  });
  return index;
};
function save() {
  localStorage.setItem(___WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(___WEBPACK_IMPORTED_MODULE_0__.projects));
}
function saveAndRender(arr) {
  save();
  displayProjects(arr);
}


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   displayHowManyTodos: () => (/* binding */ displayHowManyTodos),
/* harmony export */   displayTodo: () => (/* binding */ displayTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var todosContainer = document.querySelector('.todos-container');
var howManyTodos = document.getElementById('how-many-todos');
var Todo = /*#__PURE__*/_createClass(function Todo(name, priority) {
  _classCallCheck(this, Todo);
  this.name = name;
  this.priority = priority;
});
var createTodo = function createTodo(name, arr) {
  if (arr.some(function (todo) {
    return todo.name === name;
  }) || name.length === 0) {
    return;
  }
  var newTodo = new Todo(name);
  arr.push(newTodo);
  displayHowManyTodos(arr.length);
};
var deleteTodo = function deleteTodo(name, arr) {
  var index = arr.findIndex(function (todo) {
    return todo.name === name;
  });
  arr.splice(index, 1);
  displayHowManyTodos(arr.length);
};
var editTodo = function editTodo(prevName, nextName, arr) {
  var index = (0,_project__WEBPACK_IMPORTED_MODULE_0__.findTheIndex)(prevName, arr);
  arr[index].name = nextName;
};
var displayTodo = function displayTodo(arr) {
  todosContainer.innerHTML = '';
  arr.forEach(function (todo) {
    var todoContainer = document.createElement('div');
    todoContainer.classList = 'todo-container';
    todoContainer.innerHTML = "\n    <button id=\"delete-todo-btn\" class=\"delete-btn\">x</button>\n    <h1 class=\"project-name\">".concat(todo.name, "</h1>\n  ");
    todosContainer.appendChild(todoContainer);
  });
};
var displayHowManyTodos = function displayHowManyTodos(arr) {
  howManyTodos.textContent = arr;
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectedContainer: () => (/* binding */ getSelectedContainer),
/* harmony export */   handleProjectModal: () => (/* binding */ handleProjectModal),
/* harmony export */   handleTodoModal: () => (/* binding */ handleTodoModal)
/* harmony export */ });
var projectFormModal = document.getElementById('project-form-modal');
var todoFromModal = document.getElementById('todo-form-modal');
var closeProjectModal = document.getElementById('close-project-modal');
var closeTodoModal = document.getElementById('close-todo-modal');
var addProjectBtn = document.getElementById('add-project-btn');
var addTodoBtn = document.getElementById('add-todo-btn');
closeProjectModal.addEventListener('click', handleProjectModal);
closeTodoModal.addEventListener('click', handleTodoModal);
addProjectBtn.addEventListener('click', handleProjectModal);
addTodoBtn.addEventListener('click', handleTodoModal);
function handleProjectModal() {
  if (!projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('close');
    projectFormModal.classList.add('open');
  } else if (projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('open');
    projectFormModal.classList.add('close');
  }
}
function handleTodoModal() {
  if (!todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('close');
    todoFromModal.classList.add('open');
  } else if (todoFromModal.classList.contains('open')) {
    todoFromModal.classList.remove('open');
    todoFromModal.classList.add('close');
  }
}
function getSelectedContainer(container) {
  var containerChildren = container.children;
  var index = 0;
  for (var i = 0; i < containerChildren.length; i++) {
    if (containerChildren[i].classList.contains('selected')) {
      index = i;
    }
  }
  return index;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-items: center;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

.background {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.app {
  z-index: 1;
  height: 85%;
  width: 85%;
  border-radius: 20px;
  background-color: #101014;
  overflow: hidden;
  box-shadow: 6px 6px 10px;
}

.projects {
  height: 100%;
  grid-template-rows: 10% auto;
  opacity: 1;
  display: grid;
  overflow: hidden;
}

.projects.close {
  opacity: 0;
  display: none;
  animation: displayGridToNone 0.5s ease-in-out;
}

.projects.open {
  opacity: 1;
  display: grid;
  animation: displayNoneToGrid 0.5s ease-in-out;
}

header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background-color: #1b1b1c;
}

.header-title {
  font-size: 1.5rem;
  margin-left: 10px;
}

.add-btn {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.add-btn:hover span {
  animation: threeSixty 0.5s ease;
}

.add-btn span {
  font-size: 3rem;
  color: white;
}

.how-many {
  font-size: 1.3rem;
}

.form-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  opacity: 1;
  align-items: center;
  justify-content: center;
  z-index: 20000;
}

.form-modal.open {
  display: flex;
  animation: displayNoneToFlex 1s ease;
}

.form-modal.close {
  animation: displayFlexToNone 1s ease;
}

.form {
  position: relative;
  background-color: #ffffff;
  font-weight: 500;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
}

.form div {
  display: flex;
  flex-direction: column;
}

.form input {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #dbdbdb;
  min-width: 300px;
}

.close-modal-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
}

.form-btn-submit {
  background-color: rgb(36, 109, 246);
  padding: 5px;
  border-radius: 3px;
  font-size: 1.3rem;
  border: none;
  color: white;
  cursor: pointer;
}

.projects-container {
  grid-gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  display: grid;
  overflow: auto;
  justify-content: center;
}

.project-container {
  max-height: 250px;
  border-radius: 20px;
  background-color: #e7dcf4;
  color: #101014;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  cursor: pointer;
  transition: all 0.5s ease;
}

.project-container:hover {
  transform: translateY(-2%);
}

.project-name {
  font-size: 100%;
  overflow: hidden;
  display: grid;
  align-self: center;
  justify-self: center;
  overflow: hidden;
}

.delete-btn {
  font-size: 1.6rem;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: grid;
  justify-self: flex-end;
  background-color: transparent;
  color: #101014;
}

/* todos */

.todos {
  height: 100%;
  grid-template-rows: 10% auto;
  opacity: 1;
  display: grid;
  overflow: hidden;
}

.todos.close {
  opacity: 0;
  display: none;
  animation: displayGridToNone 0.5s ease-in-out;
}

.todos.open {
  opacity: 1;
  display: grid;
  animation: displayNoneToGrid 0.5s ease-in-out;
}

.top-left-header {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.todos-container {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, 100px));
  grid-gap: 20px;
  padding: 20px;
  overflow: auto;
}

.todo-container {
  background-color: #e0c5dc;
  color: black;
  border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  cursor: pointer;
  transition: all 0.5s ease;
}

.todo-container:hover {
  transform: translateY(-2%);
}

.todo-name {
  font-size: 100%;
  overflow: hidden;
  display: grid;
  align-self: center;
  justify-self: center;
}

.delete-todo-btn {
  font-size: 1.6rem;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: grid;
  justify-self: flex-end;
  background-color: transparent;
  color: #101014;
  transition: all 0.3s ease;
}

.delete-todo-btn:hover {
  transform: scale(1.4);
}

.go-back {
  background-color: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.go-back:hover {
  transform: scale(1.5);
}

@media only screen and (max-width: 767px) {
  .header-title {
    font-size: 1rem;
    margin-left: 10px;
  }

  .projects-container {
    grid-gap: 10px;
    padding: 20px;
    font-size: 0.9rem;
    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));
  }

  .todos-container {
    grid-template-rows: repeat(auto-fit, minmax(50px, 75px));
    grid-gap: 10px;
    padding: 20px;
    overflow: auto;
    font-size: 0.8rem;
  }

  .add-btn span {
    font-size: 2rem;
  }

  .top-left-header {
    gap: 3px;
  }

  .form {
    font-size: 1rem;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
  }

  .form input {
    padding: 7px;
    font-size: 1rem;
  }

  .form button {
    background-color: rgb(27, 136, 173);
    padding: 7px;
    border-radius: 10px;
    font-size: 1rem;
    border: none;
    color: white;
    cursor: pointer;
  }
}

@keyframes displayNoneToFlex {
  0% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display: flex;
  }
}

@keyframes displayFlexToNone {
  0% {
    opacity: 1;
    display: flex;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes displayGridToNone {
  0% {
    opacity: 1;
    display: grid;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes displayNoneToGrid {
  0% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 1;
    display: grid;
  }
}

@keyframes threeSixty {
  0% {
    transform: rotateY(0%);
  }

  100% {
    transform: rotateY(360deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  color: white;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n\n.background {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #b993d6; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    #8ca6db,\n    #b993d6\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    #8ca6db,\n    #b993d6\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.app {\n  z-index: 1;\n  height: 85%;\n  width: 85%;\n  border-radius: 20px;\n  background-color: #101014;\n  overflow: hidden;\n  box-shadow: 6px 6px 10px;\n}\n\n.projects {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.projects.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n\n.projects.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n  background-color: #1b1b1c;\n}\n\n.header-title {\n  font-size: 1.5rem;\n  margin-left: 10px;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n}\n.add-btn:hover span {\n  animation: threeSixty 0.5s ease;\n}\n\n.add-btn span {\n  font-size: 3rem;\n  color: white;\n}\n\n.how-many {\n  font-size: 1.3rem;\n}\n\n.form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n\n.form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.form {\n  position: relative;\n  background-color: #ffffff;\n  font-weight: 500;\n  gap: 20px;\n  padding: 30px;\n  border-radius: 10px;\n  color: black;\n  display: flex;\n  flex-direction: column;\n}\n\n.form div {\n  display: flex;\n  flex-direction: column;\n}\n\n.form input {\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: none;\n  background-color: #dbdbdb;\n  min-width: 300px;\n}\n\n.close-modal-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  color: black;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.form-btn-submit {\n  background-color: rgb(36, 109, 246);\n  padding: 5px;\n  border-radius: 3px;\n  font-size: 1.3rem;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.projects-container {\n  grid-gap: 20px;\n  padding: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));\n  display: grid;\n  overflow: auto;\n  justify-content: center;\n}\n\n.project-container {\n  max-height: 250px;\n  border-radius: 20px;\n  background-color: #e7dcf4;\n  color: #101014;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.project-container:hover {\n  transform: translateY(-2%);\n}\n\n.project-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  overflow: hidden;\n}\n\n.delete-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  justify-self: flex-end;\n  background-color: transparent;\n  color: #101014;\n}\n\n/* todos */\n\n.todos {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.todos.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n\n.todos.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\n.top-left-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.todos-container {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(50px, 100px));\n  grid-gap: 20px;\n  padding: 20px;\n  overflow: auto;\n}\n\n.todo-container {\n  background-color: #e0c5dc;\n  color: black;\n  border-radius: 20px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.todo-container:hover {\n  transform: translateY(-2%);\n}\n\n.todo-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n}\n\n.delete-todo-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  justify-self: flex-end;\n  background-color: transparent;\n  color: #101014;\n  transition: all 0.3s ease;\n}\n\n.delete-todo-btn:hover {\n  transform: scale(1.4);\n}\n\n.go-back {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.go-back:hover {\n  transform: scale(1.5);\n}\n\n@media only screen and (max-width: 767px) {\n  .header-title {\n    font-size: 1rem;\n    margin-left: 10px;\n  }\n\n  .projects-container {\n    grid-gap: 10px;\n    padding: 20px;\n    font-size: 0.9rem;\n    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));\n  }\n\n  .todos-container {\n    grid-template-rows: repeat(auto-fit, minmax(50px, 75px));\n    grid-gap: 10px;\n    padding: 20px;\n    overflow: auto;\n    font-size: 0.8rem;\n  }\n\n  .add-btn span {\n    font-size: 2rem;\n  }\n\n  .top-left-header {\n    gap: 3px;\n  }\n\n  .form {\n    font-size: 1rem;\n    gap: 20px;\n    padding: 20px;\n    border-radius: 10px;\n  }\n\n  .form input {\n    padding: 7px;\n    font-size: 1rem;\n  }\n\n  .form button {\n    background-color: rgb(27, 136, 173);\n    padding: 7px;\n    border-radius: 10px;\n    font-size: 1rem;\n    border: none;\n    color: white;\n    cursor: pointer;\n  }\n}\n\n@keyframes displayNoneToFlex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n\n@keyframes displayFlexToNone {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayGridToNone {\n  0% {\n    opacity: 1;\n    display: grid;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayNoneToGrid {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: grid;\n  }\n}\n\n@keyframes threeSixty {\n  0% {\n    transform: rotateY(0%);\n  }\n\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgwNjYzZWJlMjg4ZGM1M2IxYjNiMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBS1g7QUFRRTtBQU1IO0FBRWhCLElBQU1hLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7QUFDaEUsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDM0QsSUFBTUUsaUJBQWlCLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUNqRSxJQUFNRyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDdkUsSUFBTUMsVUFBVSxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDMUQsSUFBTU0sUUFBUSxHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDckQsSUFBTU8sY0FBYyxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDM0QsSUFBTVEsY0FBYyxHQUFHVCxRQUFRLENBQUNLLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNqRSxJQUFNSyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN4RCxJQUFNTSxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxJQUFNTyxNQUFNLEdBQUdaLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNqRCxJQUFNUSxXQUFXLEdBQUdiLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0FBRWxFRixhQUFhLENBQUNlLGdCQUFnQixDQUFDLE9BQU8sRUFBRTVCLHNEQUFrQixDQUFDO0FBRTNELElBQUk2QiwwQkFBMEIsR0FBRyxlQUFlO0FBQ2hELElBQUlDLFFBQVEsR0FDVkMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTCwwQkFBMEIsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNwRXJCLHVEQUFhLENBQUNzQixRQUFRLENBQUM7QUFDdkJ4QixnRUFBc0IsQ0FBQ3dCLFFBQVEsQ0FBQ0ssTUFBTSxDQUFDO0FBRXZDbkIsV0FBVyxDQUFDWSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ1EsQ0FBQyxFQUFLO0VBQzVDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCLElBQU1DLFdBQVcsR0FBR3JCLGlCQUFpQixDQUFDc0IsS0FBSztFQUMzQ3BDLHVEQUFhLENBQUNtQyxXQUFXLEVBQUVSLFFBQVEsQ0FBQztFQUNwQzlCLDBEQUFrQixDQUFDLENBQUM7RUFDcEJRLHVEQUFhLENBQUNzQixRQUFRLENBQUM7QUFDekIsQ0FBQyxDQUFDO0FBRUZaLGlCQUFpQixDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ1EsQ0FBQyxFQUFLO0VBQ2pELElBQUlBLENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFLEtBQUssb0JBQW9CLEVBQUU7SUFDeEMsSUFBTUMsaUJBQWlCLEdBQUdOLENBQUMsQ0FBQ0ksTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQ0MsV0FBVztJQUNqRXhDLHVEQUFhLENBQUNzQyxpQkFBaUIsRUFBRVosUUFBUSxDQUFDO0lBQzFDdEIsdURBQWEsQ0FBQ3NCLFFBQVEsQ0FBQztFQUN6QjtBQUNGLENBQUMsQ0FBQztBQUVGWixpQkFBaUIsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNRLENBQUMsRUFBSztFQUNqRCxJQUFJQSxDQUFDLENBQUNJLE1BQU0sQ0FBQ0ssU0FBUyxLQUFLLG1CQUFtQixFQUFFO0lBQzlDVCxDQUFDLENBQUNJLE1BQU0sQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2xDLElBQU1DLFVBQVUsR0FBR1osQ0FBQyxDQUFDSSxNQUFNLENBQUNTLGdCQUFnQixDQUFDTCxXQUFXO0lBQ3hELElBQU1NLFFBQVEsR0FBRzNDLHNEQUFZLENBQUN5QyxVQUFVLEVBQUVsQixRQUFRLENBQUM7SUFDbkROLFlBQVksQ0FBQ3NCLFNBQVMsR0FBRyxnQkFBZ0I7SUFDekNLLFVBQVUsQ0FBQyxZQUFNO01BQ2YxQixLQUFLLENBQUNxQixTQUFTLEdBQUcsWUFBWTtJQUNoQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1BuQixXQUFXLENBQUNpQixXQUFXLEdBQUdkLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDRSxJQUFJO0lBQ2pEeEMsa0RBQVcsQ0FBQ2tCLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDekIsS0FBSyxDQUFDO0lBQ3JDZCwwREFBbUIsQ0FBQ21CLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDekIsS0FBSyxDQUFDVSxNQUFNLENBQUM7RUFDdEQ7QUFDRixDQUFDLENBQUM7QUFFRmYsVUFBVSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUzQixtREFBZSxDQUFDO0FBRXJEb0IsUUFBUSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ1EsQ0FBQyxFQUFLO0VBQ3pDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCLElBQU1nQixRQUFRLEdBQUcvQixjQUFjLENBQUNpQixLQUFLO0VBQ3JDLElBQUllLEtBQUssR0FBR3BELDREQUFvQixDQUFDZ0IsaUJBQWlCLENBQUM7RUFDbkRULGlEQUFVLENBQUM0QyxRQUFRLEVBQUV2QixRQUFRLENBQUN3QixLQUFLLENBQUMsQ0FBQzdCLEtBQUssQ0FBQztFQUMzQ3BCLDhDQUFJLENBQUMsQ0FBQztFQUNOTyxrREFBVyxDQUFDa0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUM3QixLQUFLLENBQUM7RUFFbEN4Qix1REFBZSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUZzQixjQUFjLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDUSxDQUFDLEVBQUs7RUFDOUMsSUFBSUEsQ0FBQyxDQUFDSSxNQUFNLENBQUNDLEVBQUUsS0FBSyxpQkFBaUIsRUFBRTtJQUNyQyxJQUFJYSxLQUFLLEdBQUdwRCw0REFBb0IsQ0FBQ2dCLGlCQUFpQixDQUFDO0lBQ25ELElBQU1xQyxjQUFjLEdBQUduQixDQUFDLENBQUNJLE1BQU0sQ0FBQ0csa0JBQWtCLENBQUNDLFdBQVc7SUFDOURsQyxpREFBVSxDQUFDNkMsY0FBYyxFQUFFekIsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUM3QixLQUFLLENBQUM7SUFDakRwQiw4Q0FBSSxDQUFDLENBQUM7SUFDTk8sa0RBQVcsQ0FBQ2tCLFFBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDN0IsS0FBSyxDQUFDO0VBQ3BDO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDckMsS0FBSyxJQUFJNEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMUIsUUFBUSxDQUFDSyxNQUFNLEVBQUVxQixDQUFDLEVBQUUsRUFBRTtJQUN4Q3RDLGlCQUFpQixDQUFDdUMsUUFBUSxDQUFDRCxDQUFDLENBQUMsQ0FBQ1YsU0FBUyxHQUFHLG1CQUFtQjtFQUMvRDtFQUNBckIsS0FBSyxDQUFDcUIsU0FBUyxHQUFHLGFBQWE7RUFDL0JLLFVBQVUsQ0FBQyxZQUFNO0lBQ2YzQixZQUFZLENBQUNzQixTQUFTLEdBQUcsZUFBZTtFQUMxQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ1QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHdUQ7QUFFekQsSUFBTTVCLGlCQUFpQixHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUN2RSxJQUFNdUMsZUFBZSxHQUFHNUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFBQyxJQUUvRDRDLE9BQU8sZ0JBQUFDLFlBQUEsQ0FDWCxTQUFBRCxRQUFZUCxJQUFJLEVBQUU7RUFBQVMsZUFBQSxPQUFBRixPQUFBO0VBQ2hCLElBQUksQ0FBQ1AsSUFBSSxHQUFHQSxJQUFJO0VBQ2hCLElBQUksQ0FBQ1gsRUFBRSxHQUFHcUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUNwQixJQUFJLENBQUN0QyxLQUFLLEdBQUcsRUFBRTtFQUNmLElBQUksQ0FBQ3VDLGtCQUFrQixHQUFHLENBQUM7QUFDN0IsQ0FBQztBQUdILElBQU03RCxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlpRCxJQUFJLEVBQUVhLEdBQUcsRUFBSztFQUNuQyxJQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxVQUFDQyxPQUFPO0lBQUEsT0FBS0EsT0FBTyxDQUFDZixJQUFJLEtBQUtBLElBQUk7RUFBQSxFQUFDLElBQUlBLElBQUksQ0FBQ2pCLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDckU7RUFDRjtFQUNBN0Isc0JBQXNCLENBQUMyRCxHQUFHLENBQUM5QixNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDLElBQU1pQyxVQUFVLEdBQUcsSUFBSVQsT0FBTyxDQUFDUCxJQUFJLENBQUM7RUFDcENhLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRCxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELElBQU1oRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlnRCxJQUFJLEVBQUVhLEdBQUcsRUFBSztFQUNuQyxJQUFNWCxLQUFLLEdBQUcvQyxZQUFZLENBQUM2QyxJQUFJLEVBQUVhLEdBQUcsQ0FBQztFQUNyQ0EsR0FBRyxDQUFDSyxNQUFNLENBQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQ3BCaEQsc0JBQXNCLENBQUMyRCxHQUFHLENBQUM5QixNQUFNLENBQUM7QUFDcEMsQ0FBQztBQUVELElBQU1vQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlOLEdBQUcsRUFBSztFQUMvQi9DLGlCQUFpQixDQUFDc0QsU0FBUyxHQUFHLEVBQUU7RUFDaENQLEdBQUcsQ0FBQ1EsT0FBTyxDQUFDLFVBQUNOLE9BQU8sRUFBSztJQUN2QixJQUFNTyxnQkFBZ0IsR0FBRzVELFFBQVEsQ0FBQzZELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdERELGdCQUFnQixDQUFDNUIsU0FBUyxzQkFBc0I7SUFDaEQ0QixnQkFBZ0IsQ0FBQ0YsU0FBUyw4R0FBQUksTUFBQSxDQUVDVCxPQUFPLENBQUNmLElBQUksY0FDeEM7SUFDQ2xDLGlCQUFpQixDQUFDMkQsV0FBVyxDQUFDSCxnQkFBZ0IsQ0FBQztFQUNqRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTXBFLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUkyRCxHQUFHLEVBQUs7RUFDdENQLGVBQWUsQ0FBQ2QsV0FBVyxHQUFHcUIsR0FBRztBQUNuQyxDQUFDO0FBRUQsSUFBTTFELFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJNkMsSUFBSSxFQUFFYSxHQUFHLEVBQUs7RUFDbEMsSUFBTVgsS0FBSyxHQUFHVyxHQUFHLENBQUNhLFNBQVMsQ0FBQyxVQUFDWCxPQUFPO0lBQUEsT0FBS0EsT0FBTyxDQUFDZixJQUFJLEtBQUtBLElBQUk7RUFBQSxFQUFDO0VBQy9ELE9BQU9FLEtBQUs7QUFDZCxDQUFDO0FBRUQsU0FBU2pELElBQUlBLENBQUEsRUFBRztFQUNkNEIsWUFBWSxDQUFDOEMsT0FBTyxDQUFDbEQseURBQTBCLEVBQUVFLElBQUksQ0FBQ2lELFNBQVMsQ0FBQ2xELHVDQUFRLENBQUMsQ0FBQztBQUM1RTtBQUVBLFNBQVN0QixhQUFhQSxDQUFDeUQsR0FBRyxFQUFFO0VBQzFCNUQsSUFBSSxDQUFDLENBQUM7RUFDTmtFLGVBQWUsQ0FBQ04sR0FBRyxDQUFDO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRHlDO0FBRXpDLElBQU0xQyxjQUFjLEdBQUdULFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ2pFLElBQU04RCxZQUFZLEdBQUduRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFDLElBRXpEbUUsSUFBSSxnQkFBQXRCLFlBQUEsQ0FDUixTQUFBc0IsS0FBWTlCLElBQUksRUFBRStCLFFBQVEsRUFBRTtFQUFBdEIsZUFBQSxPQUFBcUIsSUFBQTtFQUMxQixJQUFJLENBQUM5QixJQUFJLEdBQUdBLElBQUk7RUFDaEIsSUFBSSxDQUFDK0IsUUFBUSxHQUFHQSxRQUFRO0FBQzFCLENBQUM7QUFHSCxJQUFNMUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUkyQyxJQUFJLEVBQUVhLEdBQUcsRUFBSztFQUNoQyxJQUFJQSxHQUFHLENBQUNDLElBQUksQ0FBQyxVQUFDa0IsSUFBSTtJQUFBLE9BQUtBLElBQUksQ0FBQ2hDLElBQUksS0FBS0EsSUFBSTtFQUFBLEVBQUMsSUFBSUEsSUFBSSxDQUFDakIsTUFBTSxLQUFLLENBQUMsRUFBRTtJQUMvRDtFQUNGO0VBQ0EsSUFBTWtELE9BQU8sR0FBRyxJQUFJSCxJQUFJLENBQUM5QixJQUFJLENBQUM7RUFDOUJhLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDZ0IsT0FBTyxDQUFDO0VBQ2pCMUUsbUJBQW1CLENBQUNzRCxHQUFHLENBQUM5QixNQUFNLENBQUM7QUFDakMsQ0FBQztBQUVELElBQU16QixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSTBDLElBQUksRUFBRWEsR0FBRyxFQUFLO0VBQ2hDLElBQU1YLEtBQUssR0FBR1csR0FBRyxDQUFDYSxTQUFTLENBQUMsVUFBQ00sSUFBSTtJQUFBLE9BQUtBLElBQUksQ0FBQ2hDLElBQUksS0FBS0EsSUFBSTtFQUFBLEVBQUM7RUFDekRhLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUNwQjNDLG1CQUFtQixDQUFDc0QsR0FBRyxDQUFDOUIsTUFBTSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxJQUFNbUQsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlDLFFBQVEsRUFBRUMsUUFBUSxFQUFFdkIsR0FBRyxFQUFLO0VBQzVDLElBQU1YLEtBQUssR0FBRy9DLHNEQUFZLENBQUNnRixRQUFRLEVBQUV0QixHQUFHLENBQUM7RUFDekNBLEdBQUcsQ0FBQ1gsS0FBSyxDQUFDLENBQUNGLElBQUksR0FBR29DLFFBQVE7QUFDNUIsQ0FBQztBQUVELElBQU01RSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSXFELEdBQUcsRUFBSztFQUMzQjFDLGNBQWMsQ0FBQ2lELFNBQVMsR0FBRyxFQUFFO0VBQzdCUCxHQUFHLENBQUNRLE9BQU8sQ0FBQyxVQUFDVyxJQUFJLEVBQUs7SUFDcEIsSUFBTUssYUFBYSxHQUFHM0UsUUFBUSxDQUFDNkQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNuRGMsYUFBYSxDQUFDM0MsU0FBUyxHQUFHLGdCQUFnQjtJQUMxQzJDLGFBQWEsQ0FBQ2pCLFNBQVMsMkdBQUFJLE1BQUEsQ0FFSVEsSUFBSSxDQUFDaEMsSUFBSSxjQUNyQztJQUNDN0IsY0FBYyxDQUFDc0QsV0FBVyxDQUFDWSxhQUFhLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELElBQU05RSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJc0QsR0FBRyxFQUFLO0VBQ25DZ0IsWUFBWSxDQUFDckMsV0FBVyxHQUFHcUIsR0FBRztBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRCxJQUFNeUIsZ0JBQWdCLEdBQUc1RSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztBQUN0RSxJQUFNNEUsYUFBYSxHQUFHN0UsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7QUFDaEUsSUFBTTZFLGlCQUFpQixHQUFHOUUsUUFBUSxDQUFDQyxjQUFjLENBQUMscUJBQXFCLENBQUM7QUFDeEUsSUFBTThFLGNBQWMsR0FBRy9FLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0FBQ2xFLElBQU1GLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7QUFDaEUsSUFBTUssVUFBVSxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFFMUQ2RSxpQkFBaUIsQ0FBQ2hFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTVCLGtCQUFrQixDQUFDO0FBRS9ENkYsY0FBYyxDQUFDakUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFM0IsZUFBZSxDQUFDO0FBRXpEWSxhQUFhLENBQUNlLGdCQUFnQixDQUFDLE9BQU8sRUFBRTVCLGtCQUFrQixDQUFDO0FBRTNEb0IsVUFBVSxDQUFDUSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUzQixlQUFlLENBQUM7QUFFckQsU0FBU0Qsa0JBQWtCQSxDQUFBLEVBQUc7RUFDNUIsSUFBSSxDQUFDMEYsZ0JBQWdCLENBQUM1QyxTQUFTLENBQUNnRCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDaERKLGdCQUFnQixDQUFDNUMsU0FBUyxDQUFDaUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMxQ0wsZ0JBQWdCLENBQUM1QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDeEMsQ0FBQyxNQUFNLElBQUkyQyxnQkFBZ0IsQ0FBQzVDLFNBQVMsQ0FBQ2dELFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN0REosZ0JBQWdCLENBQUM1QyxTQUFTLENBQUNpRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pDTCxnQkFBZ0IsQ0FBQzVDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUN6QztBQUNGO0FBRUEsU0FBUzlDLGVBQWVBLENBQUEsRUFBRztFQUN6QixJQUFJLENBQUMwRixhQUFhLENBQUM3QyxTQUFTLENBQUNnRCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDN0NILGFBQWEsQ0FBQzdDLFNBQVMsQ0FBQ2lELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDdkNKLGFBQWEsQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNyQyxDQUFDLE1BQU0sSUFBSTRDLGFBQWEsQ0FBQzdDLFNBQVMsQ0FBQ2dELFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUNuREgsYUFBYSxDQUFDN0MsU0FBUyxDQUFDaUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0Q0osYUFBYSxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RDO0FBQ0Y7QUFFQSxTQUFTN0Msb0JBQW9CQSxDQUFDOEYsU0FBUyxFQUFFO0VBQ3ZDLElBQU1DLGlCQUFpQixHQUFHRCxTQUFTLENBQUN2QyxRQUFRO0VBQzVDLElBQUlILEtBQUssR0FBRyxDQUFDO0VBQ2IsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd5QyxpQkFBaUIsQ0FBQzlELE1BQU0sRUFBRXFCLENBQUMsRUFBRSxFQUFFO0lBQ2pELElBQUl5QyxpQkFBaUIsQ0FBQ3pDLENBQUMsQ0FBQyxDQUFDVixTQUFTLENBQUNnRCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDdkR4QyxLQUFLLEdBQUdFLENBQUM7SUFDWDtFQUNGO0VBQ0EsT0FBT0YsS0FBSztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUhBQXVILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSx5QkFBeUIsU0FBUyxpQkFBaUIsU0FBUyxpQkFBaUIsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxh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QUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBoYW5kbGVQcm9qZWN0TW9kYWwsXG4gIGhhbmRsZVRvZG9Nb2RhbCxcbiAgZ2V0U2VsZWN0ZWRDb250YWluZXIsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgc2F2ZSxcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyxcbiAgZmluZFRoZUluZGV4LFxuICBzYXZlQW5kUmVuZGVyLFxufSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVG9kbyxcbiAgZGVsZXRlVG9kbyxcbiAgZGlzcGxheUhvd01hbnlUb2RvcyxcbiAgZGlzcGxheVRvZG8sXG59IGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWJ0bicpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG5jb25zdCB0b2RvSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW5hbWUnKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuY29uc3QgcHJvamVjdHNIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuY29uc3QgZ29CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLWJhY2snKTtcbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtcHJvamVjdHMtdGl0bGUnKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RNb2RhbCk7XG5cbmxldCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9ICdwcm9qZWN0c19saXN0JztcbmxldCBwcm9qZWN0cyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcbnNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xuZGlzcGxheUhvd01hbnlQcm9qZWN0cyhwcm9qZWN0cy5sZW5ndGgpO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0VmFsdWUudmFsdWU7XG4gIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzKTtcbiAgaGFuZGxlUHJvamVjdE1vZGFsKCk7XG4gIHNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xufSk7XG5cbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnZGVsZXRlLXByb2plY3QtYnRuJykge1xuICAgIGNvbnN0IHRhcmdldFByb2plY3ROYW1lID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIGRlbGV0ZVByb2plY3QodGFyZ2V0UHJvamVjdE5hbWUsIHByb2plY3RzKTtcbiAgICBzYXZlQW5kUmVuZGVyKHByb2plY3RzKTtcbiAgfVxufSk7XG5cbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2plY3QtY29udGFpbmVyJykge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY29uc3QgdGFyZ2V0TmFtZSA9IGUudGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBmaW5kVGhlSW5kZXgodGFyZ2V0TmFtZSwgcHJvamVjdHMpO1xuICAgIHByb2plY3RzSFRNTC5jbGFzc0xpc3QgPSAncHJvamVjdHMgY2xvc2UnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9kb3MuY2xhc3NMaXN0ID0gJ3RvZG9zIG9wZW4nO1xuICAgIH0sIDUwMCk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1t0YXJnZXRJZF0ubmFtZTtcbiAgICBkaXNwbGF5VG9kbyhwcm9qZWN0c1t0YXJnZXRJZF0udG9kb3MpO1xuICAgIGRpc3BsYXlIb3dNYW55VG9kb3MocHJvamVjdHNbdGFyZ2V0SWRdLnRvZG9zLmxlbmd0aCk7XG4gIH1cbn0pO1xuXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb01vZGFsKTtcblxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvTmFtZSA9IHRvZG9JbnB1dFZhbHVlLnZhbHVlO1xuICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lcik7XG4gIGNyZWF0ZVRvZG8odG9kb05hbWUsIHByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gIHNhdmUoKTtcbiAgZGlzcGxheVRvZG8ocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcblxuICBoYW5kbGVUb2RvTW9kYWwoKTtcbn0pO1xuXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ2RlbGV0ZS10b2RvLWJ0bicpIHtcbiAgICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0VG9kb05hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlVG9kbyh0YXJnZXRUb2RvTmFtZSwgcHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgICBzYXZlKCk7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgfVxufSk7XG5cbi8vIC8vIHVuc2VsZWN0cyBhbGxcbmdvQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7XG4gIH1cbiAgdG9kb3MuY2xhc3NMaXN0ID0gJ3RvZG9zIGNsb3NlJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHJvamVjdHNIVE1MLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBvcGVuJztcbiAgfSwgNTAwKTtcbn0pO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSB9IGZyb20gJy4nO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ctbWFueS1wcm9qZWN0cycpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuaG93TWFueVRvZG9zQWN0aXZlID0gMDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoICsgMSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgYXJyLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGZpbmRUaGVJbmRleChuYW1lLCBhcnIpO1xuICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gYHByb2plY3QtY29udGFpbmVyYDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXByb2plY3QtYnRuXCIgY2xhc3M9XCJkZWxldGUtYnRuXCI+eDwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDE+XG4gIGA7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgaG93TWFueVByb2plY3RzLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuY29uc3QgZmluZFRoZUluZGV4ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKGFycikge1xuICBzYXZlKCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhhcnIpO1xufVxuXG5leHBvcnQge1xuICBQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZSxcbiAgc2F2ZUFuZFJlbmRlcixcbn07XG4iLCJpbXBvcnQgeyBmaW5kVGhlSW5kZXggfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ctbWFueS10b2RvcycpO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSkgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUpO1xuICBhcnIucHVzaChuZXdUb2RvKTtcbiAgZGlzcGxheUhvd01hbnlUb2RvcyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAobmFtZSwgYXJyKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gYXJyLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5uYW1lID09PSBuYW1lKTtcbiAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIGRpc3BsYXlIb3dNYW55VG9kb3MoYXJyLmxlbmd0aCk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IChwcmV2TmFtZSwgbmV4dE5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGZpbmRUaGVJbmRleChwcmV2TmFtZSwgYXJyKTtcbiAgYXJyW2luZGV4XS5uYW1lID0gbmV4dE5hbWU7XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kbyA9IChhcnIpID0+IHtcbiAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0ID0gJ3RvZG8tY29udGFpbmVyJztcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXRvZG8tYnRuXCIgY2xhc3M9XCJkZWxldGUtYnRuXCI+eDwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7dG9kby5uYW1lfTwvaDE+XG4gIGA7XG4gICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlUb2RvcyA9IChhcnIpID0+IHtcbiAgaG93TWFueVRvZG9zLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuZXhwb3J0IHtcbiAgVG9kbyxcbiAgY3JlYXRlVG9kbyxcbiAgZGVsZXRlVG9kbyxcbiAgZWRpdFRvZG8sXG4gIGRpc3BsYXlUb2RvLFxuICBkaXNwbGF5SG93TWFueVRvZG9zLFxufTtcbiIsImNvbnN0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtLW1vZGFsJyk7XG5jb25zdCB0b2RvRnJvbU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybS1tb2RhbCcpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdC1tb2RhbCcpO1xuY29uc3QgY2xvc2VUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdG9kby1tb2RhbCcpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tYnRuJyk7XG5cbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdE1vZGFsKTtcblxuY2xvc2VUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RvTW9kYWwpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdE1vZGFsKTtcblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9Nb2RhbCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RNb2RhbCgpIHtcbiAgaWYgKCFwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB9IGVsc2UgaWYgKHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVG9kb01vZGFsKCkge1xuICBpZiAoIXRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIH0gZWxzZSBpZiAodG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgY29uc3QgY29udGFpbmVyQ2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW47XG4gIGxldCBpbmRleCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY29udGFpbmVyQ2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICBpbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IHsgaGFuZGxlUHJvamVjdE1vZGFsLCBoYW5kbGVUb2RvTW9kYWwsIGdldFNlbGVjdGVkQ29udGFpbmVyIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2I5OTNkNjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICAjOGNhNmRiLFxuICAgICNiOTkzZDZcbiAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICM4Y2E2ZGIsXG4gICAgI2I5OTNkNlxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5hcHAge1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDg1JTtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4O1xufVxuXG4ucHJvamVjdHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0cy5jbG9zZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3RzLm9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYztcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFkZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtYnRuOmhvdmVyIHNwYW4ge1xuICBhbmltYXRpb246IHRocmVlU2l4dHkgMC41cyBlYXNlO1xufVxuXG4uYWRkLWJ0biBzcGFuIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob3ctbWFueSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uZm9ybS1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAyMDAwMDtcbn1cblxuLmZvcm0tbW9kYWwub3BlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0ZsZXggMXMgZWFzZTtcbn1cblxuLmZvcm0tbW9kYWwuY2xvc2Uge1xuICBhbmltYXRpb246IGRpc3BsYXlGbGV4VG9Ob25lIDFzIGVhc2U7XG59XG5cbi5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0gaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4uY2xvc2UtbW9kYWwtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLWJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDEwOSwgMjQ2KTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDI1MHB4KSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2RjZjQ7XG4gIGNvbG9yOiAjMTAxMDE0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxMDEwMTQ7XG59XG5cbi8qIHRvZG9zICovXG5cbi50b2RvcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvZG9zLmNsb3NlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5R3JpZFRvTm9uZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9kb3Mub3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRvcC1sZWZ0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbn1cblxuLnRvZG9zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTAwcHgpKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNWRjO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG59XG5cbi50b2RvLW5hbWUge1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5kZWxldGUtdG9kby1idG4ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMTAxMDE0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xufVxuXG4uZ28tYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uZ28tYmFjazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDEwMHB4KSk7XG4gIH1cblxuICAudG9kb3MtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDc1cHgpKTtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG5cbiAgLmFkZC1idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLnRvcC1sZWZ0LWhlYWRlciB7XG4gICAgZ2FwOiAzcHg7XG4gIH1cblxuICAuZm9ybSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuZm9ybSBpbnB1dCB7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5mb3JtIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxMzYsIDE3Myk7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0ZsZXgge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlGbGV4VG9Ob25lIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5R3JpZFRvTm9uZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0dyaWQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRocmVlU2l4dHkge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7Ozs7OztFQU1FLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBRSw4QkFBOEI7RUFDbkQ7Ozs7R0FJQyxFQUFFLCtCQUErQjtFQUNsQzs7OztHQUlDLEVBQUUscUVBQXFFO0FBQzFFOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFF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OztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2I5OTNkNjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICAjOGNhNmRiLFxcbiAgICAjYjk5M2Q2XFxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgIzhjYTZkYixcXG4gICAgI2I5OTNkNlxcbiAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbn1cXG5cXG4uYXBwIHtcXG4gIHotaW5kZXg6IDE7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxNDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdHMuY2xvc2Uge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0cy5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvR3JpZCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYztcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtYnRuOmhvdmVyIHNwYW4ge1xcbiAgYW5pbWF0aW9uOiB0aHJlZVNpeHR5IDAuNXMgZWFzZTtcXG59XFxuXFxuLmFkZC1idG4gc3BhbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob3ctbWFueSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZvcm0tbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAyMDAwMDtcXG59XFxuXFxuLmZvcm0tbW9kYWwub3BlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvRmxleCAxcyBlYXNlO1xcbn1cXG5cXG4uZm9ybS1tb2RhbC5jbG9zZSB7XFxuICBhbmltYXRpb246IGRpc3BsYXlGbGV4VG9Ob25lIDFzIGVhc2U7XFxufVxcblxcbi5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5jbG9zZS1tb2RhbC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybS1idG4tc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTA5LCAyNDYpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMjUwcHgpKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGNmNDtcXG4gIGNvbG9yOiAjMTAxMDE0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzEwMTAxNDtcXG59XFxuXFxuLyogdG9kb3MgKi9cXG5cXG4udG9kb3Mge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvZG9zLmNsb3NlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5R3JpZFRvTm9uZSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9kb3Mub3BlbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvcC1sZWZ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxMDBweCkpO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNWRjO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjMTAxMDE0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcblxcbi5nby1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmdvLWJhY2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaGVhZGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDEwMHB4KSk7XFxuICB9XFxuXFxuICAudG9kb3MtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3NXB4KSk7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuYWRkLWJ0biBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLnRvcC1sZWZ0LWhlYWRlciB7XFxuICAgIGdhcDogM3B4O1xcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gIC5mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuZm9ybSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDEzNiwgMTczKTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0ZsZXgge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheUZsZXhUb05vbmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheUdyaWRUb05vbmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0dyaWQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGhyZWVTaXh0eSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJoYW5kbGVQcm9qZWN0TW9kYWwiLCJoYW5kbGVUb2RvTW9kYWwiLCJnZXRTZWxlY3RlZENvbnRhaW5lciIsImNyZWF0ZVByb2plY3QiLCJkZWxldGVQcm9qZWN0Iiwic2F2ZSIsImRpc3BsYXlIb3dNYW55UHJvamVjdHMiLCJmaW5kVGhlSW5kZXgiLCJzYXZlQW5kUmVuZGVyIiwiY3JlYXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJkaXNwbGF5SG93TWFueVRvZG9zIiwiZGlzcGxheVRvZG8iLCJhZGRQcm9qZWN0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RGb3JtIiwicHJvamVjdElucHV0VmFsdWUiLCJwcm9qZWN0c0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRUb2RvQnRuIiwidG9kb0Zvcm0iLCJ0b2RvSW5wdXRWYWx1ZSIsInRvZG9zQ29udGFpbmVyIiwicHJvamVjdHNIVE1MIiwidG9kb3MiLCJnb0JhY2siLCJoZWFkZXJUaXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSIsInByb2plY3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxlbmd0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3ROYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJpZCIsInRhcmdldFByb2plY3ROYW1lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YXJnZXROYW1lIiwibGFzdEVsZW1lbnRDaGlsZCIsInRhcmdldElkIiwic2V0VGltZW91dCIsIm5hbWUiLCJ0b2RvTmFtZSIsImluZGV4IiwidGFyZ2V0VG9kb05hbWUiLCJpIiwiY2hpbGRyZW4iLCJob3dNYW55UHJvamVjdHMiLCJQcm9qZWN0IiwiX2NyZWF0ZUNsYXNzIiwiX2NsYXNzQ2FsbENoZWNrIiwiRGF0ZSIsIm5vdyIsImhvd01hbnlUb2Rvc0FjdGl2ZSIsImFyciIsInNvbWUiLCJwcm9qZWN0IiwibmV3UHJvamVjdCIsInB1c2giLCJzcGxpY2UiLCJkaXNwbGF5UHJvamVjdHMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicHJvamVjdENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsImZpbmRJbmRleCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJob3dNYW55VG9kb3MiLCJUb2RvIiwicHJpb3JpdHkiLCJ0b2RvIiwibmV3VG9kbyIsImVkaXRUb2RvIiwicHJldk5hbWUiLCJuZXh0TmFtZSIsInRvZG9Db250YWluZXIiLCJwcm9qZWN0Rm9ybU1vZGFsIiwidG9kb0Zyb21Nb2RhbCIsImNsb3NlUHJvamVjdE1vZGFsIiwiY2xvc2VUb2RvTW9kYWwiLCJjb250YWlucyIsInJlbW92ZSIsImNvbnRhaW5lciIsImNvbnRhaW5lckNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==