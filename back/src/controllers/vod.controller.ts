import type { FilterQuery } from 'mongoose';
import { VodModel } from '~/database/models/vod.model';
import type { IVod } from '~/shared/types';

export const VodController = {
  async findAll() {
    const doc = await VodModel.find();

    if (!doc) {
      throw new Error('VOD_NOT_FOUND');
    }

    return doc;
  },

  async findByStreamer(streamer: string) {
    const doc = await VodModel.find({
      streamer,
    });

    if (!doc) {
      throw new Error('VOD_NOT_FOUND');
    }

    return doc;
  },

  async findByTag(tag: string) {
    const doc = await VodModel.find({
      tag,
    });

    if (!doc) {
      throw new Error('VOD_NOT_FOUND');
    }

    return doc;
  },

  async findByLanguage(language: string) {
    const doc = await VodModel.find({
      language,
    });

    if (!doc) {
      throw new Error('VOD_NOT_FOUND');
    }

    return doc;
  },

  async findByCategory(category: string) {
    const doc = await VodModel.find({
      category,
    });

    if (!doc) {
      throw new Error('VOD_NOT_FOUND');
    }

    return doc;
  },
};
