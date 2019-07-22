import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './size.datasource.json';

export class SizeDataSource extends juggler.DataSource {
  static dataSourceName = 'Size';

  constructor(
    @inject('datasources.config.Size', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
