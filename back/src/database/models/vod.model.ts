import { model, Schema } from 'mongoose';

const schema = new Schema({
  streamer: String,
  streamer_ref: {
    type: Schema.Types.ObjectId,
    ref: 'Streamer',
  },
  id_video: String,
  title: String,
  date: String,
  language: String,
  thumbnail: String,
  tag: String,
  views: Number,
  duration: String,
  likes: Number,
});

export const VodModel = model('Vod', schema);
