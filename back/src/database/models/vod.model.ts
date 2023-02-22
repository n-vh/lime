import { model, Schema } from 'mongoose';

const schema = new Schema({
  streamer: String,
  streamer_ref: {
    type: Schema.Types.ObjectId,
    ref: 'Streamer',
  },
  id_video: String,
  title: String,
  description: String,
  date: String,
  language: String,
  thumbnail: String,
  tag: String,
  category: String,
  views: String,
  duration: String,
  likes: String,
});

export const VodModel = model('Vod', schema);
