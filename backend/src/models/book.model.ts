// Importing packages
import { Schema, model } from 'mongoose';

// Importing interfaces
import { IBook } from '../interfaces/models.interface';

const schema = new Schema<IBook>({
  bookId: {
    type: String,
    required: true
  },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  oneLineStory: { type: String, required: true },
  category: { type: String, required: true },
  review: { type: String, resquired: true }
});

export default model<IBook>('books', schema);
