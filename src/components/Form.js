import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    const form = document.createElement("form");
    form.className = "donate-form";

    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";

    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.name = "amount";
    input.type = "number";
    input.max = "100";
    input.min = "1";
    input.required = true;

    const button = document.createElement("button");
    button.className = "donate-form__submit-button";
    button.type = "submit";
    button.textContent = "Задонатить";

    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(button);

    this.$rootElement = form;
    this.$input = input;
    this.$button = button;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    const value = Number(this.state.amount);
    return value >= 1 && value <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;

    console.log("Текущее значение:", this.state.amount);
    console.log("Валидно ли?", this.isValid);

    // отключаем/включаем кнопку
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    const amount = Number(this.state.amount);
    if (!amount || amount < 1 || amount > 100) return;

    if (this.props && typeof this.props.onSubmit === "function") {
      this.props.onSubmit(amount);
    }

    this.$input.value = "";
    this.state.amount = "";
    this.$button.disabled = true;
  }
}
