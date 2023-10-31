import React from 'react';

import { IBookCard } from '../../../types/props.type';

const BookCard: React.FC<IBookCard> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default BookCard;
