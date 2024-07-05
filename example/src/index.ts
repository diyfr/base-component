import { qd } from "@diyfr/quickdom";
import Header from "./components/header/header";
import EnvironmentLoader from "./environments/environment.loader";
import Main from "./features/main/main";
import "./index.css";

const appElement = document.getElementById("app");


function render() {
  let viewport = document.querySelector("meta[name=viewport]");
  if (viewport) {
    let vPort = viewport;
    const minWidth = 330;
    if (screen.width < minWidth) {
      document.head.removeChild(vPort);
      let newViewport = qd("meta", { name: "viewport", content: "width=" + minWidth + ", initial-scale=1, user-scalable=no" });
      document.head.appendChild(newViewport);
      return;
    }
  }
  new EnvironmentLoader().load().then(() => {
    const header = new Header();
    const main = new Main();
    if (appElement) {
      header.render(appElement);
      main.render(appElement);
    }
  });
}

render();
