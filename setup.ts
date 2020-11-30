// Import stylesheets
import "./style.css";
import format from "date-fns/format";

export function setup() {
  console.clear();

  // Write TypeScript code!
  const appDiv: HTMLElement = document.getElementById("app");
  const div = document.createElement("div");
  appDiv.append(div);
  setInterval(() => {
    div.innerText = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    // appDiv.removeChild(div);
  }, 1000);
}
