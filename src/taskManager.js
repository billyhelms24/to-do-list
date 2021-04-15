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

export { taskManager };
