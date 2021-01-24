const {
  extendType, nonNull, objectType, stringArg,
} = require('nexus');

const MethodPayment = objectType({
  name: 'MethodPayment',
  definition(t) {
    t.model.id();
    t.model.methodPayment();
    t.model.createdAt();
  },
});

const addMethodPaymentQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.methodPayment();
    t.crud.methodPayments();
  },
});

const addMethodPaymentMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createMethodPayment', {
      type: 'MethodPayment',
      args: {
        methodPayment: nonNull(stringArg()),
      },
      resolve: async (_, { methodPayment }, ctx) =>
        ctx.prisma.methodPayment.create({
          data: {
            methodPayment,
          },
        }),
    });
  },
});

module.exports = { MethodPayment, addMethodPaymentQueries, addMethodPaymentMutations };
