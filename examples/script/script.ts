import { getContext } from '@keystone-6/core/system';
import config from './keystone';
import * as PrismaModule from '.prisma/client';

async function main() {
  const { connect, context, disconnect } = getContext(config, PrismaModule);
  // if you don't call connect, db.onConnect will not be run
  // but Prisma will automatically connect when Prisma is used
  await connect();
  for (const _ of Array.from({ length: 100 })) {
    await context.db.Post.createOne({ data: { title: 'Hello World' } });
  }
  await disconnect();
}

main();
