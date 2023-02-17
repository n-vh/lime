import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import bcrypt from 'bcrypt-ts';
import { UserController } from '~/controllers';
import { SignInRouteSchema, SignUpRouteSchema } from './auth.schema';

type SignUpRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'username' | 'email' | 'password'>;
}>;

type SignInRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email' | 'password'>;
}>;

export const authRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/signup',
    method: 'POST',
    schema: SignUpRouteSchema,
    handler: async (req: SignUpRouteRequest, rep) => {
      try {
        // if the user already exists, throw an error
        const user = await UserController.create({
          ...req.body,
          password: await bcrypt.hash(req.body.password, 10),
        });

        // when the user is created, send a Bearer token
        rep.send({
          token: app.jwt.sign({ payload: user.toJSON() }, { expiresIn: '7d' }),
        });
      } catch (e) {
        rep.status(400).send({
          status: 400,
          error: e.message,
        });
      }
    },
  });

  app.route({
    url: '/signin',
    method: 'POST',
    schema: SignInRouteSchema,
    handler: async (req: SignInRouteRequest, rep) => {
      try {
        // if the user doesn't exist, throw an error
        const user = await UserController.findOne({
          email: req.body.email.toLowerCase(),
        });

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        // if the hashed password is invalid, throw an error
        if (!isPasswordValid) {
          throw new Error('INVALID_CREDENTIALS');
        }

        // if the user exists, send a Bearer token
        rep.send({
          token: app.jwt.sign({ payload: user.toJSON() }, { expiresIn: '7d' }),
        });
      } catch (e) {
        rep.status(400).send({
          status: 400,
          error: e.message,
        });
      }
    },
  });

  next();
};
