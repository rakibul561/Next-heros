"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState('');

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();

      if (Array.isArray(data.meals)) {
        setMeals(data.meals);
        setError('');
      } else {
        setMeals([]);
        setError('No data found');
      }
    } catch (error) {
      setMeals([]);
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handaler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
 
  /*  */
  return (
    <div className="mt-8 mb-8">
      <input
        onChange={handaler}
        className="p-4 border-transparent bg-green-700 text-white"
        type="text"
        placeholder="Search meals name"
      />
      <button onClick={loadData} className="p-4 bg-red-400">
        Search
      </button>
      <div className="grid grid-cols-4 gap-6">
        {meals.length > 0 && meals.map(
          (meal: {
            [x: string]: string | StaticImport;
            strMeal: ReactNode;
            strInstructions: ReactNode;
            idMeal: React.Key | null | undefined;
          }) => (
            <div key={meal.idMeal} className="border-2 p-4">
                <Image src={meal?.strMealThumb} alt={meal?.strMeal}  width={500} height={500} />
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          )
        )}
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default Meals;
