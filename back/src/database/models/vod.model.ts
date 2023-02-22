import { model, Schema } from 'mongoose';

const schema = new Schema({
  streamer: String,
  streamer_ref: {
    type: Schema.Types.ObjectId,
    ref: 'Streamer',
  },
  title: String,
  thumbnail: String,
  tag: String,
  views: Number,
  duration: String,
  likes: Number,
});

export const VodModel = model('Vod', schema);
