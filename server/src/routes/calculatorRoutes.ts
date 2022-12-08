import { Router } from "express";
import { calculatorController } from "../controllers/calculatorController";

class CalculatorRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', calculatorController.index);
  }
}

const calculatorRoutes = new CalculatorRoutes();
export default calculatorRoutes.router;
