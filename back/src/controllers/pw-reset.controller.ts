import type { IPasswordReset } from '~/shared/types';
import { PasswordResetModel } from '~/database/models';

export const PasswordResetController = {
  async create(data: IPasswordReset) {
    const doc = await PasswordResetModel.findOne({
      userId: data.userId,
    });

    if (doc) {
      throw new Error('TOKEN_ALREADY_EXISTS');
    }

    return await PasswordResetModel.create(data);
  },
};
