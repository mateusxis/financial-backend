const bcrypt = require('bcrypt');
const { extendType, nonNull, objectType, stringArg } = require('nexus');

const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('email');
    t.string('createdAd');
    t.string('updatedAd');
  },
});

// const addUserQueries = extendType({
//   type: 'Query',
//   definition(t) {
//     // t.crud.user();
//     // t.crud.users();
//   },
// });

const addUserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { name, email, password }, ctx) => {
        const passwordCrypt = await bcrypt.hash(password, 12);

        const user = await ctx.models.userSchema.create({
          email,
          name,
          password: passwordCrypt,
        });

        return user;
      },
    });
  },
});

// addUserQueries
module.exports = { User, addUserMutations };
