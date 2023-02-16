import type { FastifyPluginCallback, FastifyRequest } from 'fastify';

export const passwordResetRouter: FastifyPluginCallback = (app, opts, next) => {

  next();
};
