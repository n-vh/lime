import { ObjectId } from 'mongodb';
import { MailVerifyType } from './enums';

export interface IUser {
  _id?: ObjectId;
  username: string;
  password: string;
  email: string;
}

export interface IMailVerify {
  _id?: ObjectId;
  token: string;
  type: MailVerifyType;
}
