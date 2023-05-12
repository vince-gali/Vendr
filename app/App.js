import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

// class App {
//   valuesController = new ValuesController();
// }

// window["app"] = new App();



class App {
  moneyController = new MoneyController();
  snacksController = new SnacksController()
}

window["app"] = new App();








