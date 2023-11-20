// Importing packages
import { Schema, model } from 'mongoose';

// Importing interfaces
import { IUserReview } from '../interfaces/models.interface';

const schema = new Schema<IUserReview>(
  {
    bookId: {
      type: String,
      required: true
    },
    userId: { type: String, required: true },
    userReview: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<IUserReview>('reviews', schema);
