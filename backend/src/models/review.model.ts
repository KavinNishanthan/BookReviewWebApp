// Importing packages
import { Schema, model } from 'mongoose';

// Importing interfaces
import { IUserReview, IReview } from '../interfaces/models.interface';

const ReviewSchema = new Schema<IReview>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userReview: { type: String, required: true }
});

const schema = new Schema<IUserReview>({
  bookId: { type: String, required: true, unique: true },
  reviews: [ReviewSchema]
});

export default model<IUserReview>('reviews', schema);

