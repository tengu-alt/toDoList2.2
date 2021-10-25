/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var arrayOfTasks = [];

function clear() {
  while (document.getElementById('ls').firstChild) {
    document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
  }

  localStorage.clear();
  document.location.reload();
}

function adder() {
  if (document.querySelector('input').value !== '' && document.querySelector('input').value === document.querySelector('input').value.trimRight()) {
    while (document.getElementById('ls').firstChild) {
      document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
    }

    arrayOfTasks.push(document.querySelector('input').value);
    arrayOfTasks.sort();
    localStorage.setItem('tasks', arrayOfTasks);
    document.querySelector('input').value = '';
    arrayOfTasks = localStorage.getItem('tasks').split(',');

    for (var i = 0; i < arrayOfTasks.length; i += 1) {
      var task = document.createElement('li');
      task.innerHTML = arrayOfTasks[i];
      document.getElementById('ls').appendChild(task);
    }
  }
}

function toDoList() {
  if (localStorage.getItem('tasks') != null) {
    arrayOfTasks = localStorage.getItem('tasks').split(',');
    arrayOfTasks.sort();
  }

  var form = document.createElement('input');
  form.type = 'text';
  document.body.append(form);
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'addNew';
  document.body.append(button);
  var buttonClr = document.createElement('button');
  buttonClr.type = 'button';
  buttonClr.innerHTML = 'clear';
  document.body.append(buttonClr);
  buttonClr.addEventListener('click', clear);
  var container = document.createElement('div');
  container.id = 'cont';
  document.body.append(container);
  var list = document.createElement('ul');
  list.id = 'ls';
  document.getElementById('cont').appendChild(list);

  for (var i = 0; i < arrayOfTasks.length; i += 1) {
    var task = document.createElement('li');
    task.innerHTML = arrayOfTasks[i];
    document.getElementById('ls').appendChild(task);
  }

  button.addEventListener('click', adder);
  window.addEventListener('keypress', function event(e) {
    if (e.key === 'Enter') {
      adder();
    }
  });
}

window.addEventListener('load', toDoList);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImFycmF5T2ZUYXNrcyIsImNsZWFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImxvY2FsU3RvcmFnZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWRkZXIiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ0cmltUmlnaHQiLCJwdXNoIiwic29ydCIsInNldEl0ZW0iLCJnZXRJdGVtIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidGFzayIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInRvRG9MaXN0IiwiZm9ybSIsInR5cGUiLCJib2R5IiwiYXBwZW5kIiwiYnV0dG9uIiwiYnV0dG9uQ2xyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lciIsImlkIiwibGlzdCIsIndpbmRvdyIsImV2ZW50IiwiZSIsImtleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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Q3BELFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckI3QixXQUFLO0FBQ047QUFDRixHQUpEO0FBS0Q7O0FBQ0QwQixNQUFNLENBQUNKLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDUCxRQUFoQyxFIiwiZmlsZSI6Im1haW4uNmNkNGEwMTk2OGEzNmI3OTNjNzAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgYXJyYXlPZlRhc2tzID0gW107XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdscycpLmZpcnN0Q2hpbGQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHMnKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHMnKS5maXJzdENoaWxkKTtcbiAgfVxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG59XG5mdW5jdGlvbiBhZGRlcigpIHtcbiAgaWYgKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgIT09ICcnICYmXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZS50cmltUmlnaHQoKVxuICApIHtcbiAgICB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xzJykuZmlyc3RDaGlsZCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xzJykucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xzJykuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGFycmF5T2ZUYXNrcy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUpO1xuICAgIGFycmF5T2ZUYXNrcy5zb3J0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgYXJyYXlPZlRhc2tzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gJyc7XG5cbiAgICBhcnJheU9mVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKS5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRhc2suaW5uZXJIVE1MID0gYXJyYXlPZlRhc2tzW2ldO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xzJykuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB0b0RvTGlzdCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpICE9IG51bGwpIHtcbiAgICBhcnJheU9mVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKS5zcGxpdCgnLCcpO1xuICAgIGFycmF5T2ZUYXNrcy5zb3J0KCk7XG4gIH1cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm0udHlwZSA9ICd0ZXh0JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9ybSk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICBidXR0b24uaW5uZXJIVE1MID0gJ2FkZE5ldyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJ1dHRvbik7XG4gIGNvbnN0IGJ1dHRvbkNsciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25DbHIudHlwZSA9ICdidXR0b24nO1xuICBidXR0b25DbHIuaW5uZXJIVE1MID0gJ2NsZWFyJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYnV0dG9uQ2xyKTtcbiAgYnV0dG9uQ2xyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmlkID0gJ2NvbnQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdC5pZCA9ICdscyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250JykuYXBwZW5kQ2hpbGQobGlzdCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFzay5pbm5lckhUTUwgPSBhcnJheU9mVGFza3NbaV07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xzJykuYXBwZW5kQ2hpbGQodGFzayk7XG4gIH1cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkZXIpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiBldmVudChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBhZGRlcigpO1xuICAgIH1cbiAgfSk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRvRG9MaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=