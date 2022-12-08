"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorController = void 0;
const databaseManager_1 = __importDefault(require("../dao/databaseManager"));
class CalculatorController {
    index(req, res) {
        databaseManager_1.default.query('SELECT * FROM operaciones;');
        res.send("Calculator");
    }
}
exports.calculatorController = new CalculatorController();
