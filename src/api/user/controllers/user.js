"use strict";

/**
 * A set of functions called "actions" for `user`
 */
const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController(
  "api::user.user",
  ({ strapi }) => ({
    find: async (ctx, next) => {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },

    create: async (ctx, next) => {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },

    update: async (ctx, next) => {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },

    delete: async (ctx, next) => {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);

// module.exports = {
//   getAll: async (ctx, next) => {
//     try {
//       ctx.body = "ok";
//     } catch (err) {
//       ctx.body = err;
//     }
//   },

//   create: async (ctx, next) => {
//     try {
//       strapi
//     } catch (err) {
//       ctx.body = err;
//     }
//   },

//   update: async (ctx, next) => {
//     try {
//       ctx.body = "ok";
//     } catch (err) {
//       ctx.body = err;
//     }
//   },

//   destroy: async (ctx, next) => {
//     try {
//       ctx.body = "ok";
//     } catch (err) {
//       ctx.body = err;
//     }
//   },
// };
