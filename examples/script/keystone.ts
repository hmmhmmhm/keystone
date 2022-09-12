import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';
import { TypeInfo } from '.keystone/types';

export default config<TypeInfo>({
  db: {
    provider: 'sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',
  },
  lists: {
    Post: list({
      access: allowAll,
      fields: {
        title: text(),
      },
    }),
  },
});
