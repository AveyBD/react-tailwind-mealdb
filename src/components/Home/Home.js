import React from "react";
import MealCategory from "../MealCategory/MealCategory";

const Home = () => {
  return (
    <div className="bg-white pt-6">
      <h4 className="text-center text-mono">Fantastic In Town</h4>
      <h2 className="text-center text-orange-600 font-bold text-3xl">
        Have a look ar our Food Category!
      </h2>
      <MealCategory></MealCategory>
    </div>
  );
};

export default Home;
