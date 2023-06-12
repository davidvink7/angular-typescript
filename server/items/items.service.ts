// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from './item.interface';
import { Items } from './items.interface';


/**
 * In-Memory Store
 */

let items: Items = {
    1: {
      id: 1,
      name: 'item 1',
      color: 'blue',
      price: 40000,
    },
    2: {
      id: 2,
      name: 'item 2',
      color: 'red',
      price: 15000,
    },
    3: {
      id: 3,
      name: 'item 3',
      color: 'black',
      price: 2000,
    },
    4: {
      id: 4,
      name: 'item 4',
      color: 'white',
      price: 300000,
    },
    5: {
      id: 5,
      name: 'item 5',
      color: 'green',
      price: 350000,
    },
  };


/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const rangeItems = async (startId: number, endId: number): Promise<Item[]> => {
  return Object.values(items).slice(startId, endId)
};
  