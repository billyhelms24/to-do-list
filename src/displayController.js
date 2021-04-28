import { taskManager } from "./taskManager";

const displayController = (() => {
    const body = document.querySelector("body");

    const renderHome = () => {
        const home = document.createElement("section");
        home.classList.add("section", "has-background-link");
        home.setAttribute("id", "home");

        body.appendChild(home);

        renderTaskView();
    };

    const renderTaskView = () => {
        const section = document.querySelector(".section");

        const container = document.createElement("div");
        container.classList.add("container", "is-max-desktop");
        container.id = "taskView";

        const newTaskBtn = document.createElement("button");
        newTaskBtn.classList.add(
            "button",
            "is-primary",
            "mb-5",
            "is-align-content"
        );
        newTaskBtn.textContent = "+";

        container.appendChild(newTaskBtn);
        section.appendChild(container);
    };

    const clearTasks = () => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.remove();
        });
    };

    const renderTasks = (tasks) => {
        clearTasks();

        const taskView = document.querySelector("#taskView");

        tasks.forEach((task) => {
            const card = document.createElement("div");
            card.classList.add("card", "mb-5");
            card.id = task.id;

            const cardHeader = document.createElement("header");
            cardHeader.classList.add("card-header");

            const cardHeaderTitle = document.createElement("p");
            cardHeaderTitle.classList.add("card-header-title");
            cardHeaderTitle.textContent = task.title;

            const cardHeaderIcon = document.createElement("a");
            cardHeaderIcon.classList.add("card-header-icon");
            cardHeaderIcon.setAttribute("aria-label", "more options");
            const iconSpan = document.createElement("span");
            iconSpan.classList.add("icon");
            const icon = document.createElement("i");
            icon.classList.add("fas", "fa-chevron-down");
            icon.setAttribute("aria-hidden", "true");

            iconSpan.appendChild(icon);
            cardHeaderIcon.appendChild(iconSpan);

            cardHeader.appendChild(cardHeaderTitle);
            cardHeader.appendChild(cardHeaderIcon);
            card.appendChild(cardHeader);

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
                taskManager.deleteTask(e.target.closest(".card").id);
                displayController.renderTasks(taskManager.getTaskLibrary());
            });
            cardFooter.appendChild(taskDelete);

            card.appendChild(cardFooter);

            taskView.appendChild(card);
        });
    };

    return { renderTasks, renderHome, clearTasks, renderTaskView };
})();

export { displayController };
