/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.js */ "./src/taskManager.js");


const displayController = (() => {
    const body = document.querySelector("body");

    const renderHome = () => {
        const home = document.createElement("section");
        home.setAttribute("id", "home");
        body.appendChild(home);

        const container = document.createElement("div");
        container.classList.add("container", "is-fluid");
        home.appendChild(container);

        const columns = document.createElement("div");
        columns.classList.add("columns");
        container.appendChild(columns);
    };

    const clearTasks = () => {
        const columnAll = document.querySelectorAll(".column");
        columnAll.forEach((child) => {
            child.remove();
        });
    };

    const renderTasks = () => {
        const tasks = _taskManager_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.getTaskLibrary();
        tasks.forEach((task) => renderTask(task));
    };

    const renderTask = (task) => {
        const columns = document.querySelector(".columns");
        const column = document.createElement("div");
        column.classList.add("column");

        const card = document.createElement("div");
        card.classList.add("card");

        const cardHeader = document.createElement("header");
        cardHeader.classList.add("card-header");

        const cardHeaderTitle = document.createElement("p");
        cardHeaderTitle.classList.add("card-header-title");
        cardHeaderTitle.textContent = task.title;
        cardHeader.appendChild(cardHeaderTitle);

        card.appendChild(cardHeaderTitle);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const content = document.createElement("content");
        content.classList.add("content");
        content.textContent = task.desc;
        cardContent.appendChild(content);

        card.appendChild(cardContent);

        const cardFooter = document.createElement("footer");
        cardFooter.classList.add("card-footer");

        const taskDueDate = document.createElement("p");
        taskDueDate.classList.add("card-footer-item");
        taskDueDate.textContent = task.dueDate;
        cardFooter.appendChild(taskDueDate);

        const taskPriority = document.createElement("p");
        taskPriority.classList.add("card-footer-item");
        taskPriority.textContent = task.priority;
        cardFooter.appendChild(taskPriority);

        const deleteTask = document.createElement("a");
        deleteTask.classList.add("card-footer-item");
        deleteTask.classList.add("task-delete-btn");
        deleteTask.textContent = "Delete";
        cardFooter.appendChild(deleteTask);

        card.appendChild(cardFooter);

        card.addEventListener("click", (e) => {
            if (e.target.closest("a").classList.contains("task-delete-btn")) {
                _taskManager_js__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(e);
            }
        });

        column.appendChild(card);
        columns.appendChild(column);
    };

    return { renderTask, renderTasks, renderHome, clearTasks };
})();




/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManager": () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");


const taskManager = (() => {
    let taskLibrary = [];

    const getTaskLibrary = () => {
        return taskLibrary;
    };

    class Task {
        constructor(title, desc, dueDate, priority, project) {
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
            if (project) {
                this.project = project;
            } else {
                this.project = "default";
            }
            taskLibrary.push(this);
            _displayController_js__WEBPACK_IMPORTED_MODULE_0__.displayController.clearTasks();
            _displayController_js__WEBPACK_IMPORTED_MODULE_0__.displayController.renderTasks();
            console.log(taskLibrary);
        }
    }

    const createTask = (title, desc, dueDate, priority) => {
        new Task(title, desc, dueDate, priority);
    };

    const deleteTask = (e) => {
        const card = e.target.closest("div");
        taskLibrary.forEach((task) => {
            if (
                card.querySelector(".card-header-title").innerHTML ===
                task.title
            ) {
                taskLibrary.splice(task, 1);
                console.log(taskLibrary);
            }
        });
        _displayController_js__WEBPACK_IMPORTED_MODULE_0__.displayController.clearTasks();
        _displayController_js__WEBPACK_IMPORTED_MODULE_0__.displayController.renderTasks();
    };

    return { createTask, deleteTask, getTaskLibrary };
})();




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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/displayController.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxzQkFBc0IsdUVBQTBCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbUVBQXNCO0FBQ3RDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0Y4Qjs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtFQUE0QjtBQUN4QyxZQUFZLGdGQUE2QjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsK0VBQTRCO0FBQ3BDLFFBQVEsZ0ZBQTZCO0FBQ3JDOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVzQjs7Ozs7OztVQ2pEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRpc3BsYXlDb250cm9sbGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSBcIi4vdGFza01hbmFnZXIuanNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgICAgICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhvbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIsIFwiaXMtZmx1aWRcIik7XHJcbiAgICAgICAgaG9tZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2x1bW5zLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5zXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW5zKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xlYXJUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW5BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbHVtblwiKTtcclxuICAgICAgICBjb2x1bW5BbGwuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFza01hbmFnZXIuZ2V0VGFza0xpYnJhcnkoKTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiByZW5kZXJUYXNrKHRhc2spKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sdW1uc1wiKTtcclxuICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgICAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRlclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZEhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY2FyZEhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWhlYWRlci10aXRsZVwiKTtcclxuICAgICAgICBjYXJkSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlclRpdGxlKTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZGVyVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNhcmQtY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcclxuICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgICAgIGNhcmRGb290ZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtZm9vdGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWZvb3Rlci1pdGVtXCIpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG4gICAgICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImNhcmQtZm9vdGVyLWl0ZW1cIik7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICBjYXJkRm9vdGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWZvb3Rlci1pdGVtXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ0blwiKTtcclxuICAgICAgICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICBjYXJkRm9vdGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRGb290ZXIpO1xyXG5cclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcImFcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1kZWxldGUtYnRuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrTWFuYWdlci5kZWxldGVUYXNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBjb2x1bW5zLmFwcGVuZENoaWxkKGNvbHVtbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHJlbmRlclRhc2ssIHJlbmRlclRhc2tzLCByZW5kZXJIb21lLCBjbGVhclRhc2tzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9O1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGFza0xpYnJhcnkgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRUYXNrTGlicmFyeSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFza0xpYnJhcnk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNsYXNzIFRhc2sge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXNrTGlicmFyeS5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbGVhclRhc2tzKCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaWJyYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgICAgICBuZXcgVGFzayh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKTtcclxuICAgICAgICB0YXNrTGlicmFyeS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWhlYWRlci10aXRsZVwiKS5pbm5lckhUTUwgPT09XHJcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGFza0xpYnJhcnkuc3BsaWNlKHRhc2ssIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xlYXJUYXNrcygpO1xyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIGdldFRhc2tMaWJyYXJ5IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyB0YXNrTWFuYWdlciB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==