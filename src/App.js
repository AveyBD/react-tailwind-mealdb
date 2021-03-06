import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryMeals from "./components/CategoryMeals/CategoryMeals";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import MealCategory from "./components/MealCategory/MealCategory";
import Meals from "./components/Meals/Meals";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<><Hero></Hero><Home></Home></>}></Route>
        <Route path="/category" element={<MealCategory></MealCategory>}></Route>
        <Route path="/category/:name" element={<CategoryMeals></CategoryMeals>}></Route>
        <Route path="/meal" element={<Meals></Meals>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
