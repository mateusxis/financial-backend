const path = require('path');
const { makeSchema } = require('nexus');
const { nexusPrisma } = require('nexus-plugin-prisma');

const { addCategoryMutations, addCategoryQueries, Category } = require('./category/types');
const { addClassMutations, addClassQueries, Class } = require('./class/types');
const { addMethodPaymentMutations, addMethodPaymentQueries, MethodPayment } = require('./methodPayment/types');
const { addOriginMutations, addOriginQueries, Origin } = require('./origin/types');
const { addSectorMutations, addSectorQueries, Sector } = require('./sector/types');
const { addSubcategoryMutations, addSubcategoryQueries, Subcategory } = require('./subcategory/types');
const { addUserMutations, addUserQueries, User } = require('./user/types');

const schema = makeSchema({
  types: [
    addCategoryMutations, addCategoryQueries, Category,
    addClassMutations, addClassQueries, Class,
    addMethodPaymentMutations, addMethodPaymentQueries, MethodPayment,
    addOriginMutations, addOriginQueries, Origin,
    addSectorMutations, addSectorQueries, Sector,
    addSubcategoryMutations, addSubcategoryQueries, Subcategory,
    addUserMutations, addUserQueries, User,
  ],
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
