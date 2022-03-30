import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryView = (props) => {
  const { strCategory, idCategory, strCategoryThumb, strCategoryDescription } =
    props.cat;
    const navigate = useNavigate();

    // Never Used  
    const showCatMeals = () => {
      const path = `/category/${strCategory}`;
      navigate(path);
    }
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <img
          className="rounded-t-lg"
          src={strCategoryThumb}
          alt={strCategory}
        />

        <div className="p-5 relative h-64">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {strCategory}
          </h5>

          <p className="mb-3 font-normal text-gray-700 ">
            {strCategoryDescription.slice(0, 150)}
          </p>
          <Link
            to={`/category/${strCategory}`}
            className="absolute bottom-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            All Meals of {strCategory} Category
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
