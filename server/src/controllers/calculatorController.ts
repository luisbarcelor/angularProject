import {Request, Response} from 'express';
import pool from "../dao/databaseManager";
class CalculatorController {
  public index (req: Request, res: Response) {
    pool.query('SELECT * FROM operaciones;');
    res.send("Calculator");
  }
}

export const calculatorController = new CalculatorController();
