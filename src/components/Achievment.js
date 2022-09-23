import React from 'react';
import CardItem from './element/CardItem';
import ReviewCard from './ReviewCard';

const Achievment = () => {
  return (
    <div className="hidden sm:flex justify-space-between">
      <ReviewCard />
      <CardItem />
    </div>
  );
};

export default Achievment;
