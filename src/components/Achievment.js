import React from 'react';
import CardItem from './CardItem';
import ReviewCard from './ReviewCard';

const Achievment = () => {
  return (
    <div className="hidden sm:flex justify-space-between" id="Achievment">
      <ReviewCard />
      <CardItem />
    </div>
  );
};

export default Achievment;
