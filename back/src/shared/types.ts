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

export interface IStreamer {
  _id?: ObjectId;
  name: string;
  twitch_id: string;
  description: string;
  language: string;
  tags: string[];
  profile_picture: string;
  socials: {
    twitch: {
      url: string;
      followers: string;
    };
    youtube: {
      url: string;
      followers: string;
    };
    twitter: {
      url: string;
    };
    instagram: {
      url: string;
    };
  };
  vods: ObjectId[];
}

export interface IVod {
  streamer: String;
  streamer_ref: ObjectId;
  id_video: String;
  title: String;
  description: String;
  date: String;
  language: String;
  thumbnail: String;
  tag: String;
  category: String;
  views: Number;
  duration: String;
  likes: Number;
}
