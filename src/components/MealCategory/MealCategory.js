import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import CategoryView from "../CategoryView/CategoryView";
import "react-loading-skeleton/dist/skeleton.css";
import CatSkeleton from "../CatSkeleton/CatSkeleton";

const MealCategory = () => {
  const [cat, setCat] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCat(data.categories);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {isLoading ? (
        <>
          <CatSkeleton></CatSkeleton> <CatSkeleton></CatSkeleton>
          <CatSkeleton></CatSkeleton> <CatSkeleton></CatSkeleton>
        </>
      ) : (
        cat.map((sCat) => (
          <CategoryView key={sCat.idCategory} cat={sCat}></CategoryView>
        ))
      )}
    </div>
  );
};

export default MealCategory;
