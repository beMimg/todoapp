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
    projectContainer.innerHTML = "\n    <button class=\"delete-project-btn\"><span class=\"material-icons\" class=\"delete-project-btn\">\n    delete\n    </span></button>\n    <h1 class=\"project-name\">".concat(project.name, "</h1>\n  ");
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
    todoContainer.innerHTML = "\n    <button class=\"delete-todo-btn\"><span class=\"material-icons\">\n    delete\n    </span></button>\n    <h1 class=\"project-name\">".concat(todo.name, "</h1>\n  ");
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

.background {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background:
    linear-gradient(rgba(192, 122, 122, 0.6), rgba(0, 0, 0, 0.7)),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
}

.app {
  z-index: 1;
  height: 85%;
  width: 85%;
  border-radius: 20px;
  background: linear-gradient(rgba(52, 2, 2, 0.6), rgba(0, 0, 0, 0.7));
}

.projects {
  /* for now */
  height: 100%;
  grid-template-rows: 10% auto;
  opacity: 1;
  display: grid;
  /* display: none; */
  overflow: auto;
  padding: 5px;
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
}

.header-title {
  font-size: 1.5rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}

.project-container {
  background-color: aqua;
  border-radius: 20px;
  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  cursor: pointer;
  transition: all 0.5s ease;
}
.project-container:hover {
  transform: translateY(-2%);
}

.project-name {
  overflow: hidden;
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 100%;
  overflow: hidden;
}

.delete-project-btn {
  display: flex;
  align-self: center;
  justify-content: center;
  justify-self: flex-end;
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 10px;
}

/* todos */

.todos {
  height: 100%;
  grid-template-rows: 10% auto;
  opacity: 0;
  display: none;
  opacity: 1;
  /* display: grid; */
  overflow: auto;
  padding: 5px;
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
  grid-template-rows: repeat(auto-fit, minmax(100px, 150px));
  grid-gap: 20px;
  padding: 20px;
}

.todo-container {
  background-color: aqua;
  border-radius: 20px;
  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  cursor: pointer;
  transition: all 0.5s ease;
}
.todo-container:hover {
  transform: translateY(-2%);
}

.todo-name {
  overflow: hidden;
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 100%;
  overflow: hidden;
}

.delete-todo-btn {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  display: grid;
  align-self: center;
  justify-self: flex-end;
  align-content: center;
  margin-right: 10px;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  color: white;\n}\n\n.background {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background:\n    linear-gradient(rgba(192, 122, 122, 0.6), rgba(0, 0, 0, 0.7)),\n    url('/src/assets/wallpaper.png') center/cover no-repeat;\n}\n\n.app {\n  z-index: 1;\n  height: 85%;\n  width: 85%;\n  border-radius: 20px;\n  background: linear-gradient(rgba(52, 2, 2, 0.6), rgba(0, 0, 0, 0.7));\n}\n\n.projects {\n  /* for now */\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  /* display: none; */\n  overflow: auto;\n  padding: 5px;\n}\n.projects.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n.projects.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n.header-title {\n  font-size: 1.5rem;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n}\n.add-btn span {\n  font-size: 3rem;\n  color: white;\n}\n\n.how-many-projects {\n  font-size: 1.3rem;\n}\n\n.project-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.project-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.project-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.project-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 20px;\n  padding: 20px;\n}\n\n.project-container {\n  background-color: aqua;\n  border-radius: 20px;\n  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.project-container:hover {\n  transform: translateY(-2%);\n}\n\n.project-name {\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  font-size: 100%;\n  overflow: hidden;\n}\n\n.delete-project-btn {\n  display: flex;\n  align-self: center;\n  justify-content: center;\n  justify-self: flex-end;\n  padding: 5px;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  margin-right: 10px;\n}\n\n/* todos */\n\n.todos {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 0;\n  display: none;\n  opacity: 1;\n  /* display: grid; */\n  overflow: auto;\n  padding: 5px;\n}\n.todos.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n.todos.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n.top-left-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.todo-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.todo-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.todo-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.todo-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n.how-many-todos {\n  font-size: 1.3rem;\n}\n\n.todos-container {\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(100px, 150px));\n  grid-gap: 20px;\n  padding: 20px;\n}\n\n.todo-container {\n  background-color: aqua;\n  border-radius: 20px;\n  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.todo-container:hover {\n  transform: translateY(-2%);\n}\n\n.todo-name {\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  font-size: 100%;\n  overflow: hidden;\n}\n\n.delete-todo-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 1.6rem;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  align-self: center;\n  justify-self: flex-end;\n  align-content: center;\n  margin-right: 10px;\n}\n\n@keyframes displayNoneToFlex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n\n@keyframes displayFlexToNone {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayGridToNone {\n  0% {\n    opacity: 1;\n    display: grid;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayNoneToGrid {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: grid;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFB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OztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBoYW5kbGVQcm9qZWN0TW9kYWwsXG4gIGhhbmRsZVRvZG9Nb2RhbCxcbiAgZ2V0U2VsZWN0ZWRDb250YWluZXIsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgc2F2ZSxcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyxcbiAgZmluZFRoZUluZGV4LFxuICBzYXZlQW5kUmVuZGVyLFxufSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVG9kbyxcbiAgZGVsZXRlVG9kbyxcbiAgZGlzcGxheUhvd01hbnlUb2RvcyxcbiAgZGlzcGxheVRvZG8sXG59IGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWJ0bicpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG5jb25zdCB0b2RvSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW5hbWUnKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuY29uc3QgcHJvamVjdHNIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuY29uc3QgZ29CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLWJhY2snKTtcbmNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXMtcHJvamVjdHMtdGl0bGUnKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RNb2RhbCk7XG5cbmxldCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9ICdwcm9qZWN0c19saXN0JztcbmxldCBwcm9qZWN0cyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcbnNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xuZGlzcGxheUhvd01hbnlQcm9qZWN0cyhwcm9qZWN0cy5sZW5ndGgpO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0VmFsdWUudmFsdWU7XG4gIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzKTtcbiAgaGFuZGxlUHJvamVjdE1vZGFsKCk7XG4gIHNhdmVBbmRSZW5kZXIocHJvamVjdHMpO1xufSk7XG5cbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpIHtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0TmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICBkZWxldGVQcm9qZWN0KHRhcmdldFByb2plY3ROYW1lLCBwcm9qZWN0cyk7XG4gICAgc2F2ZUFuZFJlbmRlcihwcm9qZWN0cyk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwcm9qZWN0LWNvbnRhaW5lcicpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnN0IHRhcmdldE5hbWUgPSBlLnRhcmdldC5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRhcmdldElkID0gZmluZFRoZUluZGV4KHRhcmdldE5hbWUsIHByb2plY3RzKTtcbiAgICBwcm9qZWN0c0hUTUwuY2xhc3NMaXN0ID0gJ3Byb2plY3RzIGNsb3NlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvZG9zLmNsYXNzTGlzdCA9ICd0b2RvcyBvcGVuJztcbiAgICB9LCA1MDApO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbdGFyZ2V0SWRdLm5hbWU7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbdGFyZ2V0SWRdLnRvZG9zKTtcbiAgICBkaXNwbGF5SG93TWFueVRvZG9zKHByb2plY3RzW3RhcmdldElkXS50b2Rvcy5sZW5ndGgpO1xuICB9XG59KTtcblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRvZG9Nb2RhbCk7XG5cbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9kb05hbWUgPSB0b2RvSW5wdXRWYWx1ZS52YWx1ZTtcbiAgbGV0IGluZGV4ID0gZ2V0U2VsZWN0ZWRDb250YWluZXIocHJvamVjdHNDb250YWluZXIpO1xuICBjcmVhdGVUb2RvKHRvZG9OYW1lLCBwcm9qZWN0c1tpbmRleF0udG9kb3MpO1xuICBzYXZlKCk7XG4gIGRpc3BsYXlUb2RvKHByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gIGhhbmRsZVRvZG9Nb2RhbCgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS10b2RvLWJ0bicpIHtcbiAgICBsZXQgaW5kZXggPSBnZXRTZWxlY3RlZENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0VG9kb05hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZGVsZXRlVG9kbyh0YXJnZXRUb2RvTmFtZSwgcHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgICBzYXZlKCk7XG4gICAgZGlzcGxheVRvZG8ocHJvamVjdHNbaW5kZXhdLnRvZG9zKTtcbiAgfVxufSk7XG5cbi8vIC8vIHVuc2VsZWN0cyBhbGxcbmdvQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdCA9ICdwcm9qZWN0LWNvbnRhaW5lcic7XG4gIH1cbiAgdG9kb3MuY2xhc3NMaXN0ID0gJ3RvZG9zIGNsb3NlJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcHJvamVjdHNIVE1MLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBvcGVuJztcbiAgfSwgNTAwKTtcbn0pO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSB9IGZyb20gJy4nO1xuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ctbWFueS1wcm9qZWN0cycpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMuaG93TWFueVRvZG9zQWN0aXZlID0gMDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoICsgMSk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgYXJyLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGZpbmRUaGVJbmRleChuYW1lLCBhcnIpO1xuICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cyhhcnIubGVuZ3RoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gYHByb2plY3QtY29udGFpbmVyYDtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnRuXCI+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnRuXCI+XG4gICAgZGVsZXRlXG4gICAgPC9zcGFuPjwvYnV0dG9uPlxuICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDE+XG4gIGA7XG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUhvd01hbnlQcm9qZWN0cyA9IChhcnIpID0+IHtcbiAgaG93TWFueVByb2plY3RzLnRleHRDb250ZW50ID0gYXJyO1xufTtcblxuY29uc3QgZmluZFRoZUluZGV4ID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKGFycikge1xuICBzYXZlKCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhhcnIpO1xufVxuXG5leHBvcnQge1xuICBQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICBkaXNwbGF5UHJvamVjdHMsXG4gIGRpc3BsYXlIb3dNYW55UHJvamVjdHMsXG4gIGZpbmRUaGVJbmRleCxcbiAgc2F2ZSxcbiAgc2F2ZUFuZFJlbmRlcixcbn07XG4iLCJpbXBvcnQgeyBmaW5kVGhlSW5kZXggfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbmNvbnN0IGhvd01hbnlUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3ctbWFueS10b2RvcycpO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBpZiAoYXJyLnNvbWUoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGlzIHRvZG8gYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lKTtcbiAgYXJyLnB1c2gobmV3VG9kbyk7XG4gIGRpc3BsYXlIb3dNYW55VG9kb3MoYXJyLmxlbmd0aCk7XG59O1xuXG5jb25zdCBkZWxldGVUb2RvID0gKG5hbWUsIGFycikgPT4ge1xuICBjb25zdCBpbmRleCA9IGFyci5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gbmFtZSk7XG4gIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICBkaXNwbGF5SG93TWFueVRvZG9zKGFyci5sZW5ndGgpO1xufTtcblxuY29uc3QgZWRpdFRvZG8gPSAocHJldk5hbWUsIG5leHROYW1lLCBhcnIpID0+IHtcbiAgY29uc3QgaW5kZXggPSBmaW5kVGhlSW5kZXgocHJldk5hbWUsIGFycik7XG4gIGFycltpbmRleF0ubmFtZSA9IG5leHROYW1lO1xufTtcblxuY29uc3QgZGlzcGxheVRvZG8gPSAoYXJyKSA9PiB7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBhcnIuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0b2RvLWNvbnRhaW5lcic7XG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10b2RvLWJ0blwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICBkZWxldGVcbiAgICA8L3NwYW4+PC9idXR0b24+XG4gICAgPGgxIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHt0b2RvLm5hbWV9PC9oMT5cbiAgYDtcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5SG93TWFueVRvZG9zID0gKGFycikgPT4ge1xuICBob3dNYW55VG9kb3MudGV4dENvbnRlbnQgPSBhcnI7XG59O1xuXG5leHBvcnQge1xuICBUb2RvLFxuICBjcmVhdGVUb2RvLFxuICBkZWxldGVUb2RvLFxuICBlZGl0VG9kbyxcbiAgZGlzcGxheVRvZG8sXG4gIGRpc3BsYXlIb3dNYW55VG9kb3MsXG59O1xuIiwiZnVuY3Rpb24gaGFuZGxlUHJvamVjdE1vZGFsKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1tb2RhbCcpO1xuICBpZiAoIXByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIH0gZWxzZSBpZiAocHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RvTW9kYWwoKSB7XG4gIGNvbnN0IHRvZG9Gcm9tTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLW1vZGFsJyk7XG4gIGlmICghdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgfSBlbHNlIGlmICh0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGVkQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICBjb25zdCBjb250YWluZXJDaGlsZHJlbiA9IGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgbGV0IGluZGV4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjb250YWluZXJDaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgIGluZGV4ID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgeyBoYW5kbGVQcm9qZWN0TW9kYWwsIGhhbmRsZVRvZG9Nb2RhbCwgZ2V0U2VsZWN0ZWRDb250YWluZXIgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy93YWxscGFwZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tncm91bmQge1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMTkyLCAxMjIsIDEyMiwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbn1cblxuLmFwcCB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogODUlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1MiwgMiwgMiwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjcpKTtcbn1cblxuLnByb2plY3RzIHtcbiAgLyogZm9yIG5vdyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucHJvamVjdHMuY2xvc2Uge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ucHJvamVjdHMub3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hZGQtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWJ0biBzcGFuIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob3ctbWFueS1wcm9qZWN0cyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDAwO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsLm9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XG59XG4ucHJvamVjdC1mb3JtLW1vZGFsLmNsb3NlIHtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xufVxuXG4ucHJvamVjdC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTgsIDEyNCwgMTU5LCAxKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiB0b2RvcyAqL1xuXG4udG9kb3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG59XG4udG9kb3MuY2xvc2Uge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGRpc3BsYXlHcmlkVG9Ob25lIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udG9kb3Mub3BlbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcbn1cbi50b3AtbGVmdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDEwcHg7XG59XG5cbi50b2RvLWZvcm0tbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMjAwMDA7XG59XG5cbi50b2RvLWZvcm0tbW9kYWwub3BlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0ZsZXggMXMgZWFzZTtcbn1cbi50b2RvLWZvcm0tbW9kYWwuY2xvc2Uge1xuICBhbmltYXRpb246IGRpc3BsYXlGbGV4VG9Ob25lIDFzIGVhc2U7XG59XG5cbi50b2RvLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhvdy1tYW55LXRvZG9zIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi50b2Rvcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxNTBweCkpO1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTgsIDEyNCwgMTU5LCAxKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG59XG5cbi50b2RvLW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZWxldGUtdG9kby1idG4ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvRmxleCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUZsZXhUb05vbmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlHcmlkVG9Ob25lIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5Tm9uZVRvR3JpZCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEI7O2tFQUV5RDtBQUMzRDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25C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O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICB6LWluZGV4OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTIsIDEyMiwgMTIyLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNykpLFxcbiAgICB1cmwoJy9zcmMvYXNzZXRzL3dhbGxwYXBlci5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbn1cXG5cXG4uYXBwIHtcXG4gIHotaW5kZXg6IDE7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoNTIsIDIsIDIsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC43KSk7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAvKiBmb3Igbm93ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wcm9qZWN0cy5jbG9zZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnByb2plY3RzLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC1idG4gc3BhbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob3ctbWFueS1wcm9qZWN0cyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDIwMDAwO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLW1vZGFsLm9wZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0ZsZXggMXMgZWFzZTtcXG59XFxuLnByb2plY3QtZm9ybS1tb2RhbC5jbG9zZSB7XFxuICBhbmltYXRpb246IGRpc3BsYXlGbGV4VG9Ob25lIDFzIGVhc2U7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE4LCAxMjQsIDE1OSwgMSksIHJnYmEoMCwgMCwgMCwgMC44KSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIHRvZG9zICovXFxuXFxuLnRvZG9zIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50b2Rvcy5jbG9zZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRvZG9zLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b3AtbGVmdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLWZvcm0tbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAyMDAwMDtcXG59XFxuXFxuLnRvZG8tZm9ybS1tb2RhbC5vcGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XFxufVxcbi50b2RvLWZvcm0tbW9kYWwuY2xvc2Uge1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5ob3ctbWFueS10b2RvcyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMTUwcHgpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTgsIDEyNCwgMTU5LCAxKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0ZsZXgge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheUZsZXhUb05vbmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheUdyaWRUb05vbmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGlzcGxheU5vbmVUb0dyaWQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiaGFuZGxlUHJvamVjdE1vZGFsIiwiaGFuZGxlVG9kb01vZGFsIiwiZ2V0U2VsZWN0ZWRDb250YWluZXIiLCJjcmVhdGVQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInNhdmUiLCJkaXNwbGF5SG93TWFueVByb2plY3RzIiwiZmluZFRoZUluZGV4Iiwic2F2ZUFuZFJlbmRlciIsImNyZWF0ZVRvZG8iLCJkZWxldGVUb2RvIiwiZGlzcGxheUhvd01hbnlUb2RvcyIsImRpc3BsYXlUb2RvIiwiYWRkUHJvamVjdEJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9qZWN0Rm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0SW5wdXRWYWx1ZSIsInByb2plY3RzQ29udGFpbmVyIiwiYWRkVG9kb0J0biIsInRvZG9Gb3JtIiwidG9kb0lucHV0VmFsdWUiLCJ0b2Rvc0NvbnRhaW5lciIsInByb2plY3RzSFRNTCIsInRvZG9zIiwiZ29CYWNrIiwiaGVhZGVyVGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkiLCJwcm9qZWN0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0TmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwidGFyZ2V0UHJvamVjdE5hbWUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInRhcmdldE5hbWUiLCJsYXN0RWxlbWVudENoaWxkIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwibmFtZSIsInRvZG9OYW1lIiwiaW5kZXgiLCJ0YXJnZXRUb2RvTmFtZSIsImkiLCJjaGlsZHJlbiIsImhvd01hbnlQcm9qZWN0cyIsIlByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJpZCIsIkRhdGUiLCJub3ciLCJob3dNYW55VG9kb3NBY3RpdmUiLCJhcnIiLCJzb21lIiwicHJvamVjdCIsIm5ld1Byb2plY3QiLCJwdXNoIiwic3BsaWNlIiwiZGlzcGxheVByb2plY3RzIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInByb2plY3RDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJmaW5kSW5kZXgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaG93TWFueVRvZG9zIiwiVG9kbyIsInByaW9yaXR5IiwidG9kbyIsImNvbnNvbGUiLCJlcnJvciIsIm5ld1RvZG8iLCJlZGl0VG9kbyIsInByZXZOYW1lIiwibmV4dE5hbWUiLCJ0b2RvQ29udGFpbmVyIiwicHJvamVjdEZvcm1Nb2RhbCIsImNvbnRhaW5zIiwicmVtb3ZlIiwidG9kb0Zyb21Nb2RhbCIsImNvbnRhaW5lciIsImNvbnRhaW5lckNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==