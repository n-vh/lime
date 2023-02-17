import type { IMailVerify } from '~/shared/types';
import { model, Schema } from 'mongoose';

const schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const MailVerifyModel = model<IMailVerify>('MailVerify', schema);
