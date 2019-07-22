import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './topping.datasource.json';

export class ToppingDataSource extends juggler.DataSource {
  static dataSourceName = 'Topping';

  constructor(
    @inject('datasources.config.Topping', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
