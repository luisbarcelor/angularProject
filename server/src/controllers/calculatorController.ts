import {Request, Response} from 'express';
import pool from "../dao/databaseManager";
class CalculatorController {
  public async read(req: Request, res: Response):Promise<void> {
    const query = await pool.query('SELECT * FROM operaciones;');
    res.json(query);
  }

  public async readOne(req: Request, res: Response):Promise<void> {
    const id = req.params.id;
    const query = await pool.query('SELECT * FROM operaciones WHERE id=?', [id]);
    if (query.length > 0) {
      res.json(query[0]);
    } else {
      res.status(404).json({msg: 'OPERATION DOES NOT EXIST'});
    }
  }

  public async create(req: Request, res: Response):Promise<void> {
    const operation = req.body;
    await pool.query('INSERT INTO operaciones SET ?', [operation]);
    res.json({msg: 'OPERATION SAVED'});
  }

  public async update(req: Request, res: Response):Promise<void> {
    const id = req.params.id;
    const operation = req.body;
    await pool.query('UPDATE operaciones SET ? WHERE id=?', [operation, id]);
    res.json({msg: 'OPERATION UPDATED'});
  }

  public async delete(req: Request, res: Response):Promise<void> {
    const id = req.params.id;
    await pool.query('DELETE FROM operaciones WHERE id=?', [id]);
    res.json({msg: 'OPERATION DELETED'});
  }
}

export const calculatorController = new CalculatorController();
