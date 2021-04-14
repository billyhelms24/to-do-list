import { taskList } from "./taskList";

const createTask = (title, desc, dueDate, priority) => {
    class Task {
        constructor(title, desc, dueDate, priority) {
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
            taskList.push(this);
            console.log(taskList);
        }
    }

    return new Task(title, desc, dueDate, priority);
};

export { createTask };
