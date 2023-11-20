// Importing packages
import { Schema, model } from 'mongoose';

// Importing interfaces
import { IUserReview, IReview } from '../interfaces/models.interface';

const ReviewSchema = new Schema<IReview>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userReview: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

const schema = new Schema<IUserReview>(
  {
    bookId: { type: String, required: true, unique: true },
    reviews: [ReviewSchema]
  },
  { timestamps: true }
);

export default model<IUserReview>('reviews', schema);

