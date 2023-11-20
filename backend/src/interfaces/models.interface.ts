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


interface IReview {
  userId: string;
  userName: string;
  userReview: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IUserReview {
  bookId: string;
  reviews: IReview[];
  createdAt?: Date;
  updatedAt?: Date;
}

export { IUser, IBook, IUserReview, IReview };


