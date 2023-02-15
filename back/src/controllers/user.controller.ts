import type { FilterQuery } from 'mongoose';
import type { IUser } from '~/shared/types';
import { UserModel } from '~/database/models';

export const UserController = {
  async create(user: IUser) {
    const doc = await UserModel.findOne({
      email: user.email.toLowerCase(),
    });

    if (doc) {
      throw new Error('USER_ALREADY_EXISTS');
    }

    return await UserModel.create(user);
  },

  async findOne(filter: FilterQuery<IUser>) {
    const doc = await UserModel.findOne(filter);

    if (!doc) {
      throw new Error('USER_NOT_FOUND');
    }

    return doc;
  },
};
