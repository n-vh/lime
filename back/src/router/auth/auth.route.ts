import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { UserController } from '~/controllers';
import { SignInRouteSchema, SignUpRouteSchema, VerifyRouteSchema } from './auth.schema';

type SignUpRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'username' | 'email' | 'password'>;
}>;

type SignInRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email' | 'password'>;
}>;

type VerifyRouteRequest = FastifyRequest<{
  Params: Pick<IUser, 'email'>;
}>;

export const authRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/signup',
    method: 'POST',
    schema: SignUpRouteSchema,
    handler: async (req: SignUpRouteRequest, rep) => {
      try {
        // if the user already exists, throw an error
        const user = await UserController.create(req.body);

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
          email: req.body.email,
        });

        // @@@ TODO HASH PASSWORD
        if (user.password !== req.body.password) {
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

  app.route({
    url: '/verify/:email',
    method: 'GET',
    schema: VerifyRouteSchema,
    handler: async (req: VerifyRouteRequest, rep) => {
      try {
        // if the user exists send true
        // else throw an error and send false
        await UserController.findOne({
          email: req.params.email,
        });

        rep.send(true);
      } catch (e) {
        rep.send(false);
      }
    },
  });

  next();
};
