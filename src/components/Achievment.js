import React from 'react';
import CardItem from './CardItem';
import ReviewCard from './ReviewCard';

const Achievment = () => {
  return (
    <div
      className="flex-wrap sm:flex  sm:justify-space-between"
      id="Achievment"
    >
      <ReviewCard />
      <CardItem />
    </div>
  );
};

export default Achievment;
