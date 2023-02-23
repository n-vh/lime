import type { FastifyServerOptions } from 'fastify';
import jwt from '@fastify/jwt';
import cors from '@fastify/cors';
import { fastify } from 'fastify';
import { Database } from '~/database';
import { mail } from '~/plugins/mail.plugin';
import { authRouter, passwordResetRouter, userRouter } from '~/router';
import { streamerRouter } from './router/streamer/streamer.route';
import { vodRouter } from './router/vod/vod.route';

const initServer = async (opts?: FastifyServerOptions) => {
  const app = fastify(opts);

  await Database.connect();

  app.register(cors, {
    origin: '*',
  });

  app.register(jwt, {
    secret: import.meta.env.VITE_JWT_SECRET,
  });

  app.register(mail, {
    username: 'api',
    key: import.meta.env.VITE_MAILGUN_KEY,
    url: import.meta.env.VITE_MAILGUN_URL,
  });

  app.register(authRouter);
  app.register(passwordResetRouter);
  app.register(streamerRouter);
  app.register(userRouter);
  app.register(vodRouter);

  if (import.meta.env.PROD) {
    try {
      const PORT = 6543;
      app.listen({ port: PORT });
      console.log('Listening on port', PORT);
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  return app;
};

export const viteNodeApp = initServer();
