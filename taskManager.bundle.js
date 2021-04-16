/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManager": () => (/* binding */ taskManager)
/* harmony export */ });
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
    };

    return { createTask, deleteTask, getTaskLibrary };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRXNCIiwiZmlsZSI6InRhc2tNYW5hZ2VyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGFza01hbmFnZXIgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tMaWJyYXJ5ID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0VGFza0xpYnJhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tMaWJyYXJ5O1xyXG4gICAgfTtcclxuXHJcbiAgICBjbGFzcyBUYXNrIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFza0xpYnJhcnkucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIG5ldyBUYXNrKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tMaWJyYXJ5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtaGVhZGVyLXRpdGxlXCIpLmlubmVySFRNTCA9PT1cclxuICAgICAgICAgICAgICAgIHRhc2sudGl0bGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrTGlicmFyeS5zcGxpY2UodGFzaywgMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlicmFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgY3JlYXRlVGFzaywgZGVsZXRlVGFzaywgZ2V0VGFza0xpYnJhcnkgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRhc2tNYW5hZ2VyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=