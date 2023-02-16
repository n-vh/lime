import type { IPasswordReset } from '~/shared/types';
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PasswordResetModel = model<IPasswordReset>('PasswordReset', schema);
