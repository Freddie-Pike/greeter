import Greeter from "./src";

const pageContainer = document.getElementById("greeter-container");
const greeter = new Greeter("Freddie");

const page = document.createElement("div");
page.classList.add("greeter");
page.textContent = greeter.greet();
pageContainer.append(page);
