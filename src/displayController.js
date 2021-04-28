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
        container.classList.add("container", "is-max-desktop", "is-clipped");
        container.id = "taskView";

        const newTaskBtn = document.createElement("button");
        newTaskBtn.classList.add(
            "button",
            "is-danger",
            "mb-5",
            "is-align-content"
        );
        newTaskBtn.textContent = "+";
        newTaskBtn.addEventListener("click", () => {
            document.querySelector("#newTaskModal").classList.add("is-active");
        });
        container.appendChild(newTaskBtn);

        const newTaskModal = document.createElement("div");
        newTaskModal.classList.add("modal");
        newTaskModal.id = "newTaskModal";
        const newTaskModalBG = document.createElement("div");
        newTaskModalBG.classList.add("modal-background");
        newTaskModal.appendChild(newTaskModalBG);
        const newTaskModalContent = document.createElement("div");
        newTaskModalContent.classList.add("modal-content");
        newTaskModal.appendChild(newTaskModalContent);
        const newTaskModalClose = document.createElement("button");
        newTaskModalClose.classList.add("modal-close", "is-large");
        newTaskModalClose.setAttribute("aria-label", "close");
        newTaskModalClose.addEventListener("click", (e) => {
            e.target.closest(".modal").classList.remove("is-active");
        });
        newTaskModal.appendChild(newTaskModalClose);
        container.appendChild(newTaskModal);

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

            const cardHeaderTitle = document.createElement("label");
            cardHeaderTitle.classList.add("card-header-title", "checkbox");
            cardHeaderTitle.innerHTML =
                "<input type='checkbox'> &nbsp" + task.title;

            const cardHeaderIcon = document.createElement("a");
            cardHeaderIcon.classList.add("card-header-icon");
            cardHeaderIcon.setAttribute("aria-label", "more options");
            cardHeaderIcon.addEventListener("click", (e) => {
                if (
                    e.target
                        .closest(".card")
                        .querySelector(".card-content")
                        .classList.contains("is-hidden")
                ) {
                    e.target
                        .closest(".card")
                        .querySelector("i")
                        .classList.remove("fa-chevron-left");
                    e.target
                        .closest(".card")
                        .querySelector("i")
                        .classList.add("fa-chevron-down");
                    e.target
                        .closest(".card")
                        .querySelector(".card-content")
                        .classList.remove("is-hidden");
                    e.target
                        .closest(".card")
                        .querySelector("footer")
                        .classList.remove("is-hidden");
                } else {
                    e.target
                        .closest(".card")
                        .querySelector("i")
                        .classList.remove("fa-chevron-down");
                    e.target
                        .closest(".card")
                        .querySelector("i")
                        .classList.add("fa-chevron-left");
                    e.target
                        .closest(".card")
                        .querySelector(".card-content")
                        .classList.add("is-hidden");
                    e.target
                        .closest(".card")
                        .querySelector("footer")
                        .classList.add("is-hidden");
                }
            });
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

            const taskEdit = document.createElement("a");
            taskEdit.classList.add("card-footer-item");
            taskEdit.textContent = "edit";
            taskEdit.addEventListener("click", () => {
                return;
            });
            cardFooter.appendChild(taskEdit);

            const taskDelete = document.createElement("a");
            taskDelete.classList.add("card-footer-item");
            taskDelete.classList.add("task-delete-btn");
            taskDelete.textContent = "delete";
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
