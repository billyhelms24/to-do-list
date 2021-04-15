import _ from "lodash";
import "./style.css";
import { taskManager } from "./taskManager";

console.log("webpack enabled");

taskManager.createTask("test", "description", "never", "high");
