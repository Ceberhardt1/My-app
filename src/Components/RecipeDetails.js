import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function RecipeDetails() {

    const location = useLocation();

    const id = location.state.recipeId;
    

    const [recipes, setRecipes] = useState({});

    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/recipes/" + id);
            const data = await response.json();
            console.log(data);
            setRecipes(data);
        }
        getData();
    }, [id])
  return (
    <div>
        <h1>here</h1>
    </div>
  )
}
