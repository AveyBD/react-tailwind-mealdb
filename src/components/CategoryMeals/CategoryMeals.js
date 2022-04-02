import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meal from "../Meal/Meal";
import CatSkeleton from "../CatSkeleton/CatSkeleton";


const CategoryMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    setTimeout(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMeals(data.meals));
        setIsLoading(false);
    }, 1000);
  }, []);
  console.log(meals);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      { isLoading ? <><CatSkeleton></CatSkeleton> <CatSkeleton></CatSkeleton> <CatSkeleton></CatSkeleton> <CatSkeleton></CatSkeleton>  </>
      :
      meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default CategoryMeals;
