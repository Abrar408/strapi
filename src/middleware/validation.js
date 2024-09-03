// src/middleware/validation.js

module.exports = (schema) => {
  return async (ctx, next) => {
    const { error } = schema.validate(
      {
        query: ctx.request.query,
        params: ctx.request.params,
        body: ctx.request.body,
      },
      { abortEarly: false, convert: true, stripUnknown: true }
    );
    if (error) {
      return ctx.badRequest(...error.details.map((err) => err.message));
    }
    await next();
  };
};
