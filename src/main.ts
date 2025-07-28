
// import { log, waitFor } from "./utils";
import styles from "./assets/index.scss?inline";

// insert a style
const style = document.createElement("style");
style.innerHTML = styles;
document.head.appendChild(style);

console.log("UI enhancer loaded")