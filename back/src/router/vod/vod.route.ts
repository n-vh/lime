import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import { VodSchema } from './vod.schema';
import { VodController } from '~/controllers/vod.controller';
import type { IVod } from '~/shared/types';
import { VodModel } from '~/database/models/vod.model';
import { Tags } from '~/shared/enums';

type VodRouteRequest = FastifyRequest<{
  Params: {
    param: string;
  };
}>;

export const vodRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/vods',
    method: 'GET',
    handler: async (req, rep) => {
      try {
        const vodsAll = await VodController.findAll();
        rep.send({
          status: 200,
          data: vodsAll,
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
    url: '/vods/streamer/:param',
    method: 'GET',
    schema: VodSchema,
    handler: async (req: VodRouteRequest, rep) => {
      try {
        const vod = await VodController.findByStreamer(req.params.param);

        rep.send({
          status: 200,
          data: vod,
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
    url: '/vods/tag/:param',
    method: 'GET',
    schema: VodSchema,
    handler: async (req: VodRouteRequest, rep) => {
      try {
        const vod = req.params.param as Tags;
        if (!Object.values(Tags).includes(vod)) {
          throw new Error('INVALID_TAG');
        }

        const vods = await VodController.findByTag(vod);

        rep.send({
          status: 200,
          data: vods,
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
