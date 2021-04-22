const taskManager = (() => {
    let taskLibrary = [];
    let taskID = 0;

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
            this.id = taskID;
            taskID++;
            taskLibrary.push(this);
            console.log(taskLibrary);
        }
    }

    const createTask = (title, desc, dueDate, priority, project) => {
        new Task(title, desc, dueDate, priority, project);
    };

    const deleteTask = (elementID) => {
        taskLibrary.forEach((task) => {
            if (task.id == elementID) {
                taskLibrary.splice(task, 1);
                console.log(taskLibrary);
            }
        });
    };

    return { createTask, deleteTask, getTaskLibrary };
})();

export { taskManager };
