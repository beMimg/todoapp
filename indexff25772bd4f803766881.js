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
var projectForm = document.querySelector('.project-form');
var projectInputValue = document.getElementById('project-name');
var projectsContainer = document.querySelector('.projects-container');
var addTodoBtn = document.getElementById('add-todo-btn');
var todoForm = document.querySelector('.todo-form');
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
  if (e.target.className === 'delete-project-btn') {
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
  if (e.target.className === 'delete-todo-btn') {
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
var howManyProjects = document.querySelector('.how-many-projects');
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
  })) {
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
    projectContainer.innerHTML = "\n    <button class=\"delete-project-btn\">x</button>\n    <h1 class=\"project-name\">".concat(project.name, "</h1>\n  ");
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
var howManyTodos = document.querySelector('.how-many-todos');
var Todo = /*#__PURE__*/_createClass(function Todo(name, priority) {
  _classCallCheck(this, Todo);
  this.name = name;
  this.priority = priority;
});
var createTodo = function createTodo(name, arr) {
  if (arr.some(function (todo) {
    return todo.name === name;
  })) {
    console.error('This todo already exists.');
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
    todoContainer.innerHTML = "\n    <button class=\"delete-todo-btn\">x</button>\n    <h1 class=\"project-name\">".concat(todo.name, "</h1>\n  ");
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
function handleProjectModal() {
  var projectFormModal = document.querySelector('.project-form-modal');
  if (!projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('close');
    projectFormModal.classList.add('open');
  } else if (projectFormModal.classList.contains('open')) {
    projectFormModal.classList.remove('open');
    projectFormModal.classList.add('close');
  }
}
function handleTodoModal() {
  var todoFromModal = document.querySelector('.todo-form-modal');
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/wallpaper.png */ "./src/assets/wallpaper.png"), __webpack_require__.b);
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
  background:
    linear-gradient(rgba(192, 122, 122, 0.8), rgba(0, 0, 0, 0.8)),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
}

.app {
  z-index: 1;
  height: 85%;
  width: 85%;
  border-radius: 20px;
  background-color: #101014;
  overflow: hidden;
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

.how-many-projects {
  font-size: 1.3rem;
}

.project-form-modal {
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

.project-form-modal.open {
  display: flex;
  animation: displayNoneToFlex 1s ease;
}
.project-form-modal.close {
  animation: displayFlexToNone 1s ease;
}

.project-form {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
}

.projects-container {
  grid-gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  display: grid;
  overflow: hidden;
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

.delete-project-btn {
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

.todo-form-modal {
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

.todo-form-modal.open {
  display: flex;
  animation: displayNoneToFlex 1s ease;
}
.todo-form-modal.close {
  animation: displayFlexToNone 1s ease;
}

.todo-form {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
}
.how-many-todos {
  font-size: 1.3rem;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  color: white;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n\n.background {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background:\n    linear-gradient(rgba(192, 122, 122, 0.8), rgba(0, 0, 0, 0.8)),\n    url('/src/assets/wallpaper.png') center/cover no-repeat;\n}\n\n.app {\n  z-index: 1;\n  height: 85%;\n  width: 85%;\n  border-radius: 20px;\n  background-color: #101014;\n  overflow: hidden;\n}\n\n.projects {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.projects.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n\n.projects.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n  background-color: #1b1b1c;\n}\n\n.header-title {\n  font-size: 1.5rem;\n  margin-left: 10px;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n}\n.add-btn:hover span {\n  animation: threeSixty 0.5s ease;\n}\n\n.add-btn span {\n  font-size: 3rem;\n  color: white;\n}\n\n.how-many-projects {\n  font-size: 1.3rem;\n}\n\n.project-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.project-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.project-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.project-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.projects-container {\n  grid-gap: 20px;\n  padding: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));\n  display: grid;\n  overflow: hidden;\n  justify-content: center;\n}\n\n.project-container {\n  max-height: 250px;\n  border-radius: 20px;\n  background-color: #e7dcf4;\n  color: #101014;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.project-container:hover {\n  transform: translateY(-2%);\n}\n\n.project-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  overflow: hidden;\n}\n\n.delete-project-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  justify-self: flex-end;\n  background-color: transparent;\n  color: #101014;\n}\n\n/* todos */\n\n.todos {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  overflow: hidden;\n}\n\n.todos.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n.todos.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n.top-left-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.todo-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.todo-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.todo-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.todo-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n.how-many-todos {\n  font-size: 1.3rem;\n}\n\n.todos-container {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(50px, 100px));\n  grid-gap: 20px;\n  padding: 20px;\n  overflow: auto;\n}\n\n.todo-container {\n  background-color: #e0c5dc;\n  color: black;\n  border-radius: 20px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.todo-container:hover {\n  transform: translateY(-2%);\n}\n\n.todo-name {\n  font-size: 100%;\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n}\n\n.delete-todo-btn {\n  font-size: 1.6rem;\n  margin-right: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  justify-self: flex-end;\n  background-color: transparent;\n  color: #101014;\n  transition: all 0.3s ease;\n}\n\n.delete-todo-btn:hover {\n  transform: scale(1.4);\n}\n\n.go-back {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.go-back:hover {\n  transform: scale(1.5);\n}\n\n@media only screen and (max-width: 767px) {\n  .header-title {\n    font-size: 1rem;\n    margin-left: 10px;\n  }\n  .projects-container {\n    grid-gap: 10px;\n    padding: 20px;\n    font-size: 0.9rem;\n    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));\n  }\n\n  .todos-container {\n    grid-template-rows: repeat(auto-fit, minmax(50px, 75px));\n    grid-gap: 10px;\n    padding: 20px;\n    overflow: auto;\n    font-size: 0.8rem;\n  }\n\n  .add-btn span {\n    font-size: 2rem;\n  }\n  .top-left-header {\n    gap: 3px;\n  }\n}\n\n@keyframes displayNoneToFlex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n\n@keyframes displayFlexToNone {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayGridToNone {\n  0% {\n    opacity: 1;\n    display: grid;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayNoneToGrid {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: grid;\n  }\n}\n\n@keyframes threeSixty {\n  0% {\n    transform: rotateY(0%);\n  }\n\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/wallpaper.png":
/*!**********************************!*\
  !*** ./src/assets/wallpaper.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wallpaper.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxP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QUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgaGFuZGxlUHJvamVjdE1vZGFsLFxuICBoYW5kbGVUb2RvTW9kYWwsXG4gIGdldFNlbGVjdGVkQ29udGFpbmVyLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHNhdmUsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZUFuZFJlbmRlcixcbn0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7XG4gIGNyZWF0ZVRvZG8sXG4gIGRlbGV0ZVRvZG8sXG4gIGRpc3BsYXlIb3dNYW55VG9kb3MsXG4gIGRpc3BsYXlUb2RvLFxufSBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1idG4nKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuY29uc3QgdG9kb0lucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1uYW1lJyk7XG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IHByb2plY3RzSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbmNvbnN0IGdvQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nby1iYWNrJyk7XG5jb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzLXByb2plY3RzLXRpdGxlJyk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0TW9kYWwpO1xuXG5sZXQgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgPSAncHJvamVjdHNfbGlzdCc7XG5sZXQgcHJvamVjdHMgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZKSkgfHwgW107XG5zYXZlQW5kUmVuZGVyKHByb2plY3RzKTtcbmRpc3BsYXlIb3dNYW55UHJvamVjdHMocHJvamVjdHMubGVuZ3RoKTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dFZhbHVlLnZhbHVlO1xuICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0cyk7XG4gIGhhbmRsZVByb2plY3RNb2RhbCgpO1xuICBzYXZlQW5kUmVuZGVyKHByb2plY3RzKTtcbn0pO1xuXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdkZWxldGUtcHJvamVjdC1idG4nKSB7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdE5hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlUHJvamVjdCh0YXJnZXRQcm9qZWN0TmFtZSwgcHJvamVjdHMpO1xuICAgIHNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xuICB9XG59KTtcblxucHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvamVjdC1jb250YWluZXInKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb25zdCB0YXJnZXROYW1lID0gZS50YXJnZXQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGZpbmRUaGVJbmRleCh0YXJnZXROYW1lLCBwcm9qZWN0cyk7XG4gICAgcHJvamVjdHNIVE1MLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBjbG9zZSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2Rvcy5jbGFzc0xpc3QgPSAndG9kb3Mgb3Blbic7XG4gICAgfSwgNTAwKTtcbiAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW3RhcmdldElkXS5uYW1lO1xuICAgIGRpc3BsYXlUb2RvKHByb2plY3RzW3RhcmdldElkXS50b2Rvcyk7XG4gICAgZGlzcGxheUhvd01hbnlUb2Rvcyhwcm9qZWN0c1t0YXJnZXRJZF0udG9kb3MubGVuZ3RoKTtcbiAgfVxufSk7XG5cbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUb2RvTW9kYWwpO1xuXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvZG9OYW1lID0gdG9kb0lucHV0VmFsdWUudmFsdWU7XG4gIGxldCBpbmRleCA9IGdldFNlbGVjdGVkQ29udGFpbmVyKHByb2plY3RzQ29udGFpbmVyKTtcbiAgY3JlYXRlVG9kbyh0b2RvTmFtZSwgcHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgc2F2ZSgpO1xuICBkaXNwbGF5VG9kbyhwcm9qZWN0c1tpbmRleF0udG9kb3MpO1xuXG4gIGhhbmRsZVRvZG9Nb2RhbCgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS10b2RvLWJ0bicpIHtcbiAgICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0VG9kb05hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlVG9kbyh0YXJnZXRUb2RvTmFtZSwgcHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgICBzYXZlKCk7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgfVxufSk7XG5cbi8vIC8vIHVuc2VsZWN0cyBhbGxcbmdvQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7XG4gIH1cbiAgdG9kb3MuY2xhc3NMaXN0ID0gJ3RvZG9zIGNsb3NlJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHJvamVjdHNIVE1MLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBvcGVuJztcbiAgfSwgNTAwKTtcbn0pO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSB9IGZyb20gJy4nO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ctbWFueS1wcm9qZWN0cycpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuaG93TWFueVRvZG9zQWN0aXZlID0gMDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoICsgMSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgYXJyLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGZpbmRUaGVJbmRleChuYW1lLCBhcnIpO1xuICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gYHByb2plY3QtY29udGFpbmVyYDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnRuXCI+eDwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDE+XG4gIGA7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgaG93TWFueVByb2plY3RzLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuY29uc3QgZmluZFRoZUluZGV4ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKGFycikge1xuICBzYXZlKCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhhcnIpO1xufVxuXG5leHBvcnQge1xuICBQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZSxcbiAgc2F2ZUFuZFJlbmRlcixcbn07XG4iLCJpbXBvcnQgeyBmaW5kVGhlSW5kZXggfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ctbWFueS10b2RvcycpO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGlzIHRvZG8gYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lKTtcbiAgYXJyLnB1c2gobmV3VG9kbyk7XG4gIGRpc3BsYXlIb3dNYW55VG9kb3MoYXJyLmxlbmd0aCk7XG59O1xuXG5jb25zdCBkZWxldGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSk7XG4gIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICBkaXNwbGF5SG93TWFueVRvZG9zKGFyci5sZW5ndGgpO1xufTtcblxuY29uc3QgZWRpdFRvZG8gPSAocHJldk5hbWUsIG5leHROYW1lLCBhcnIpID0+IHtcbiAgY29uc3QgaW5kZXggPSBmaW5kVGhlSW5kZXgocHJldk5hbWUsIGFycik7XG4gIGFycltpbmRleF0ubmFtZSA9IG5leHROYW1lO1xufTtcblxuY29uc3QgZGlzcGxheVRvZG8gPSAoYXJyKSA9PiB7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBhcnIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0b2RvLWNvbnRhaW5lcic7XG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10b2RvLWJ0blwiPng8L2J1dHRvbj5cbiAgICA8aDEgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3RvZG8ubmFtZX08L2gxPlxuICBgO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlIb3dNYW55VG9kb3MgPSAoYXJyKSA9PiB7XG4gIGhvd01hbnlUb2Rvcy50ZXh0Q29udGVudCA9IGFycjtcbn07XG5cbmV4cG9ydCB7XG4gIFRvZG8sXG4gIGNyZWF0ZVRvZG8sXG4gIGRlbGV0ZVRvZG8sXG4gIGVkaXRUb2RvLFxuICBkaXNwbGF5VG9kbyxcbiAgZGlzcGxheUhvd01hbnlUb2Rvcyxcbn07XG4iLCJmdW5jdGlvbiBoYW5kbGVQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLW1vZGFsJyk7XG4gIGlmICghcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZG9Nb2RhbCgpIHtcbiAgY29uc3QgdG9kb0Zyb21Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tbW9kYWwnKTtcbiAgaWYgKCF0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB9IGVsc2UgaWYgKHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnN0IGNvbnRhaW5lckNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbnRhaW5lckNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCB7IGhhbmRsZVByb2plY3RNb2RhbCwgaGFuZGxlVG9kb01vZGFsLCBnZXRTZWxlY3RlZENvbnRhaW5lciB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL3dhbGxwYXBlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMTkyLCAxMjIsIDEyMiwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbn1cblxuLmFwcCB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogODUlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDE0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0cy5jbG9zZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3RzLm9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYztcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFkZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtYnRuOmhvdmVyIHNwYW4ge1xuICBhbmltYXRpb246IHRocmVlU2l4dHkgMC41cyBlYXNlO1xufVxuXG4uYWRkLWJ0biBzcGFuIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob3ctbWFueS1wcm9qZWN0cyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDAwO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsLm9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XG59XG4ucHJvamVjdC1mb3JtLW1vZGFsLmNsb3NlIHtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xufVxuXG4ucHJvamVjdC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAyNTBweCkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2RjZjQ7XG4gIGNvbG9yOiAjMTAxMDE0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzEwMTAxNDtcbn1cblxuLyogdG9kb3MgKi9cblxuLnRvZG9zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9kb3MuY2xvc2Uge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udG9kb3Mub3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcbn1cbi50b3AtbGVmdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwcHg7XG59XG5cbi50b2RvLWZvcm0tbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMjAwMDA7XG59XG5cbi50b2RvLWZvcm0tbW9kYWwub3BlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0ZsZXggMXMgZWFzZTtcbn1cbi50b2RvLWZvcm0tbW9kYWwuY2xvc2Uge1xuICBhbmltYXRpb246IGRpc3BsYXlGbGV4VG9Ob25lIDFzIGVhc2U7XG59XG5cbi50b2RvLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhvdy1tYW55LXRvZG9zIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi50b2Rvcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDEwMHB4KSk7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzVkYztcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4udG9kby1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbn1cblxuLnRvZG8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS10b2RvLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxMDEwMTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG5cbi5nby1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uZ28tYmFjazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxMDBweCkpO1xuICB9XG5cbiAgLnRvZG9zLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCA3NXB4KSk7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC5hZGQtYnRuIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAudG9wLWxlZnQtaGVhZGVyIHtcbiAgICBnYXA6IDNweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9GbGV4IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5RmxleFRvTm9uZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUdyaWRUb05vbmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9HcmlkIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aHJlZVNpeHR5IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBOzs7Ozs7RUFNRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEI7O2tFQUV5RDtBQUMzRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1B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QUFRO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDE5MiwgMTIyLCAxMjIsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksXFxuICAgIHVybCgnL3NyYy9hc3NldHMvd2FsbHBhcGVyLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxufVxcblxcbi5hcHAge1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMDE0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cy5jbG9zZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3RzLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFjO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC1idG46aG92ZXIgc3BhbiB7XFxuICBhbmltYXRpb246IHRocmVlU2l4dHkgMC41cyBlYXNlO1xcbn1cXG5cXG4uYWRkLWJ0biBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvdy1tYW55LXByb2plY3RzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMjAwMDA7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tbW9kYWwub3BlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvRmxleCAxcyBlYXNlO1xcbn1cXG4ucHJvamVjdC1mb3JtLW1vZGFsLmNsb3NlIHtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUZsZXhUb05vbmUgMXMgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDI1MHB4KSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZGNmNDtcXG4gIGNvbG9yOiAjMTAxMDE0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjMTAxMDE0O1xcbn1cXG5cXG4vKiB0b2RvcyAqL1xcblxcbi50b2RvcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9kb3MuY2xvc2Uge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b2Rvcy5vcGVuIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvR3JpZCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4udG9wLWxlZnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9kby1mb3JtLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMjAwMDA7XFxufVxcblxcbi50b2RvLWZvcm0tbW9kYWwub3BlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvRmxleCAxcyBlYXNlO1xcbn1cXG4udG9kby1mb3JtLW1vZGFsLmNsb3NlIHtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUZsZXhUb05vbmUgMXMgZWFzZTtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uaG93LW1hbnktdG9kb3Mge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTAwcHgpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzVkYztcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzEwMTAxNDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbn1cXG5cXG4uZ28tYmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcbi5nby1iYWNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhlYWRlci10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICB9XFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxMDBweCkpO1xcbiAgfVxcblxcbiAgLnRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgNzVweCkpO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgLmFkZC1idG4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC50b3AtbGVmdC1oZWFkZXIge1xcbiAgICBnYXA6IDNweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvRmxleCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5RmxleFRvTm9uZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5R3JpZFRvTm9uZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvR3JpZCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0aHJlZVNpeHR5IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDAlKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJoYW5kbGVQcm9qZWN0TW9kYWwiLCJoYW5kbGVUb2RvTW9kYWwiLCJnZXRTZWxlY3RlZENvbnRhaW5lciIsImNyZWF0ZVByb2plY3QiLCJkZWxldGVQcm9qZWN0Iiwic2F2ZSIsImRpc3BsYXlIb3dNYW55UHJvamVjdHMiLCJmaW5kVGhlSW5kZXgiLCJzYXZlQW5kUmVuZGVyIiwiY3JlYXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJkaXNwbGF5SG93TWFueVRvZG9zIiwiZGlzcGxheVRvZG8iLCJhZGRQcm9qZWN0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RGb3JtIiwicXVlcnlTZWxlY3RvciIsInByb2plY3RJbnB1dFZhbHVlIiwicHJvamVjdHNDb250YWluZXIiLCJhZGRUb2RvQnRuIiwidG9kb0Zvcm0iLCJ0b2RvSW5wdXRWYWx1ZSIsInRvZG9zQ29udGFpbmVyIiwicHJvamVjdHNIVE1MIiwidG9kb3MiLCJnb0JhY2siLCJoZWFkZXJUaXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSIsInByb2plY3RzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxlbmd0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3ROYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0YXJnZXRQcm9qZWN0TmFtZSIsIm5leHRFbGVtZW50U2libGluZyIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGFyZ2V0TmFtZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJuYW1lIiwidG9kb05hbWUiLCJpbmRleCIsInRhcmdldFRvZG9OYW1lIiwiaSIsImNoaWxkcmVuIiwiaG93TWFueVByb2plY3RzIiwiUHJvamVjdCIsIl9jcmVhdGVDbGFzcyIsIl9jbGFzc0NhbGxDaGVjayIsImlkIiwiRGF0ZSIsIm5vdyIsImhvd01hbnlUb2Rvc0FjdGl2ZSIsImFyciIsInNvbWUiLCJwcm9qZWN0IiwibmV3UHJvamVjdCIsInB1c2giLCJzcGxpY2UiLCJkaXNwbGF5UHJvamVjdHMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicHJvamVjdENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsImZpbmRJbmRleCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJob3dNYW55VG9kb3MiLCJUb2RvIiwicHJpb3JpdHkiLCJ0b2RvIiwiY29uc29sZSIsImVycm9yIiwibmV3VG9kbyIsImVkaXRUb2RvIiwicHJldk5hbWUiLCJuZXh0TmFtZSIsInRvZG9Db250YWluZXIiLCJwcm9qZWN0Rm9ybU1vZGFsIiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0b2RvRnJvbU1vZGFsIiwiY29udGFpbmVyIiwiY29udGFpbmVyQ2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9