import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { UserController } from '~/controllers';
import { PasswordResetRouterSchema } from './pw-reset.schema';

type PasswordResetRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email'>;
}>;

export const passwordResetRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/password-reset',
    method: 'POST',
    schema: PasswordResetRouterSchema,
    handler: async (req: PasswordResetRouteRequest, rep) => {
      try {
        const user = await UserController.findOne({
          email: req.body.email.toLowerCase(),
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
