import React, { useEffect, useState } from "react";

const Meals = () => {
  const [searchText, setSearchtext] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const SearchMeal = (e) => {
    setSearchtext(e.target.value);
  };
  return (
    <div>
      <div>
        <div className="flex w-3/4 mx-auto mt-6">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
            Search Meal
          </span>
          <input
            onChange={SearchMeal}
            type="text"
            name=""
            id="catSearch"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm  p-2.5"
          />
        </div>
      </div>
      <h2>Total Meals: {meals.length}</h2>
    </div>
  );
};

export default Meals;
