import type { FilterQuery } from 'mongoose';
import { StreamerModel } from '~/database/models/streamer.model';
import type { IStreamer } from '~/shared/types';

export const StreamerController = {
  async findAll() {
    const doc = await StreamerModel.find();

    if (!doc) {
      throw new Error('STREAMER_NOT_FOUND');
    }

    return doc;
  },

  async findByName(name: string) {
    const doc = await StreamerModel.findOne({
      name,
    });

    if (!doc) {
      throw new Error('STREAMER_NOT_FOUND');
    }

    return doc;
  },

  async findByLanguage(language: string) {
    const doc = await StreamerModel.find({
      language,
    });

    if (!doc) {
      throw new Error('STREAMER_NOT_FOUND');
    }

    return doc;
  },

  async findByTag(tag: string) {
    const doc = await StreamerModel.find({
      tags: tag,
    });

    if (!doc) {
      throw new Error('STREAMER_NOT_FOUND');
    }

    return doc;
  },
};
