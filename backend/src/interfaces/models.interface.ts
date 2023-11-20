interface IUser {
  userId?: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  googleId?: string;
  profilePicture?: string;
  isManualAuth?: boolean;
  createdAt?: Date;
  updateAt?: Date;
}

interface IBook {
  bookId?: string;
  title: string;
  author: string;
  category: string;
  oneLineStory: string;
  review: string;
  imageUrl: string;
}

interface IUserReview {
  bookId: string;
  userId: string;
  userReview: string;
  createdAt?: Date;
  updateAt?: Date;
}

export { IUser, IBook, IUserReview };
