import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import type { IUser } from '~/shared/types';
import { UserController } from '~/controllers';
import { CheckEmailRouteSchema } from './user.schema';

type CheckEmailRouteRequest = FastifyRequest<{
  Body: Pick<IUser, 'email'>;
}>;

export const userRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/check',
    method: 'POST',
    schema: CheckEmailRouteSchema,
    handler: async (req: CheckEmailRouteRequest, rep) => {
      try {
        // if the user exists send true
        // else throw an error and send false
        await UserController.findOne({
          email: req.body.email.toLowerCase(),
        });

        rep.send(true);
      } catch (e) {
        rep.send(false);
      }
    },
  });

  next();
};
