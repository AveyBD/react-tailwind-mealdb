import React, { useEffect, useState } from "react";

const MealCategory = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const url = `https:/www.themealdb.com/api/json/v1/1/categories.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCat(data.categories));
  }, []);

  return(
    <div>
        <h2>Total Category{cat.length}</h2>
    </div>
  );
};

export default MealCategory;
