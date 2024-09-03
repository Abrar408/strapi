"use strict";

/**
 * user service
 */
const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreService(
  "api::user.user",
  ({ strapi }) => ({
    async findMany() {
      const users = await strapi.query("api::user.user").findMany({});

      return users;
    },

    async create(payload) {
      const user = await strapi.query("api::user.user").create({
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
        },
      });

      return user;
    },

    async update(id, payload) {
      const user = await strapi.query("api::user.user").update({
        where: {
          id: id,
        },
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
        },
      });

      return user;
    },

    async delete(id) {
      const user = await strapi.query("api::user.user").delete({
        where: {
          id: id,
        },
      });

      return user;
    },
  })
);
