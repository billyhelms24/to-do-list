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
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
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

    const renderTasks = (tasks) => {
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

        column.appendChild(card);
        columns.appendChild(column);
    };

    return { renderTask, renderTasks, renderHome, clearTasks };
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFNEIiLCJmaWxlIjoiZGlzcGxheUNvbnRyb2xsZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gICAgY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICAgICAgaG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChob21lKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiLCBcImlzLWZsdWlkXCIpO1xyXG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sdW1ucy5jbGFzc0xpc3QuYWRkKFwiY29sdW1uc1wiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1ucyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sdW1uQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2x1bW5cIik7XHJcbiAgICAgICAgY29sdW1uQWxsLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUYXNrcyA9ICh0YXNrcykgPT4ge1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHJlbmRlclRhc2sodGFzaykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2x1bW5zXCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtaGVhZGVyXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJkSGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjYXJkSGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtaGVhZGVyLXRpdGxlXCIpO1xyXG4gICAgICAgIGNhcmRIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjYXJkSGVhZGVyVGl0bGUpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRIZWFkZXJUaXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jb250ZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRlbnRcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gdGFzay5kZXNjO1xyXG4gICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgY2FyZEZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1mb290ZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcImNhcmQtZm9vdGVyLWl0ZW1cIik7XHJcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICAgICAgY2FyZEZvb3Rlci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1mb290ZXItaXRlbVwiKTtcclxuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImNhcmQtZm9vdGVyLWl0ZW1cIik7XHJcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGUtYnRuXCIpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgIGNhcmRGb290ZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEZvb3Rlcik7XHJcblxyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBjb2x1bW5zLmFwcGVuZENoaWxkKGNvbHVtbik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IHJlbmRlclRhc2ssIHJlbmRlclRhc2tzLCByZW5kZXJIb21lLCBjbGVhclRhc2tzIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9