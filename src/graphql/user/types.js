const bcrypt = require('bcryptjs');
const {
  extendType,
  nonNull,
  objectType,
  stringArg,
} = require('nexus');

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.password();
  },
});

const addUserQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
  },
});

const addUserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        name: nonNull(stringArg()),
        email: stringArg(),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { name, email, password }, ctx) => {
        const passwordCrypt = await bcrypt.hash(password, 10);
        return ctx.prisma.user.create({
          data: {
            name,
            email,
            password: passwordCrypt,
          },
        });
      },
    });
  },
});

module.exports = { User, addUserMutations, addUserQueries };
