import React, { useState } from 'react';
import Team from './Team';
import Button from './element/Button';

const App = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Team?.team?.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Team?.team?.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <h1 className="">Food Filtering App</h1>
          <Button
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Team team={team} key={team.id} />
        </div>
      </div>
    </>
  );
};

export default App;
