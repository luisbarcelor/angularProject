import { Router } from "express";
import { calculatorController } from "../controllers/calculatorController";

class CalculatorRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', calculatorController.read);
    this.router.get('/:id', calculatorController.readOne);
    this.router.post('/', calculatorController.create);
    this.router.put('/:id', calculatorController.update);
    this.router.delete('/:id', calculatorController.delete);
  }
}

const calculatorRoutes = new CalculatorRoutes();
export default calculatorRoutes.router;
