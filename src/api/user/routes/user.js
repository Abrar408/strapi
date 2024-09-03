/**
 * user router
 */

const { factories } = require("@strapi/strapi");
const validation = require("../../../middleware/validation");
const { userCreateSchema, userUpdateSchema } = require("../validations/user");

module.exports = factories.createCoreRouter("api::user.user", {
  config: {
    create: {
      middlewares: [validation(userCreateSchema)],
    },
    update: {
      middlewares: [validation(userUpdateSchema)],
    },
  },
});
