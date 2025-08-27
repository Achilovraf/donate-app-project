import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const heading = document.createElement("h1");
    heading.className = "total-amount";
    heading.textContent = "Итого: $";

    const $totalSpan = document.createElement("span");
    $totalSpan.textContent = this.state.total;
    this.$total = $totalSpan;

    heading.appendChild(this.$total);

    this.$rootElement.appendChild(heading);

    this.form = new Form({
      onSubmit: (amount) => this.onItemCreate(amount),
    });
    this.$rootElement.appendChild(this.form.$rootElement);

    // const donateList = new List();
    // this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);

    // const donateListItem = new ListItem();
    // this.$rootElement.appendChild(donateListItem.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount });

    // добавляем донат в массив
    this.state.donates.push(item);

    // добавляем донат в список
    this.donateList.addItem(item);

    // обновляем сумму
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }
}
