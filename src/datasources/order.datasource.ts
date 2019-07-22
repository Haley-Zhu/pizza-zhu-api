import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './order.datasource.json';

export class OrderDataSource extends juggler.DataSource {
  static dataSourceName = 'Order';

  constructor(
    @inject('datasources.config.Order', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
