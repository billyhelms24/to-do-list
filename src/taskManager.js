import { displayController } from "./displayController.js";

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
            displayController.clearTasks();
            displayController.renderTasks();
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
        displayController.clearTasks();
        displayController.renderTasks();
    };

    return { createTask, deleteTask, getTaskLibrary };
})();

export { taskManager };
