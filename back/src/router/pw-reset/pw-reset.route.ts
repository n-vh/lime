import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { MailService } from '~/services';
import { MailVerifyType } from '~/shared/enums';
import { MailVerifyController, UserController } from '~/controllers';
import {
  PasswordResetRouteSchema,
  PasswordResetVerifyRouteSchema,
} from './pw-reset.schema';
import { hashPassword } from '~/utils/password';

type PasswordResetRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email'>;
}>;

type PasswordResetVerifyRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'password'> & { token: string; userId: string };
}>;

export const passwordResetRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/password-reset',
    method: 'POST',
    schema: PasswordResetRouteSchema,
    handler: async (req: PasswordResetRouteRequest, rep) => {
      try {
        const user = await UserController.findOne({
          email: req.body.email.toLowerCase(),
        });

        // sends an email with a token
        const service = new MailService(app);
        const token = await service.sendPasswordReset(user);

        // save the token in the database
        await MailVerifyController.create({
          token,
          type: MailVerifyType.PASSWORD_RESET,
        });
      } catch (e) {
        console.error(e);
      }

      rep.send({
        status: 200,
        message: 'PASSWORD_TOKEN_SENT',
      });
    },
  });

  app.route({
    url: '/password-reset/verify',
    method: 'POST',
    schema: PasswordResetVerifyRouteSchema,
    handler: async (req: PasswordResetVerifyRouteRequest, rep) => {
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

        // update the user password
        // throws error if user is not found
        await UserController.updateOne(user._id, {
          password: await hashPassword(req.body.password),
        });

        rep.send({
          status: 200,
          message: 'PASSWORD_RESET_SUCCESS',
        });
      } catch (e) {
        rep.send({
          status: 400,
          message: e.message,
        });
      }
    },
  });

  next();
};
