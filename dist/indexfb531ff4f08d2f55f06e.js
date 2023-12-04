/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var projectsContainer = document.querySelector('.projects-container');
var howManyProjects = document.querySelector('.how-many-projects');
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.projects = [];
    this.howManyProjectsActive = 0;
  }
  _createClass(App, [{
    key: "createProject",
    value: function createProject(name) {
      if (this.projects.some(function (project) {
        return project.name === name;
      })) {
        console.error('This project already exists.');
        return;
      }
      var newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
      this.projects.push(newProject);
      this.howManyProjectsActive += 1;
      var thisProjects_serialized = JSON.stringify(this.projects);
      localStorage.setItem('projectsLOCAL', thisProjects_serialized);
      this.saveAndDisplayProjects();
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(name) {
      var index = this.findTheIndex(name);
      this.projects.splice(index, 1);
      this.howManyProjectsActive -= 1;
    }
  }, {
    key: "saveAndDisplayProjects",
    value: function saveAndDisplayProjects() {
      var thisProjects_deserialized = JSON.parse(localStorage.getItem('projectsLOCAL'));
      console.log(thisProjects_deserialized);
      thisProjects_deserialized.forEach(function (project) {
        var projectContainer = document.createElement('div');
        projectContainer.classList = "project-container";
        projectContainer.innerHTML = "\n    <button class=\"delete-project-btn\">x</button>\n    <h1 class=\"project-name\">".concat(project.name, "</h1>\n  ");
        projectsContainer.appendChild(projectContainer);
      });
    }
  }, {
    key: "displayHowManyProjects",
    value: function displayHowManyProjects() {
      howManyProjects.textContent = this.howManyProjectsActive;
    }
  }, {
    key: "findTheIndex",
    value: function findTheIndex(name) {
      var index = this.projects.findIndex(function (project) {
        return project.name === name;
      });
      return index;
    }
  }]);
  return App;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var todosContainer = document.querySelector('.todos-container');
var howManyTodos = document.querySelector('.how-many-todos');
var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);
    this.name = name;
    this.id = Date.now();
    this.todos = [];
    this.howManyTodosActive = 0;
  }
  _createClass(Project, [{
    key: "createTodo",
    value: function createTodo(name, priority) {
      if (this.todos.some(function (todo) {
        return todo.name === name;
      })) {
        console.error('This todo already exists.');
        return;
      }
      var newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](name, priority);
      this.todos.push(newTodo);
      this.howManyTodosActive += 1;
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo(name) {
      var index = this.todos.findIndex(function (todo) {
        return todo.name === name;
      });
      this.todos.splice(index, 1);
      this.howManyTodosActive -= 1;
    }
  }, {
    key: "deleteAllTodos",
    value: function deleteAllTodos() {
      this.todos = [];
      this.howManyTodosActive = 0;
    }
  }, {
    key: "editTodo",
    value: function editTodo(prevName, nextName) {
      var index = this.findTheIndex(prevName);
      this.todos[index].name = nextName;
    }
  }, {
    key: "displayTodo",
    value: function displayTodo() {
      todosContainer.innerHTML = '';
      this.todos.forEach(function (todo) {
        var todoContainer = document.createElement('div');
        todoContainer.classList = 'todo-container';
        todoContainer.innerHTML = "\n      <button class=\"delete-todo-btn\">x</button>\n      <h1 class=\"project-name\">".concat(todo.name, "</h1>\n    ");
        todosContainer.appendChild(todoContainer);
      });
    }
  }, {
    key: "findTheIndex",
    value: function findTheIndex(name) {
      var index = this.todos.findIndex(function (todo) {
        return todo.name === name;
      });
      return index;
    }
  }, {
    key: "displayHowManyTodos",
    value: function displayHowManyTodos() {
      howManyTodos.textContent = this.howManyTodosActive;
    }
  }]);
  return Project;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = /*#__PURE__*/_createClass(function Todo(name, priority) {
  _classCallCheck(this, Todo);
  this.name = name;
  this.priority = priority;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIndex: () => (/* binding */ getIndex),
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
function getIndex(container) {
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
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  font-size: 2rem;
  cursor: pointer;
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  color: white;\n}\n\n.background {\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background:\n    linear-gradient(rgba(192, 122, 122, 0.6), rgba(0, 0, 0, 0.7)),\n    url('/src/assets/wallpaper.png') center/cover no-repeat;\n}\n\n.app {\n  z-index: 1;\n  height: 85%;\n  width: 85%;\n  border-radius: 20px;\n  background: linear-gradient(rgba(52, 2, 2, 0.6), rgba(0, 0, 0, 0.7));\n}\n\n.projects {\n  /* for now */\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 1;\n  display: grid;\n  /* display: none; */\n  overflow: auto;\n  padding: 5px;\n}\n.projects.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n.projects.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n\nheader {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n.header-title {\n  font-size: 1.5rem;\n}\n\n.add-btn {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.how-many-projects {\n  font-size: 1.3rem;\n}\n\n.project-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.project-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.project-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.project-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 20px;\n  padding: 20px;\n}\n\n.project-container {\n  background-color: aqua;\n  border-radius: 20px;\n  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.project-container:hover {\n  transform: translateY(-2%);\n}\n\n.project-name {\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  font-size: 100%;\n  overflow: hidden;\n}\n\n.delete-project-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 1.6rem;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  align-self: center;\n  justify-self: flex-end;\n  align-content: center;\n  margin-right: 10px;\n}\n\n/* todos */\n\n.todos {\n  height: 100%;\n  grid-template-rows: 10% auto;\n  opacity: 0;\n  display: none;\n  opacity: 1;\n  /* display: grid; */\n  overflow: auto;\n  padding: 5px;\n}\n.todos.close {\n  opacity: 0;\n  display: none;\n  animation: displayGridToNone 0.5s ease-in-out;\n}\n.todos.open {\n  opacity: 1;\n  display: grid;\n  animation: displayNoneToGrid 0.5s ease-in-out;\n}\n.top-left-header {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.todo-form-modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: none;\n  opacity: 1;\n  align-items: center;\n  justify-content: center;\n  z-index: 20000;\n}\n\n.todo-form-modal.open {\n  display: flex;\n  animation: displayNoneToFlex 1s ease;\n}\n.todo-form-modal.close {\n  animation: displayFlexToNone 1s ease;\n}\n\n.todo-form {\n  background-color: white;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n}\n.how-many-todos {\n  font-size: 1.3rem;\n}\n\n.todos-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 20px;\n  padding: 20px;\n}\n\n.todo-container {\n  background-color: aqua;\n  border-radius: 20px;\n  background: linear-gradient(rgba(18, 124, 159, 1), rgba(0, 0, 0, 0.8));\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.todo-container:hover {\n  transform: translateY(-2%);\n}\n\n.todo-name {\n  overflow: hidden;\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  font-size: 100%;\n  overflow: hidden;\n}\n\n.delete-todo-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 1.6rem;\n  cursor: pointer;\n  border: none;\n  display: grid;\n  align-self: center;\n  justify-self: flex-end;\n  align-content: center;\n  margin-right: 10px;\n}\n\n@keyframes displayNoneToFlex {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: flex;\n  }\n}\n\n@keyframes displayFlexToNone {\n  0% {\n    opacity: 1;\n    display: flex;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayGridToNone {\n  0% {\n    opacity: 1;\n    display: grid;\n  }\n  100% {\n    opacity: 0;\n    display: none;\n  }\n}\n\n@keyframes displayNoneToGrid {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n  100% {\n    opacity: 1;\n    display: grid;\n  }\n}\n"],"sourceRoot":""}]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var addProjectBtn = document.getElementById('add-project-btn');
var projectForm = document.querySelector('.project-form');
var projectInputValue = document.getElementById('project-name');
var projectsContainer = document.querySelector('.projects-container');
var addTodoBtn = document.getElementById('add-todo-btn');
var todoForm = document.querySelector('.todo-form');
var todoInputValue = document.getElementById('todo-name');
var todosContainer = document.querySelector('.todos-container');
var projects = document.querySelector('.projects');
var todos = document.querySelector('.todos');
var goBack = document.querySelector('.go-back');
var app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"]();
if (app.projects.length >= 0) {
  app.saveAndDisplayProjects();
}
addProjectBtn.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_2__.handleProjectModal);
projectForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var projectName = projectInputValue.value;
  app.createProject(projectName);
  app.displayHowManyProjects();
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.handleProjectModal)();
});
projectsContainer.addEventListener('click', function (e) {
  if (e.target.className === 'delete-project-btn') {
    var targetProjectName = e.target.nextElementSibling.textContent;
    app.deleteProject(targetProjectName);
    app.displayProject();
    app.displayHowManyProjects();
  }
});
projectsContainer.addEventListener('click', function (e) {
  if (e.target.className === 'project-container') {
    e.target.classList.add('selected');
    var targetName = e.target.lastElementChild.textContent;
    var targetId = app.findTheIndex(targetName);
    projects.classList = 'projects close';
    setTimeout(function () {
      todos.classList = 'todos open';
    }, 500);
    app.projects[targetId].displayTodo();
    app.projects[targetId].displayHowManyTodos();
  }
});
addTodoBtn.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_2__.handleTodoModal);
todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var todoName = todoInputValue.value;
  var index = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIndex)(projectsContainer);
  app.projects[index].createTodo(todoName);
  app.projects[index].displayTodo();
  app.projects[index].displayHowManyTodos();
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.handleTodoModal)();
});
todosContainer.addEventListener('click', function (e) {
  if (e.target.className === 'delete-todo-btn') {
    var index = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIndex)(projectsContainer);
    var targetTodoName = e.target.nextElementSibling.textContent;
    app.projects[index].deleteTodo(targetTodoName);
    app.projects[index].displayTodo();
    app.projects[index].displayHowManyTodos();
  }
});

// unselects all
goBack.addEventListener('click', function () {
  for (var i = 0; i < app.projects.length; i++) {
    projectsContainer.children[i].classList = 'project-container';
  }
  todos.classList = 'todos close';
  setTimeout(function () {
    projects.classList = 'projects open';
  }, 500);
});
console.log(app);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxP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LENBQUNxRSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzVDMUUsaUJBQWlCLENBQUN5RSxRQUFRLENBQUNDLENBQUMsQ0FBQyxDQUFDdEMsU0FBUyxHQUFHLG1CQUFtQjtFQUMvRDtFQUNBYSxLQUFLLENBQUNiLFNBQVMsR0FBRyxhQUFhO0VBQy9CNkQsVUFBVSxDQUFDLFlBQU07SUFDZjNGLFFBQVEsQ0FBQzhCLFNBQVMsR0FBRyxlQUFlO0VBQ3RDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDVCxDQUFDLENBQUM7QUFDRnJCLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQ29ELEdBQUcsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuY29uc3QgaG93TWFueVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdy1tYW55LXByb2plY3RzJyk7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB0aGlzLmhvd01hbnlQcm9qZWN0c0FjdGl2ZSA9IDA7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgdGhpcy5ob3dNYW55UHJvamVjdHNBY3RpdmUgKz0gMTtcbiAgICBsZXQgdGhpc1Byb2plY3RzX3NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMT0NBTCcsIHRoaXNQcm9qZWN0c19zZXJpYWxpemVkKTtcbiAgICB0aGlzLnNhdmVBbmREaXNwbGF5UHJvamVjdHMoKTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kVGhlSW5kZXgobmFtZSk7XG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuaG93TWFueVByb2plY3RzQWN0aXZlIC09IDE7XG4gIH1cblxuICBzYXZlQW5kRGlzcGxheVByb2plY3RzKCkge1xuICAgIGxldCB0aGlzUHJvamVjdHNfZGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xPQ0FMJyksXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdHNfZGVzZXJpYWxpemVkKTtcbiAgICB0aGlzUHJvamVjdHNfZGVzZXJpYWxpemVkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0ID0gYHByb2plY3QtY29udGFpbmVyYDtcbiAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdC1idG5cIj54PC9idXR0b24+XG4gICAgPGgxIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMT5cbiAgYDtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheUhvd01hbnlQcm9qZWN0cygpIHtcbiAgICBob3dNYW55UHJvamVjdHMudGV4dENvbnRlbnQgPSB0aGlzLmhvd01hbnlQcm9qZWN0c0FjdGl2ZTtcbiAgfVxuXG4gIGZpbmRUaGVJbmRleChuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MtY29udGFpbmVyJyk7XG5jb25zdCBob3dNYW55VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG93LW1hbnktdG9kb3MnKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB0aGlzLmhvd01hbnlUb2Rvc0FjdGl2ZSA9IDA7XG4gIH1cblxuICBjcmVhdGVUb2RvKG5hbWUsIHByaW9yaXR5KSB7XG4gICAgaWYgKHRoaXMudG9kb3Muc29tZSgodG9kbykgPT4gdG9kby5uYW1lID09PSBuYW1lKSkge1xuICAgICAgY29uc29sZS5lcnJvcignVGhpcyB0b2RvIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8obmFtZSwgcHJpb3JpdHkpO1xuICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICB0aGlzLmhvd01hbnlUb2Rvc0FjdGl2ZSArPSAxO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5uYW1lID09PSBuYW1lKTtcbiAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5ob3dNYW55VG9kb3NBY3RpdmUgLT0gMTtcbiAgfVxuXG4gIGRlbGV0ZUFsbFRvZG9zKCkge1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB0aGlzLmhvd01hbnlUb2Rvc0FjdGl2ZSA9IDA7XG4gIH1cblxuICBlZGl0VG9kbyhwcmV2TmFtZSwgbmV4dE5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFRoZUluZGV4KHByZXZOYW1lKTtcbiAgICB0aGlzLnRvZG9zW2luZGV4XS5uYW1lID0gbmV4dE5hbWU7XG4gIH1cblxuICBkaXNwbGF5VG9kbygpIHtcbiAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0ID0gJ3RvZG8tY29udGFpbmVyJztcbiAgICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10b2RvLWJ0blwiPng8L2J1dHRvbj5cbiAgICAgIDxoMSBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7dG9kby5uYW1lfTwvaDE+XG4gICAgYDtcbiAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFRoZUluZGV4KG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KCh0b2RvKSA9PiB0b2RvLm5hbWUgPT09IG5hbWUpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGRpc3BsYXlIb3dNYW55VG9kb3MoKSB7XG4gICAgaG93TWFueVRvZG9zLnRleHRDb250ZW50ID0gdGhpcy5ob3dNYW55VG9kb3NBY3RpdmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJmdW5jdGlvbiBoYW5kbGVQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLW1vZGFsJyk7XG4gIGlmICghcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgIHByb2plY3RGb3JtTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbiAgICBwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0Rm9ybU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgcHJvamVjdEZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZG9Nb2RhbCgpIHtcbiAgY29uc3QgdG9kb0Zyb21Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tbW9kYWwnKTtcbiAgaWYgKCF0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG4gICAgdG9kb0Zyb21Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICAgIHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICB9IGVsc2UgaWYgKHRvZG9Gcm9tTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB0b2RvRnJvbU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXgoY29udGFpbmVyKSB7XG4gIGNvbnN0IGNvbnRhaW5lckNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbnRhaW5lckNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgaW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCB7IGhhbmRsZVByb2plY3RNb2RhbCwgaGFuZGxlVG9kb01vZGFsLCBnZXRJbmRleCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL3dhbGxwYXBlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDpcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxOTIsIDEyMiwgMTIyLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNykpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xufVxuXG4uYXBwIHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiA4NSU7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDUyLCAyLCAyLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xufVxuXG4ucHJvamVjdHMge1xuICAvKiBmb3Igbm93ICovXG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5wcm9qZWN0cy5jbG9zZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcbn1cbi5wcm9qZWN0cy5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvR3JpZCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFkZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob3ctbWFueS1wcm9qZWN0cyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDAwO1xufVxuXG4ucHJvamVjdC1mb3JtLW1vZGFsLm9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XG59XG4ucHJvamVjdC1mb3JtLW1vZGFsLmNsb3NlIHtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xufVxuXG4ucHJvamVjdC1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTgsIDEyNCwgMTU5LCAxKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLyogdG9kb3MgKi9cblxuLnRvZG9zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAxO1xuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogNXB4O1xufVxuLnRvZG9zLmNsb3NlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5R3JpZFRvTm9uZSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnRvZG9zLm9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4udG9wLWxlZnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG9kby1mb3JtLW1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDAwO1xufVxuXG4udG9kby1mb3JtLW1vZGFsLm9wZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XG59XG4udG9kby1mb3JtLW1vZGFsLmNsb3NlIHtcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xufVxuXG4udG9kby1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ob3ctbWFueS10b2RvcyB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udG9kb3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9kby1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxOCwgMTI0LCAxNTksIDEpLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4udG9kby1jb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbn1cblxuLnRvZG8tbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRlbGV0ZS10b2RvLWJ0biB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9GbGV4IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkaXNwbGF5RmxleFRvTm9uZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZGlzcGxheUdyaWRUb05vbmUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9HcmlkIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjs7a0VBRXlEO0FBQzNEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNu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RUE7RUFDRTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDE5MiwgMTIyLCAxMjIsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC43KSksXFxuICAgIHVybCgnL3NyYy9hc3NldHMvd2FsbHBhcGVyLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxufVxcblxcbi5hcHAge1xcbiAgei1pbmRleDogMTtcXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1MiwgMiwgMiwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjcpKTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIC8qIGZvciBub3cgKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnByb2plY3RzLmNsb3NlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5R3JpZFRvTm9uZSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4ucHJvamVjdHMub3BlbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFuaW1hdGlvbjogZGlzcGxheU5vbmVUb0dyaWQgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdy1tYW55LXByb2plY3RzIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMjAwMDA7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tbW9kYWwub3BlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5Tm9uZVRvRmxleCAxcyBlYXNlO1xcbn1cXG4ucHJvamVjdC1mb3JtLW1vZGFsLmNsb3NlIHtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUZsZXhUb05vbmUgMXMgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTgsIDEyNCwgMTU5LCAxKSwgcmdiYSgwLCAwLCAwLCAwLjgpKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIHRvZG9zICovXFxuXFxuLnRvZG9zIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi50b2Rvcy5jbG9zZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFuaW1hdGlvbjogZGlzcGxheUdyaWRUb05vbmUgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLnRvZG9zLm9wZW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9HcmlkIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b3AtbGVmdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50b2RvLWZvcm0tbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAyMDAwMDtcXG59XFxuXFxuLnRvZG8tZm9ybS1tb2RhbC5vcGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbmltYXRpb246IGRpc3BsYXlOb25lVG9GbGV4IDFzIGVhc2U7XFxufVxcbi50b2RvLWZvcm0tbW9kYWwuY2xvc2Uge1xcbiAgYW5pbWF0aW9uOiBkaXNwbGF5RmxleFRvTm9uZSAxcyBlYXNlO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5ob3ctbWFueS10b2RvcyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE4LCAxMjQsIDE1OSwgMSksIHJnYmEoMCwgMCwgMCwgMC44KSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9GbGV4IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc3BsYXlGbGV4VG9Ob25lIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc3BsYXlHcmlkVG9Ob25lIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc3BsYXlOb25lVG9HcmlkIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgaGFuZGxlUHJvamVjdE1vZGFsLCBoYW5kbGVUb2RvTW9kYWwsIGdldEluZGV4IH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWJ0bicpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG5jb25zdCB0b2RvSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW5hbWUnKTtcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5jb25zdCBnb0JhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28tYmFjaycpO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5pZiAoYXBwLnByb2plY3RzLmxlbmd0aCA+PSAwKSB7XG4gIGFwcC5zYXZlQW5kRGlzcGxheVByb2plY3RzKCk7XG59XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdE1vZGFsKTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dFZhbHVlLnZhbHVlO1xuICBhcHAuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGFwcC5kaXNwbGF5SG93TWFueVByb2plY3RzKCk7XG4gIGhhbmRsZVByb2plY3RNb2RhbCgpO1xufSk7XG5cbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpIHtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0TmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICBhcHAuZGVsZXRlUHJvamVjdCh0YXJnZXRQcm9qZWN0TmFtZSk7XG4gICAgYXBwLmRpc3BsYXlQcm9qZWN0KCk7XG4gICAgYXBwLmRpc3BsYXlIb3dNYW55UHJvamVjdHMoKTtcbiAgfVxufSk7XG5cbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2plY3QtY29udGFpbmVyJykge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY29uc3QgdGFyZ2V0TmFtZSA9IGUudGFyZ2V0Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGFyZ2V0SWQgPSBhcHAuZmluZFRoZUluZGV4KHRhcmdldE5hbWUpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdCA9ICdwcm9qZWN0cyBjbG9zZSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2Rvcy5jbGFzc0xpc3QgPSAndG9kb3Mgb3Blbic7XG4gICAgfSwgNTAwKTtcbiAgICBhcHAucHJvamVjdHNbdGFyZ2V0SWRdLmRpc3BsYXlUb2RvKCk7XG4gICAgYXBwLnByb2plY3RzW3RhcmdldElkXS5kaXNwbGF5SG93TWFueVRvZG9zKCk7XG4gIH1cbn0pO1xuXG5hZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVG9kb01vZGFsKTtcblxudG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvTmFtZSA9IHRvZG9JbnB1dFZhbHVlLnZhbHVlO1xuICBsZXQgaW5kZXggPSBnZXRJbmRleChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIGFwcC5wcm9qZWN0c1tpbmRleF0uY3JlYXRlVG9kbyh0b2RvTmFtZSk7XG4gIGFwcC5wcm9qZWN0c1tpbmRleF0uZGlzcGxheVRvZG8oKTtcbiAgYXBwLnByb2plY3RzW2luZGV4XS5kaXNwbGF5SG93TWFueVRvZG9zKCk7XG4gIGhhbmRsZVRvZG9Nb2RhbCgpO1xufSk7XG5cbnRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS10b2RvLWJ0bicpIHtcbiAgICBsZXQgaW5kZXggPSBnZXRJbmRleChwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgdGFyZ2V0VG9kb05hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgYXBwLnByb2plY3RzW2luZGV4XS5kZWxldGVUb2RvKHRhcmdldFRvZG9OYW1lKTtcbiAgICBhcHAucHJvamVjdHNbaW5kZXhdLmRpc3BsYXlUb2RvKCk7XG4gICAgYXBwLnByb2plY3RzW2luZGV4XS5kaXNwbGF5SG93TWFueVRvZG9zKCk7XG4gIH1cbn0pO1xuXG4vLyB1bnNlbGVjdHMgYWxsXG5nb0JhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0ID0gJ3Byb2plY3QtY29udGFpbmVyJztcbiAgfVxuICB0b2Rvcy5jbGFzc0xpc3QgPSAndG9kb3MgY2xvc2UnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QgPSAncHJvamVjdHMgb3Blbic7XG4gIH0sIDUwMCk7XG59KTtcbmNvbnNvbGUubG9nKGFwcCk7XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsInByb2plY3RzQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaG93TWFueVByb2plY3RzIiwiQXBwIiwiX2NsYXNzQ2FsbENoZWNrIiwicHJvamVjdHMiLCJob3dNYW55UHJvamVjdHNBY3RpdmUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNyZWF0ZVByb2plY3QiLCJuYW1lIiwic29tZSIsInByb2plY3QiLCJjb25zb2xlIiwiZXJyb3IiLCJuZXdQcm9qZWN0IiwicHVzaCIsInRoaXNQcm9qZWN0c19zZXJpYWxpemVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzYXZlQW5kRGlzcGxheVByb2plY3RzIiwiZGVsZXRlUHJvamVjdCIsImluZGV4IiwiZmluZFRoZUluZGV4Iiwic3BsaWNlIiwidGhpc1Byb2plY3RzX2Rlc2VyaWFsaXplZCIsInBhcnNlIiwiZ2V0SXRlbSIsImxvZyIsImZvckVhY2giLCJwcm9qZWN0Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImlubmVySFRNTCIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiZGlzcGxheUhvd01hbnlQcm9qZWN0cyIsInRleHRDb250ZW50IiwiZmluZEluZGV4IiwiVG9kbyIsInRvZG9zQ29udGFpbmVyIiwiaG93TWFueVRvZG9zIiwiaWQiLCJEYXRlIiwibm93IiwidG9kb3MiLCJob3dNYW55VG9kb3NBY3RpdmUiLCJjcmVhdGVUb2RvIiwicHJpb3JpdHkiLCJ0b2RvIiwibmV3VG9kbyIsImRlbGV0ZVRvZG8iLCJkZWxldGVBbGxUb2RvcyIsImVkaXRUb2RvIiwicHJldk5hbWUiLCJuZXh0TmFtZSIsImRpc3BsYXlUb2RvIiwidG9kb0NvbnRhaW5lciIsImRpc3BsYXlIb3dNYW55VG9kb3MiLCJoYW5kbGVQcm9qZWN0TW9kYWwiLCJwcm9qZWN0Rm9ybU1vZGFsIiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVUb2RvTW9kYWwiLCJ0b2RvRnJvbU1vZGFsIiwiZ2V0SW5kZXgiLCJjb250YWluZXIiLCJjb250YWluZXJDaGlsZHJlbiIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImFkZFByb2plY3RCdG4iLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RGb3JtIiwicHJvamVjdElucHV0VmFsdWUiLCJhZGRUb2RvQnRuIiwidG9kb0Zvcm0iLCJ0b2RvSW5wdXRWYWx1ZSIsImdvQmFjayIsImFwcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0TmFtZSIsInRhcmdldCIsImNsYXNzTmFtZSIsInRhcmdldFByb2plY3ROYW1lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZGlzcGxheVByb2plY3QiLCJ0YXJnZXROYW1lIiwibGFzdEVsZW1lbnRDaGlsZCIsInRhcmdldElkIiwic2V0VGltZW91dCIsInRvZG9OYW1lIiwidGFyZ2V0VG9kb05hbWUiXSwic291cmNlUm9vdCI6IiJ9