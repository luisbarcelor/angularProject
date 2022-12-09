"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calculatorController_1 = require("../controllers/calculatorController");
class CalculatorRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', calculatorController_1.calculatorController.read);
        this.router.get('/:id', calculatorController_1.calculatorController.readOne);
        this.router.post('/', calculatorController_1.calculatorController.create);
        this.router.put('/:id', calculatorController_1.calculatorController.update);
        this.router.delete('/:id', calculatorController_1.calculatorController.delete);
    }
}
const calculatorRoutes = new CalculatorRoutes();
exports.default = calculatorRoutes.router;
