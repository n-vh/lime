import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  twitch_id: String,
  description: String,
  language: String,
  tags: [String],
  profile_picture: String,
  socials: {
    twitch: {
      url: String,
      followers: String,
    },
    youtube: {
      url: String,
      followers: String,
    },
    twitter: {
      url: String,
    },
    instagram: {
      url: String,
    },
  },
  vods: [{ type: Schema.Types.ObjectId, ref: 'Vod' }],
});

export const StreamerModel = model('Streamer', schema);
