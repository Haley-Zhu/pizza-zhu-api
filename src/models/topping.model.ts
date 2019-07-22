import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Topping extends Entity {
  @property({
    type: 'string',
    id: true,
    required: false,
  })
  id: string;

  @property({
    type: 'string',
  })
  toppingName?: string;

  @property({
    type: 'string',
  })
  toppingImg?: string;

  @property({
    type: 'number',
  })
  toppingPrice?: number;


  constructor(data?: Partial<Topping>) {
    super(data);
  }
}

export interface ToppingRelations {
  // describe navigational properties here
}

export type ToppingWithRelations = Topping & ToppingRelations;
