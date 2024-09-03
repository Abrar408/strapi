"use strict";

/**
 * A set of functions called "actions" for `user`
 */
const { factories } = require("@strapi/strapi");
const RESPONSE = require("../../../utils/response");

module.exports = factories.createCoreController(
  "api::user.user",
  ({ strapi }) => ({
    find: async (ctx, next) => {
      try {
        const result = await strapi.service("api::user.user").findMany();

        ctx.send(RESPONSE.ok("All users get successful", result));
      } catch (err) {
        ctx.body = err;
      }
    },

    create: async (ctx, next) => {
      try {
        const { body } = ctx.request;

        const result = await strapi.service("api::user.user").create(body);

        ctx.send({ user: result });
      } catch (err) {
        ctx.body = err;
      }
    },

    update: async (ctx, next) => {
      try {
        const { body, params } = ctx.request;

        const result = await strapi
          .service("api::user.user")
          .update(params.id, body);

        ctx.send({ user: result });
      } catch (err) {
        ctx.body = err;
      }
    },

    delete: async (ctx, next) => {
      try {
        const { params } = ctx.request;

        const result = await strapi.service("api::user.user").delete(params.id);

        ctx.send({ user: result });
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
