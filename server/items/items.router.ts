import express, { Request, Response } from 'express';
import * as ItemService from './items.service';
import { Item } from './item.interface';

export const itemsRouter = express.Router();

itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
      let items: Item[] = await ItemService.findAll();

      console.log(items);
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
});

itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
      const startId:number = req.body.startId-1;
      const endId:number = req.body.endId;
  
      const items = await ItemService.rangeItems(startId, endId);
      
      console.log(items);
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
});