const {
  extendType, nonNull, objectType, stringArg,
} = require('nexus');

const Sector = objectType({
  name: 'Sector',
  definition(t) {
    t.model.id();
    t.model.sector();
    t.model.createdAt();
  },
});

const addSectorQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.sector();
    t.crud.sectors();
  },
});

const addSectorMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createSector', {
      type: 'Sector',
      args: {
        sector: nonNull(stringArg()),
      },
      resolve: async (_, { sector }, ctx) =>
        ctx.prisma.sector.create({
          data: {
            sector,
          },
        }),
    });
  },
});

module.exports = {
  Sector,
  addSectorQueries,
  addSectorMutations,
};
