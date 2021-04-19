const displayController = (() => {
    const body = document.querySelector("body");

    const renderHome = () => {
        const home = document.createElement("section");
        home.setAttribute("id", "home");

        const container = document.createElement("div");
        container.classList.add("container", "is-fluid");

        const columns = document.createElement("div");
        columns.classList.add("columns");

        container.appendChild(columns);
        home.appendChild(container);
        body.appendChild(home);
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

        const taskDelete = document.createElement("a");
        taskDelete.classList.add("card-footer-item");
        taskDelete.classList.add("task-delete-btn");
        taskDelete.textContent = "Delete";
        cardFooter.appendChild(taskDelete);

        card.appendChild(cardFooter);

        column.appendChild(card);
        columns.appendChild(column);
    };

    return { renderTask, renderTasks, renderHome, clearTasks };
})();

export { displayController };
