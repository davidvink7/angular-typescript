// src/items/item.interface.ts

export interface BaseItem {
    name: string;
    color: string;
    price: number;
  }
  
  export interface Item extends BaseItem {
    id: number;
  }