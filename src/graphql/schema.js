const path = require('path');
const { makeSchema } = require('nexus');
const { nexusPrisma } = require('nexus-plugin-prisma');

const { addUserMutations, addUserQueries, User } = require('./user/types');

const schema = makeSchema({
  types: [addUserMutations, addUserQueries, User],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: path.join(__dirname, '/../schema.graphql'),
    typegen: path.join(__dirname, '/generated/nexus.ts'),
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});

module.exports = { schema };
