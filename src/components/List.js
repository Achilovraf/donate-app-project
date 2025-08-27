import { Component } from "../core/Component";
import { ListItem } from "./ListItem";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const heading = document.createElement("h2");
    heading.className = "donates-title";
    heading.textContent = "Список донатов";
    this.$rootElement.appendChild(heading);

    this.$list = document.createElement("div");
    this.$list.className = "donates-list";
    this.$rootElement.appendChild(this.$list);
  }

  addItem(item) {
    this.$list.appendChild(item.$rootElement);
  }
}
