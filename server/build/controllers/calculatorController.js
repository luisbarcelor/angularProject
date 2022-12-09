"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorController = void 0;
const databaseManager_1 = __importDefault(require("../dao/databaseManager"));
class CalculatorController {
    async read(req, res) {
        const query = await databaseManager_1.default.query('SELECT * FROM operaciones;');
        res.json(query);
    }
    async readOne(req, res) {
        const id = req.params.id;
        const query = await databaseManager_1.default.query('SELECT * FROM operaciones WHERE id=?', [id]);
        if (query.length > 0) {
            res.json(query[0]);
        }
        else {
            res.status(404).json({ msg: 'OPERATION DOES NOT EXIST' });
        }
    }
    async create(req, res) {
        const operation = req.body;
        await databaseManager_1.default.query('INSERT INTO operaciones SET ?', [operation]);
        res.json({ msg: 'OPERATION SAVED' });
    }
    async update(req, res) {
        const id = req.params.id;
        const operation = req.body;
        await databaseManager_1.default.query('UPDATE operaciones SET ? WHERE id=?', [operation, id]);
        res.json({ msg: 'OPERATION UPDATED' });
    }
    async delete(req, res) {
        const id = req.params.id;
        await databaseManager_1.default.query('DELETE FROM operaciones WHERE id=?', [id]);
        res.json({ msg: 'OPERATION DELETED' });
    }
}
exports.calculatorController = new CalculatorController();
