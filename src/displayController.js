import { taskManager } from "./taskManager";
import { formatDistance, subDays } from "date-fns";

const displayController = (() => {
    const body = document.querySelector("body");

    const renderHome = () => {
        const home = document.createElement("section");
        home.classList.add("section", "has-background-link", "is-fullheight");
        home.setAttribute("id", "home");

        body.appendChild(home);

        renderTaskView();
    };

    const renderTaskView = () => {
        const section = document.querySelector(".section");

        const container = document.createElement("div");
        container.classList.add("container", "is-max-desktop");
        container.id = "taskView";

        const newTaskBtn = () => {
            const btn = document.createElement("button");
            btn.classList.add("button", "is-danger", "mb-5");
            btn.textContent = "+";
            btn.addEventListener("click", () => {
                document
                    .querySelector("#newTaskModal")
                    .classList.add("is-active");
            });
            return btn;
        };

        const newTaskModal = () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.id = "newTaskModal";

            const modalBackground = document.createElement("div");
            modalBackground.classList.add("modal-background");

            modal.appendChild(modalBackground);

            const modalCard = document.createElement("div");
            modalCard.classList.add("modal-card");

            const modalCardHeader = document.createElement("header");
            modalCardHeader.classList.add("modal-card-head");

            const modalCardHeaderTitle = document.createElement("p");
            modalCardHeaderTitle.classList.add("modal-card-title");
            modalCardHeaderTitle.textContent = "New Task";

            const modalCardClose = document.createElement("button");
            modalCardClose.classList.add("delete");
            modalCardClose.setAttribute("aria-label", "close");
            modalCardClose.addEventListener("click", (e) => {
                e.target.closest(".modal").classList.remove("is-active");
            });

            modalCardHeader.appendChild(modalCardHeaderTitle);
            modalCardHeader.appendChild(modalCardClose);
            modalCard.appendChild(modalCardHeader);

            const modalCardBody = document.createElement("section");
            modalCardBody.classList.add("modal-card-body");

            const field1 = document.createElement("div");
            field1.classList.add("field");

            const label1 = document.createElement("label");
            label1.classList.add("label");
            label1.textContent = "Title";

            const control1 = document.createElement("div");
            control1.classList.add("control");

            const input1 = document.createElement("input");
            input1.classList.add("input");
            input1.id = "newTitle";
            input1.type = "text";
            input1.placeholder = "Enter a task title...";

            control1.appendChild(input1);
            field1.appendChild(label1);
            field1.appendChild(control1);
            modalCardBody.appendChild(field1);

            const field2 = document.createElement("div");
            field2.classList.add("field");

            const label2 = document.createElement("label");
            label2.classList.add("label");
            label2.textContent = "Description";

            const control2 = document.createElement("div");
            control2.classList.add("control");

            const input2 = document.createElement("textarea");
            input2.classList.add("textarea");
            input2.id = "newDesc";
            input2.placeholder = "Enter a task description...";

            control2.appendChild(input2);
            field2.appendChild(label2);
            field2.appendChild(control2);
            modalCardBody.appendChild(field2);

            const field3 = document.createElement("div");
            field3.classList.add("field");

            const label3 = document.createElement("label");
            label3.classList.add("label");
            label3.textContent = "Due Date";

            const control3 = document.createElement("div");
            control3.classList.add("control");

            const input3 = document.createElement("input");
            input3.classList.add("input");
            input3.id = "newDueDate";
            input3.type = "text";
            input3.placeholder = "Enter a due date... (MM/DD/YY)";

            control3.appendChild(input3);
            field3.appendChild(label3);
            field3.appendChild(control3);
            modalCardBody.appendChild(field3);

            const field4 = document.createElement("div");
            field4.classList.add("field");

            const label4 = document.createElement("label");
            label4.classList.add("label");
            label4.textContent = "Priority";

            const selectDiv4 = document.createElement("div");
            selectDiv4.classList.add("select");

            const select4 = document.createElement("select");
            select4.id = "newPriority";

            const option41 = document.createElement("option");
            option41.textContent = "none";

            const option42 = document.createElement("option");
            option42.textContent = "low";

            const option43 = document.createElement("option");
            option43.textContent = "medium";

            const option44 = document.createElement("option");
            option44.textContent = "high";

            select4.appendChild(option41);
            select4.appendChild(option42);
            select4.appendChild(option43);
            select4.appendChild(option44);
            selectDiv4.appendChild(select4);
            field4.appendChild(label4);
            field4.appendChild(selectDiv4);
            modalCardBody.appendChild(field4);

            const field5 = document.createElement("div");
            field5.classList.add("field");

            const label5 = document.createElement("label");
            label5.classList.add("label");
            label5.textContent = "Project";

            const selectDiv5 = document.createElement("div");
            selectDiv5.classList.add("select");

            const select5 = document.createElement("select");
            select5.id = "newProject";

            const option51 = document.createElement("option");
            option51.textContent = "inbox";

            select5.appendChild(option51);
            selectDiv5.appendChild(select5);
            field5.appendChild(label5);
            field5.appendChild(selectDiv5);
            modalCardBody.appendChild(field5);

            modalCard.appendChild(modalCardBody);

            const modalCardFooter = document.createElement("footer");
            modalCardFooter.classList.add("modal-card-foot");
            const button1 = document.createElement("button");
            button1.classList.add("button", "is-success");
            button1.textContent = "Create Task";
            button1.addEventListener("click", (e) => {
                if (
                    document.getElementById("newTitle").value !== "" &&
                    document.getElementById("newDesc").value !== "" &&
                    document.getElementById("newDueDate").value !== ""
                ) {
                    taskManager.createTask(
                        document.getElementById("newTitle").value,
                        document.getElementById("newDesc").value,
                        document.getElementById("newDueDate").value,
                        document.getElementById("newPriority").value,
                        document.getElementById("newProject").value
                    );
                    renderTasks(taskManager.getTaskLibrary());
                    e.target.closest(".modal").classList.remove("is-active");
                } else {
                    alert(
                        "To create a new task, the following is required: Title, Description, and Due Date"
                    );
                }
            });

            modalCardFooter.appendChild(button1);
            modalCard.appendChild(modalCardFooter);

            modal.appendChild(modalCard);

            return modal;
        };

        container.appendChild(newTaskBtn());
        container.appendChild(newTaskModal());

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
                    document.querySelectorAll(".card").forEach((card) => {
                        card.querySelector(".card-content").classList.add(
                            "is-hidden"
                        );
                        card.querySelector("footer").classList.add("is-hidden");
                        card.querySelector("i").classList.remove(
                            "fa-chevron-down"
                        );
                        card.querySelector("i").classList.add(
                            "fa-chevron-left"
                        );
                    });
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
            icon.classList.add("fas", "fa-chevron-left");
            icon.setAttribute("aria-hidden", "true");

            iconSpan.appendChild(icon);
            cardHeaderIcon.appendChild(iconSpan);

            cardHeader.appendChild(cardHeaderTitle);
            cardHeader.appendChild(cardHeaderIcon);
            card.appendChild(cardHeader);

            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content", "is-hidden");

            const content = document.createElement("content");
            content.classList.add("content");
            content.textContent = task.desc;
            cardContent.appendChild(content);

            card.appendChild(cardContent);

            const cardFooter = document.createElement("footer");
            cardFooter.classList.add("card-footer", "is-hidden");

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
