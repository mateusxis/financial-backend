const { extendType, nonNull, objectType, stringArg } = require('nexus');

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id();
    t.model.category();
    t.model.createdAt();
  },
});

const addCategoryQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.category();
    t.crud.categories();
  },
});

const addCategoryMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createCategory', {
      type: 'Category',
      args: {
        category: nonNull(stringArg()),
      },
      resolve: async (_, { category }, ctx) =>
        ctx.prisma.category.create({
          data: {
            category,
          },
        }),
    });
  },
});

module.exports = {
  Category,
  addCategoryQueries,
  addCategoryMutations,
};
