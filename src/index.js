import { createTask } from "./createTask";

const init = (() => {
    createTask("Grocery", "Buy food for the week", "4/14/21", 3);
    createTask("Gas", "Put gas in vehicle", "4/14/21", 3);
})();
