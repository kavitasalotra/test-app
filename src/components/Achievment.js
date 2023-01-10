import React from 'react';
import CardItem from './CardItem';
import ReviewCard from './ReviewCard';

const Achievement = () => {
  return (
    <div className="container mx-auto">
      <div className="flex md:justify-evenly" id="Achievement">
        <ReviewCard />
        <CardItem />
      </div>
    </div>
  );
};

export default Achievement;
