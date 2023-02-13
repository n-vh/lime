import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export interface IUser {
  _id?: ObjectId;
  username: string;
  password: string;
  email: string;
}

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UserModel = model<IUser>('User', schema);
