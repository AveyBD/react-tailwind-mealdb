import React, { useEffect, useState } from "react";
import CategoryView from "../CategoryView/CategoryView";

const MealCategory = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCat(data.categories));
  }, []);

  return(
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {
            cat.map(sCat => <CategoryView key={sCat.idCategory} cat={sCat}></CategoryView>)
        }
    </div>
  );
};

export default MealCategory;
