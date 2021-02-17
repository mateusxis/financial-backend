const {
  extendType, nonNull, objectType, intArg, stringArg, floatArg,
} = require('nexus');

const Credit = objectType({
  name: 'Credit',
  definition(t) {
    t.model.id();
    t.model.datePayment();
    t.model.description();
    t.model.value();
    t.model.origin();
    t.model.user();
    t.model.originId();
    t.model.userId();
    t.model.createdAt();
  },
});

const addCreditQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.credit();
    t.crud.credits();
  },
});

const addCreditMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createCredit', {
      type: 'Credit',
      args: {
        description: nonNull(stringArg()),
        value: nonNull(floatArg()),
        datePayment: stringArg(),
        originId: intArg(),
        userId: nonNull(intArg()),
      },
      resolve: async (_, {
        description, value, datePayment, originId, userId,
      }, ctx) =>
        ctx.prisma.class.create({
          data: {
            description,
            value,
            datePayment,
            originId,
            userId,
          },
        }),
    });
  },
});

module.exports = {
  Credit,
  addCreditQueries,
  addCreditMutations,
};
