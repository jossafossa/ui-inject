
import { log } from "./utils";
import styles from "./assets/index.scss?inline";
import { init as initMessages } from "./messages";

// insert a style
const style = document.createElement("style");
style.innerHTML = styles;
document.head.appendChild(style);

log("UI enhancer loaded")
initMessages();