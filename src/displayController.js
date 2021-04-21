const displayController = (() => {
    const body = document.querySelector("body");

    const renderHome = () => {
        const home = document.createElement("section");
        home.classList.add("section");
        home.setAttribute("id", "home");

        body.appendChild(home);

        renderTaskView();
    };

    const renderTaskView = () => {
        const section = document.querySelector(".section");

        const container = document.createElement("div");
        container.classList.add("container", "is-fluid");

        const columns = document.createElement("div");
        columns.classList.add("columns");
        columns.setAttribute("id", "taskView");

        container.appendChild(columns);
        section.appendChild(container);
    };

    const clearTasks = () => {
        const columns = document.querySelectorAll(".column");
        columns.forEach((column) => {
            column.remove();
        });
    };

    const renderTasks = (tasks) => {
        clearTasks();

        const taskView = document.querySelector("#taskView");

        tasks.forEach((task) => {
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
            taskDelete.addEventListener("click", (e) => {
                e.target.closest("div").remove();
            });
            cardFooter.appendChild(taskDelete);

            card.appendChild(cardFooter);

            column.appendChild(card);
            taskView.appendChild(column);
        });
    };

    return { renderTasks, renderHome, clearTasks, renderTaskView };
})();

export { displayController };
