const {
  extendType, nonNull, objectType, intArg,
} = require('nexus');

const Class = objectType({
  name: 'Class',
  definition(t) {
    t.model.id();
    t.model.category();
    t.model.categoryId();
    t.model.subcategory();
    t.model.subcategoryId();
    t.model.createdAt();
  },
});

const addClassQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class();
    t.crud.classes();
  },
});

const addClassMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createClass', {
      type: 'Class',
      args: {
        categoryId: nonNull(intArg()),
        subcategoryId: nonNull(intArg()),
      },
      resolve: async (_, { categoryId, subcategoryId }, ctx) =>
        ctx.prisma.class.create({
          data: {
            categoryId,
            subcategoryId,
          },
        }),
    });
  },
});

module.exports = {
  Class,
  addClassQueries,
  addClassMutations,
};
