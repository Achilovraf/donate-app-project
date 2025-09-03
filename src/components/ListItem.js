import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    //внутренняя разметка
    this.$rootElement.innerHTML = `
      <span>${this.state.date.toLocaleString()}</span>
      <span>${this.state.amount}</span>
      <button class="delete-button">Delete</button>
    `;

    const deleteButton = this.$rootElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => this.$rootElement.remove());
  }
}
