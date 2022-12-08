import {Request, Response} from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.json(
      {
        msg: 'THE API IS AT /api/calculator',
        author: 'Luis Barcelo'
      }
      );
  }
}

export const indexController = new IndexController();
