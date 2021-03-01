const { extendType, nonNull, objectType, stringArg } = require('nexus');

const Subcategory = objectType({
  name: 'Subcategory',
  definition(t) {
    t.model.id();
    t.model.subcategory();
    t.model.createdAt();
  },
});

const addSubcategoryQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.subcategory();
    t.crud.subcategories();
  },
});

const addSubcategoryMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createSubcategory', {
      type: 'Subcategory',
      args: {
        subcategory: nonNull(stringArg()),
      },
      resolve: async (_, { subcategory }, ctx) =>
        ctx.prisma.subcategory.create({
          data: {
            subcategory,
          },
        }),
    });
  },
});

module.exports = {
  Subcategory,
  addSubcategoryQueries,
  addSubcategoryMutations,
};
