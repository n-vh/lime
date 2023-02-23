import type { FastifyPluginCallback, FastifyRequest } from 'fastify';
import { StreamerSchema } from './streamer.schema';
import { StreamerController } from '~/controllers/streamer.controller';
import { Languages, Tags } from '~/shared/enums';
import type { IStreamer } from '~/shared/types';
import { StreamerModel } from '~/database/models/streamer.model';

type StreamerRouteRequest = FastifyRequest<{
  Params: {
    param: string;
  };
}>;

export const streamerRouter: FastifyPluginCallback = (app, opts, next) => {
  app.route({
    url: '/streamers',
    method: 'GET',
    handler: async (req, rep) => {
      try {
        const streamersAll = await StreamerController.findAll();
        rep.send({
          status: 200,
          data: streamersAll,
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
    url: '/streamers/name/:param',
    method: 'GET',
    schema: StreamerSchema,
    handler: async (req: StreamerRouteRequest, rep) => {
      try {
        const streamer = await StreamerController.findByName(req.params.param);

        rep.send({
          status: 200,
          data: streamer,
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
    url: '/streamers/language/:param',
    method: 'GET',
    schema: StreamerSchema,
    handler: async (req: StreamerRouteRequest, rep) => {
      try {
        const language = req.params.param as Languages;
        if (!Object.values(Languages).includes(language)) {
          throw new Error('INVALID_LANGUAGE');
        }

        const streamers = await StreamerController.findByLanguage(language);
        rep.send({
          status: 200,
          data: streamers,
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
    url: '/streamers/tags/:param',
    method: 'GET',
    schema: StreamerSchema,
    handler: async (req: StreamerRouteRequest, rep) => {
      try {
        const tag = req.params.param as Tags;
        if (!Object.values(Tags).includes(tag)) {
          throw new Error('INVALID_TAG');
        }

        const streamers = await StreamerController.findByTag(tag);
        rep.send({
          status: 200,
          data: streamers,
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
