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

    const createTask = (title, desc, dueDate, priority, project) => {
        new Task(title, desc, dueDate, priority, project);
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

export { taskManager };
