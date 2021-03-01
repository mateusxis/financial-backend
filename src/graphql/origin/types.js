const { extendType, nonNull, objectType, stringArg } = require('nexus');

const Origin = objectType({
  name: 'Origin',
  definition(t) {
    t.model.id();
    t.model.origin();
    t.model.createdAt();
  },
});

const addOriginQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.origin();
    t.crud.origins();
  },
});

const addOriginMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOrigin', {
      type: 'Origin',
      args: {
        origin: nonNull(stringArg()),
      },
      resolve: async (_, { origin }, ctx) =>
        ctx.prisma.origin.create({
          data: {
            origin,
          },
        }),
    });
  },
});

module.exports = {
  Origin,
  addOriginQueries,
  addOriginMutations,
};
