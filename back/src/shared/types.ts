import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  username: string;
  password: string;
  email: string;
}

export interface IPasswordReset {
  _id?: ObjectId;
  userId: string;
  token: string;
}
