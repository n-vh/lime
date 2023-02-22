import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import { VodSchema } from './vod.schema';
import { VodController } from '~/controllers/vod.controller';
import type { IVod } from '~/shared/types';
import { VodModel } from '~/database/models/vod.model';
import { Categories, Languages, Tags } from '~/shared/enums';

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

  app.route({
    url: '/vods/language/:param',
    method: 'GET',
    schema: VodSchema,
    handler: async (req: VodRouteRequest, rep) => {
      try {
        const vod = req.params.param as Languages;
        if (!Object.values(Languages).includes(vod)) {
          throw new Error('INVALID_LANGUAGE');
        }

        const vods = await VodController.findByLanguage(req.params.param);

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

  app.route({
    url: '/vods/category/:param',
    method: 'GET',
    schema: VodSchema,
    handler: async (req: VodRouteRequest, rep) => {
      try {
        const vod = req.params.param as Categories;
        if (!Object.values(Categories).includes(vod)) {
          throw new Error('INVALID_CATEGORY');
        }

        const vods = await VodController.findByCategory(req.params.param);

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
