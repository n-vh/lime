import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { MailVerifyController, UserController } from '~/controllers';
import { SignInRouteSchema, SignUpRouteSchema } from './auth.schema';
import { comparePassword, hashPassword } from '~/utils/password';
import { MailVerifyType } from '~/shared/enums';

type SignUpRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'username' | 'email' | 'password'>;
}>;

type SignUpRouteVerifyRequest = FastifyRequest<{
  Body: { token: string };
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
          password: await hashPassword(req.body.password),
        });

        // when the user is created, send a Bearer token
        rep.send({
          token: app.jwt.sign({ payload: user.toJSON() }, { expiresIn: '7d' }),

  app.route({
    url: '/signup/verify',
    method: 'POST',
    handler: async (req: SignUpRouteVerifyRequest, rep) => {
      try {
        // decode the token
        const token = app.jwt.verify(req.body.token);
        const user = token['payload'];

        // check if token is expired
        const dateNow = Math.floor(Date.now() / 1000);
        if (dateNow >= token['exp']) {
          throw new Error('TOKEN_EXPIRED');
        }

        // delete the mail verify token
        // throws error if token is not found
        await MailVerifyController.deleteOne({
          token: req.body.token,
        });

        // create the user
        // throws error if user is not found
        await UserController.create({
          ...user,
          password: await hashPassword(user.password),
        });

        rep.send({
          status: 200,
          message: 'SIGNUP_SUCCESS',
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

        const isPasswordValid = await comparePassword(req.body.password, user.password);

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
