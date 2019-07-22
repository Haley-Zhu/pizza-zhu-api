import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Size extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  sizeStyle?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'number',
  })
  price?: number;


  constructor(data?: Partial<Size>) {
    super(data);
  }
}

export interface SizeRelations {
  // describe navigational properties here
}

export type SizeWithRelations = Size & SizeRelations;
