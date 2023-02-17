import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { MailService } from '~/services';
import { MailVerifyType } from '~/shared/enums';
import { PasswordResetRouteSchema } from './pw-reset.schema';
import { MailVerifyController, UserController } from '~/controllers';

type PasswordResetRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email'>;
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

        const service = new MailService(app);
        const token = await service.sendPasswordReset(user);

        await MailVerifyController.create({
          userId: user._id.toString(),
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

  next();
};
