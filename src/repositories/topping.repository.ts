import {DefaultCrudRepository} from '@loopback/repository';
import {Topping, ToppingRelations} from '../models';
import {ToppingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ToppingRepository extends DefaultCrudRepository<
  Topping,
  typeof Topping.prototype.id,
  ToppingRelations
> {
  constructor(
    @inject('datasources.Topping') dataSource: ToppingDataSource,
  ) {
    super(Topping, dataSource);
  }
}
