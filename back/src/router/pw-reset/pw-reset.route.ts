import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { UserController } from '~/controllers';
import { PasswordResetRouterSchema } from './pw-reset.schema';
import { PasswordResetModel } from '~/database/models';
import { PasswordResetService } from '~/services/pw-reset.service';

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

        const service = new PasswordResetService(app);
        const token = await service.send(user);

        PasswordResetModel.create({
          token,
          userId: user._id,
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
