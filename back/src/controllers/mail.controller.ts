import type { IMailVerify } from '~/shared/types';
import { MailVerifyModel } from '~/database/models';

export const MailVerifyController = {
  async create(data: IMailVerify) {
    const doc = await MailVerifyModel.findOne({
      userId: data.userId,
    });

    if (doc) {
      throw new Error('TOKEN_ALREADY_EXISTS');
    }

    return await MailVerifyModel.create(data);
  },
};
