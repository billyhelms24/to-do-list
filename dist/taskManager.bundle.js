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

    return { createTask };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFc0IiLCJmaWxlIjoidGFza01hbmFnZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0YXNrTWFuYWdlciA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGFza0xpYnJhcnkgPSBbXTtcclxuXHJcbiAgICBjbGFzcyBUYXNrIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFza0xpYnJhcnkucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0xpYnJhcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIG5ldyBUYXNrKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGNyZWF0ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IHRhc2tNYW5hZ2VyIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=