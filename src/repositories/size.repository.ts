import {DefaultCrudRepository} from '@loopback/repository';
import {Size, SizeRelations} from '../models';
import {SizeDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SizeRepository extends DefaultCrudRepository<
  Size,
  typeof Size.prototype.id,
  SizeRelations
> {
  constructor(
    @inject('datasources.Size') dataSource: SizeDataSource,
  ) {
    super(Size, dataSource);
  }
}
