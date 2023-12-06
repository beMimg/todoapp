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




var projectForm = document.getElementById('project-form');
var projectInput = document.getElementById('project-name');
var projectsContainer = document.querySelector('.projects-container');
var todoForm = document.getElementById('todo-form');
var todoInputValue = document.getElementById('todo-name');
var todosContainer = document.querySelector('.todos-container');
var projectsHTML = document.querySelector('.projects');
var todos = document.querySelector('.todos');
var goBack = document.querySelector('.go-back');
var headerTitle = document.getElementById('this-projects-title');
var editTodoForm = document.getElementById('edit-todo-form');
var editTodoInput = document.getElementById('edit-todo-input');
var LOCAL_STORAGE_PROJECTS_KEY = 'projects_list';
var projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
(0,_project__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)(projects);
(0,_project__WEBPACK_IMPORTED_MODULE_2__.displayHowManyProjects)(projects.length);
projectForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var projectName = projectInput.value;
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
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var todoName = todoInputValue.value;
  var index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)(projectsContainer);
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.createTodo)(todoName, projects[index].todos);
  (0,_project__WEBPACK_IMPORTED_MODULE_2__.save)();
  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[index].todos);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleTodoModal)();
});
todosContainer.addEventListener('click', function (e) {
  if (e.target.id === 'delete-todo-btn') {
    var index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)(projectsContainer);
    var targetTodoName = e.target.nextElementSibling.textContent;
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(targetTodoName, projects[index].todos);
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.save)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[index].todos);
  }
});
todosContainer.addEventListener('click', function (e) {
  var index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)(projectsContainer);
  var targetTodoName = e.target.nextElementSibling.nextElementSibling.textContent;
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleEditModal)();
  handleEdit(index, targetTodoName);
});
function handleEdit(index, targetTodoName) {
  editTodoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.editTodo)(targetTodoName, editTodoInput.value, projects[index].todos);
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.save)();
    (0,_todo__WEBPACK_IMPORTED_MODULE_3__.displayTodo)(projects[index].todos);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.handleEditModal)();
    console.log(projects[index].todos);
  });
}

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
  console.log(prevName, nextName, arr);
  var index = arr.findIndex(function (todo) {
    return todo.name === prevName;
  });
  arr[index].name = nextName;
  return;
};
var displayTodo = function displayTodo(arr) {
  todosContainer.innerHTML = '';
  arr.forEach(function (todo) {
    var todoContainer = document.createElement('div');
    todoContainer.classList = 'todo-container';
    todoContainer.innerHTML = "\n    <button id=\"edit-todo-btn\" class=\"edit-btn\"></button>\n    <button id=\"delete-todo-btn\" class=\"delete-btn\">x</button>\n    <h1 class=\"todo-name\">".concat(todo.name, "</h1>\n  ");
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
/* harmony export */   getSelectedProject: () => (/* binding */ getSelectedProject),
/* harmony export */   handleEditModal: () => (/* binding */ handleEditModal),
/* harmony export */   handleProjectModal: () => (/* binding */ handleProjectModal),
/* harmony export */   handleTodoModal: () => (/* binding */ handleTodoModal)
/* harmony export */ });
var projectFormModal = document.getElementById('project-form-modal');
var todoFromModal = document.getElementById('todo-form-modal');
var closeProjectModal = document.getElementById('close-project-modal');
var closeTodoModal = document.getElementById('close-todo-modal');
var addProjectBtn = document.getElementById('add-project-btn');
var addTodoBtn = document.getElementById('add-todo-btn');
var editTodoModal = document.getElementById('edit-todo-modal');
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
function handleEditModal() {
  if (!editTodoModal.classList.contains('open')) {
    editTodoModal.classList.remove('close');
    editTodoModal.classList.add('open');
  } else if (editTodoModal.classList.contains('open')) {
    editTodoModal.classList.remove('open');
    editTodoModal.classList.add('close');
  }
}
function getSelectedProject(container) {
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/edit.svg */ "./src/assets/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
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
  background: #b993d6;
  background: -webkit-linear-gradient(to right, #8ca6db, #b993d6);
  background: linear-gradient(to right, #8ca6db, #b993d6);
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

.app {
  z-index: 1;
  height: 90%;
  width: 90%;
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
  cursor: pointer;
  transition: all 0.5s ease;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  grid-column: 2/3;
}

.edit-btn {
  border: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: grid;
  align-self: center;
  margin-left: 10px;
}

#delete-todo-btn {
  font-size: 1.6rem;
  margin-right: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #101014;
  transition: all 0.3s ease;
  display: grid;
  grid-column: 3/4;
}

#delete-todo-btn:hover {
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
  body {
  }
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
    font-weight: 500;
    gap: 20px;
    padding: 20px;
  }

  .form input {
    min-width: 250px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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B,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,SAAS;EACT,YAAY;EACZ,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;EACA;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,0DAA0D;EAC5D;;EAEA;IACE,wDAAwD;IACxD,cAAc;IACd,aAAa;IACb,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,0BAA0B;EAC5B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  color: white;\n  background: #b993d6;\n  background: -webkit-linear-gradient(to right, #8ca6db, #b993d6);\n  background: linear-gradient(to right, #8ca6db, #b993d6);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n\n.app {\n  z-index: 1;\n  height: 90%;\n  width: 90%;\n  border-radius: 20px;\n  background-color: #101014;\n  overflow: hidden;\n  box-shadow: 6px 6px 10px;\n}\n\n.projects {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.projects.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n\n.projects.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n  background-color: #1b1b1c;\n}\n\n.header-title {\n  font-size: 1.5rem;\n  margin-left: 10px;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n}\n.add-btn:hover span {\n  animation: threeSixty 0.5s ease;\n}\n\n.add-btn span {\n  font-size: 3rem;\n  color: white;\n}\n\n.how-many {\n  font-size: 1.3rem;\n}\n\n.form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n\n.form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.form {\n  position: relative;\n  background-color: #ffffff;\n  font-weight: 500;\n  gap: 20px;\n  padding: 30px;\n  border-radius: 10px;\n  color: black;\n  display: flex;\n  flex-direction: column;\n}\n\n.form div {\n  display: flex;\n  flex-direction: column;\n}\n\n.form input {\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: none;\n  background-color: #dbdbdb;\n  min-width: 300px;\n}\n\n.close-modal-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  color: black;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.form-btn-submit {\n  background-color: rgb(36, 109, 246);\n  padding: 5px;\n  border-radius: 3px;\n  font-size: 1.3rem;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n\n.projects-container {\n  grid-gap: 20px;\n  padding: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));\n  display: grid;\n  overflow: auto;\n  justify-content: center;\n}\n\n.project-container {\n  max-height: 250px;\n  border-radius: 20px;\n  background-color: #e7dcf4;\n  color: #101014;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.project-container:hover {\n  transform: translateY(-2%);\n}\n\n.project-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  overflow: hidden;\n}\n\n.delete-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  justify-self: flex-end;\n  background-color: transparent;\n  color: #101014;\n}\n\n/* todos */\n\n.todos {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.todos.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n\n.todos.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\n.top-left-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.todos-container {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(50px, 100px));\n  grid-gap: 20px;\n  padding: 20px;\n  overflow: auto;\n}\n\n.todo-container {\n  background-color: #e0c5dc;\n  color: black;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.todo-container:hover {\n  transform: translateY(-2%);\n}\n\n.todo-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  grid-column: 2/3;\n}\n\n.edit-btn {\n  border: none;\n  background-image: url('../assets/edit.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: transparent;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  display: grid;\n  align-self: center;\n  margin-left: 10px;\n}\n\n#delete-todo-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  color: #101014;\n  transition: all 0.3s ease;\n  display: grid;\n  grid-column: 3/4;\n}\n\n#delete-todo-btn:hover {\n  transform: scale(1.4);\n}\n\n.go-back {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.go-back:hover {\n  transform: scale(1.5);\n}\n\n@media only screen and (max-width: 767px) {\n  body {\n  }\n  .header-title {\n    font-size: 1rem;\n    margin-left: 10px;\n  }\n\n  .projects-container {\n    grid-gap: 10px;\n    padding: 20px;\n    font-size: 0.9rem;\n    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));\n  }\n\n  .todos-container {\n    grid-template-rows: repeat(auto-fit, minmax(50px, 75px));\n    grid-gap: 10px;\n    padding: 20px;\n    overflow: auto;\n    font-size: 0.8rem;\n  }\n\n  .add-btn span {\n    font-size: 2rem;\n  }\n\n  .top-left-header {\n    gap: 3px;\n  }\n\n  .form {\n    font-weight: 500;\n    gap: 20px;\n    padding: 20px;\n  }\n\n  .form input {\n    min-width: 250px;\n  }\n}\n\n@keyframes displayNoneToFlex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n\n@keyframes displayFlexToNone {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayGridToNone {\n  0% {\n    opacity: 1;\n    display: grid;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayNoneToGrid {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: grid;\n  }\n}\n\n@keyframes threeSixty {\n  0% {\n    transform: rotateY(0%);\n  }\n\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sdUdBQXVHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLFVB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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgaGFuZGxlUHJvamVjdE1vZGFsLFxuICBoYW5kbGVUb2RvTW9kYWwsXG4gIGdldFNlbGVjdGVkUHJvamVjdCxcbiAgaGFuZGxlRWRpdE1vZGFsLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHNhdmUsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZUFuZFJlbmRlcixcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7XG4gIGNyZWF0ZVRvZG8sXG4gIGRlbGV0ZVRvZG8sXG4gIGRpc3BsYXlIb3dNYW55VG9kb3MsXG4gIGRpc3BsYXlUb2RvLFxuICBlZGl0VG9kbyxcbn0gZnJvbSAnLi90b2RvJztcblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuY29uc3QgdG9kb0lucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1uYW1lJyk7XG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IHByb2plY3RzSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbmNvbnN0IGdvQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nby1iYWNrJyk7XG5jb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXByb2plY3RzLXRpdGxlJyk7XG5jb25zdCBlZGl0VG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLWZvcm0nKTtcbmNvbnN0IGVkaXRUb2RvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLWlucHV0Jyk7XG5cbmxldCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9ICdwcm9qZWN0c19saXN0JztcbmxldCBwcm9qZWN0cyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcbnNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xuZGlzcGxheUhvd01hbnlQcm9qZWN0cyhwcm9qZWN0cy5sZW5ndGgpO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlO1xuICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0cyk7XG4gIGhhbmRsZVByb2plY3RNb2RhbCgpO1xuICBzYXZlQW5kUmVuZGVyKHByb2plY3RzKTtcbn0pO1xuXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpIHtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0TmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICBkZWxldGVQcm9qZWN0KHRhcmdldFByb2plY3ROYW1lLCBwcm9qZWN0cyk7XG4gICAgc2F2ZUFuZFJlbmRlcihwcm9qZWN0cyk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnN0IHRhcmdldE5hbWUgPSBlLnRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRhcmdldElkID0gZmluZFRoZUluZGV4KHRhcmdldE5hbWUsIHByb2plY3RzKTtcbiAgICBwcm9qZWN0c0hUTUwuY2xhc3NMaXN0ID0gJ3Byb2plY3RzIGNsb3NlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvZG9zLmNsYXNzTGlzdCA9ICd0b2RvcyBvcGVuJztcbiAgICB9LCA1MDApO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbdGFyZ2V0SWRdLm5hbWU7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbdGFyZ2V0SWRdLnRvZG9zKTtcbiAgICBkaXNwbGF5SG93TWFueVRvZG9zKHByb2plY3RzW3RhcmdldElkXS50b2Rvcy5sZW5ndGgpO1xuICB9XG59KTtcblxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvTmFtZSA9IHRvZG9JbnB1dFZhbHVlLnZhbHVlO1xuICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZFByb2plY3QocHJvamVjdHNDb250YWluZXIpO1xuICBjcmVhdGVUb2RvKHRvZG9OYW1lLCBwcm9qZWN0c1tpbmRleF0udG9kb3MpO1xuICBzYXZlKCk7XG4gIGRpc3BsYXlUb2RvKHByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gIGhhbmRsZVRvZG9Nb2RhbCgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnZGVsZXRlLXRvZG8tYnRuJykge1xuICAgIGxldCBpbmRleCA9IGdldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0VG9kb05hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlVG9kbyh0YXJnZXRUb2RvTmFtZSwgcHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgICBzYXZlKCk7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgfVxufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgaW5kZXggPSBnZXRTZWxlY3RlZFByb2plY3QocHJvamVjdHNDb250YWluZXIpO1xuICBjb25zdCB0YXJnZXRUb2RvTmFtZSA9XG4gICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgaGFuZGxlRWRpdE1vZGFsKCk7XG4gIGhhbmRsZUVkaXQoaW5kZXgsIHRhcmdldFRvZG9OYW1lKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVFZGl0KGluZGV4LCB0YXJnZXRUb2RvTmFtZSkge1xuICBlZGl0VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRvZG8odGFyZ2V0VG9kb05hbWUsIGVkaXRUb2RvSW5wdXQudmFsdWUsIHByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gICAgc2F2ZSgpO1xuICAgIGRpc3BsYXlUb2RvKHByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gICAgaGFuZGxlRWRpdE1vZGFsKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgfSk7XG59XG5cbi8vIC8vIHVuc2VsZWN0cyBhbGxcbmdvQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7XG4gIH1cbiAgdG9kb3MuY2xhc3NMaXN0ID0gJ3RvZG9zIGNsb3NlJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHJvamVjdHNIVE1MLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBvcGVuJztcbiAgfSwgNTAwKTtcbn0pO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSB9IGZyb20gJy4nO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ctbWFueS1wcm9qZWN0cycpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuaG93TWFueVRvZG9zQWN0aXZlID0gMDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoICsgMSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgYXJyLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGZpbmRUaGVJbmRleChuYW1lLCBhcnIpO1xuICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gYHByb2plY3QtY29udGFpbmVyYDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXByb2plY3QtYnRuXCIgY2xhc3M9XCJkZWxldGUtYnRuXCI+eDwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDE+XG4gIGA7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgaG93TWFueVByb2plY3RzLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuY29uc3QgZmluZFRoZUluZGV4ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKGFycikge1xuICBzYXZlKCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhhcnIpO1xufVxuXG5leHBvcnQge1xuICBQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZSxcbiAgc2F2ZUFuZFJlbmRlcixcbn07XG4iLCJpbXBvcnQgeyBmaW5kVGhlSW5kZXgsIHNhdmUgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3ctbWFueS10b2RvcycpO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSkgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUpO1xuICBhcnIucHVzaChuZXdUb2RvKTtcbiAgZGlzcGxheUhvd01hbnlUb2RvcyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAobmFtZSwgYXJyKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gYXJyLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5uYW1lID09PSBuYW1lKTtcbiAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIGRpc3BsYXlIb3dNYW55VG9kb3MoYXJyLmxlbmd0aCk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9IChwcmV2TmFtZSwgbmV4dE5hbWUsIGFycikgPT4ge1xuICBjb25zb2xlLmxvZyhwcmV2TmFtZSwgbmV4dE5hbWUsIGFycik7XG4gIGNvbnN0IGluZGV4ID0gYXJyLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5uYW1lID09PSBwcmV2TmFtZSk7XG4gIGFycltpbmRleF0ubmFtZSA9IG5leHROYW1lO1xuICByZXR1cm47XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kbyA9IChhcnIpID0+IHtcbiAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0ID0gJ3RvZG8tY29udGFpbmVyJztcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPVwiZWRpdC10b2RvLWJ0blwiIGNsYXNzPVwiZWRpdC1idG5cIj48L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXRvZG8tYnRuXCIgY2xhc3M9XCJkZWxldGUtYnRuXCI+eDwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInRvZG8tbmFtZVwiPiR7dG9kby5uYW1lfTwvaDE+XG4gIGA7XG4gICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlUb2RvcyA9IChhcnIpID0+IHtcbiAgaG93TWFueVRvZG9zLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuZXhwb3J0IHtcbiAgVG9kbyxcbiAgY3JlYXRlVG9kbyxcbiAgZGVsZXRlVG9kbyxcbiAgZWRpdFRvZG8sXG4gIGRpc3BsYXlUb2RvLFxuICBkaXNwbGF5SG93TWFueVRvZG9zLFxufTtcbiIsImNvbnN0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtLW1vZGFsJyk7XG5jb25zdCB0b2RvRnJvbU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybS1tb2RhbCcpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdC1tb2RhbCcpO1xuY29uc3QgY2xvc2VUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdG9kby1tb2RhbCcpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tYnRuJyk7XG5jb25zdCBlZGl0VG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1tb2RhbCcpO1xuXG5jbG9zZVByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RNb2RhbCk7XG5cbmNsb3NlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb01vZGFsKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RNb2RhbCk7XG5cbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RvTW9kYWwpO1xuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0TW9kYWwoKSB7XG4gIGlmICghcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZG9Nb2RhbCgpIHtcbiAgaWYgKCF0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB9IGVsc2UgaWYgKHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdE1vZGFsKCkge1xuICBpZiAoIWVkaXRUb2RvTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICBlZGl0VG9kb01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XG4gICAgZWRpdFRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIH0gZWxzZSBpZiAoZWRpdFRvZG9Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIGVkaXRUb2RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIGVkaXRUb2RvTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3QoY29udGFpbmVyKSB7XG4gIGNvbnN0IGNvbnRhaW5lckNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbnRhaW5lckNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCB7XG4gIGhhbmRsZVByb2plY3RNb2RhbCxcbiAgaGFuZGxlVG9kb01vZGFsLFxuICBoYW5kbGVFZGl0TW9kYWwsXG4gIGdldFNlbGVjdGVkUHJvamVjdCxcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2I5OTNkNjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4Y2E2ZGIsICNiOTkzZDYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4Y2E2ZGIsICNiOTkzZDYpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFwcCB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDE0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHg7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3RzLmNsb3NlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5R3JpZFRvTm9uZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ucHJvamVjdHMub3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFjO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYWRkLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZC1idG46aG92ZXIgc3BhbiB7XG4gIGFuaW1hdGlvbjogdGhyZWVTaXh0eSAwLjVzIGVhc2U7XG59XG5cbi5hZGQtYnRuIHNwYW4ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhvdy1tYW55IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5mb3JtLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDAwO1xufVxuXG4uZm9ybS1tb2RhbC5vcGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvRmxleCAxcyBlYXNlO1xufVxuXG4uZm9ybS1tb2RhbC5jbG9zZSB7XG4gIGFuaW1hdGlvbjogZGlzcGxheUZsZXhUb05vbmUgMXMgZWFzZTtcbn1cblxuLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybSBpbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5jbG9zZS1tb2RhbC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMTA5LCAyNDYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMjUwcHgpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGNmNDtcbiAgY29sb3I6ICMxMDEwMTQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzEwMTAxNDtcbn1cblxuLyogdG9kb3MgKi9cblxuLnRvZG9zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9kb3MuY2xvc2Uge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50b2Rvcy5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvR3JpZCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9wLWxlZnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG9kb3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxMDBweCkpO1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM1ZGM7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4udG9kby1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbn1cblxuLnRvZG8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbn1cblxuLmVkaXQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuI2RlbGV0ZS10b2RvLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxMDEwMTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG59XG5cbiNkZWxldGUtdG9kby1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG5cbi5nby1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5nby1iYWNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGJvZHkge1xuICB9XG4gIC5oZWFkZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMTAwcHgpKTtcbiAgfVxuXG4gIC50b2Rvcy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzVweCkpO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cblxuICAuYWRkLWJ0biBzcGFuIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAudG9wLWxlZnQtaGVhZGVyIHtcbiAgICBnYXA6IDNweDtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmZvcm0gaW5wdXQge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvRmxleCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUZsZXhUb05vbmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlHcmlkVG9Ob25lIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvR3JpZCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGhyZWVTaXh0eSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7QUFFQTs7Ozs7O0VBTUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDZEQUE2RDtFQUM3RCxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5REFBeUQ7RUFDekQsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseURBQTJDO0VBQzNDLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwREFBMEQ7RUFDNUQ7O0VBRUE7SUFDRSx3REFBd0Q7SUFDeEQsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiAjYjk5M2Q2O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4Y2E2ZGIsICNiOTkzZDYpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGNhNmRiLCAjYjk5M2Q2KTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hcHAge1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDE0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cy5jbG9zZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3RzLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFjO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC1idG46aG92ZXIgc3BhbiB7XFxuICBhbmltYXRpb246IHRocmVlU2l4dHkgMC41cyBlYXNlO1xcbn1cXG5cXG4uYWRkLWJ0biBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvdy1tYW55IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZm9ybS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDIwMDAwO1xcbn1cXG5cXG4uZm9ybS1tb2RhbC5vcGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XFxufVxcblxcbi5mb3JtLW1vZGFsLmNsb3NlIHtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUZsZXhUb05vbmUgMXMgZWFzZTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtIGlucHV0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWJ0bi1zdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAxMDksIDI0Nik7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAyNTBweCkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdkY2Y0O1xcbiAgY29sb3I6ICMxMDEwMTQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjMTAxMDE0O1xcbn1cXG5cXG4vKiB0b2RvcyAqL1xcblxcbi50b2RvcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kb3MuY2xvc2Uge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2Rvcy5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvR3JpZCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9wLWxlZnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kb3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDEwMHB4KSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM1ZGM7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XFxufVxcblxcbi50b2RvLW5hbWUge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9lZGl0LnN2ZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbiNkZWxldGUtdG9kby1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzEwMTAxNDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuI2RlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxufVxcblxcbi5nby1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLmdvLWJhY2s6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICBib2R5IHtcXG4gIH1cXG4gIC5oZWFkZXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMTAwcHgpKTtcXG4gIH1cXG5cXG4gIC50b2Rvcy1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDc1cHgpKTtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIC5hZGQtYnRuIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAudG9wLWxlZnQtaGVhZGVyIHtcXG4gICAgZ2FwOiAzcHg7XFxuICB9XFxuXFxuICAuZm9ybSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gIC5mb3JtIGlucHV0IHtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvRmxleCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5RmxleFRvTm9uZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5R3JpZFRvTm9uZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvR3JpZCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aHJlZVNpeHR5IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDAlKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJoYW5kbGVQcm9qZWN0TW9kYWwiLCJoYW5kbGVUb2RvTW9kYWwiLCJnZXRTZWxlY3RlZFByb2plY3QiLCJoYW5kbGVFZGl0TW9kYWwiLCJjcmVhdGVQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInNhdmUiLCJkaXNwbGF5SG93TWFueVByb2plY3RzIiwiZmluZFRoZUluZGV4Iiwic2F2ZUFuZFJlbmRlciIsImNyZWF0ZVRvZG8iLCJkZWxldGVUb2RvIiwiZGlzcGxheUhvd01hbnlUb2RvcyIsImRpc3BsYXlUb2RvIiwiZWRpdFRvZG8iLCJwcm9qZWN0Rm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9qZWN0SW5wdXQiLCJwcm9qZWN0c0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvRm9ybSIsInRvZG9JbnB1dFZhbHVlIiwidG9kb3NDb250YWluZXIiLCJwcm9qZWN0c0hUTUwiLCJ0b2RvcyIsImdvQmFjayIsImhlYWRlclRpdGxlIiwiZWRpdFRvZG9Gb3JtIiwiZWRpdFRvZG9JbnB1dCIsIkxPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZIiwicHJvamVjdHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3ROYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJpZCIsInRhcmdldFByb2plY3ROYW1lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YXJnZXROYW1lIiwibGFzdEVsZW1lbnRDaGlsZCIsInRhcmdldElkIiwic2V0VGltZW91dCIsIm5hbWUiLCJ0b2RvTmFtZSIsImluZGV4IiwidGFyZ2V0VG9kb05hbWUiLCJoYW5kbGVFZGl0IiwiY29uc29sZSIsImxvZyIsImkiLCJjaGlsZHJlbiIsImhvd01hbnlQcm9qZWN0cyIsIlByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJEYXRlIiwibm93IiwiaG93TWFueVRvZG9zQWN0aXZlIiwiYXJyIiwic29tZSIsInByb2plY3QiLCJuZXdQcm9qZWN0IiwicHVzaCIsInNwbGljZSIsImRpc3BsYXlQcm9qZWN0cyIsImlubmVySFRNTCIsImZvckVhY2giLCJwcm9qZWN0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiZmluZEluZGV4Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhvd01hbnlUb2RvcyIsIlRvZG8iLCJwcmlvcml0eSIsInRvZG8iLCJuZXdUb2RvIiwicHJldk5hbWUiLCJuZXh0TmFtZSIsInRvZG9Db250YWluZXIiLCJwcm9qZWN0Rm9ybU1vZGFsIiwidG9kb0Zyb21Nb2RhbCIsImNsb3NlUHJvamVjdE1vZGFsIiwiY2xvc2VUb2RvTW9kYWwiLCJhZGRQcm9qZWN0QnRuIiwiYWRkVG9kb0J0biIsImVkaXRUb2RvTW9kYWwiLCJjb250YWlucyIsInJlbW92ZSIsImNvbnRhaW5lciIsImNvbnRhaW5lckNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==