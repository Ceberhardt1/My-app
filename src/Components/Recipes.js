import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Recipes() {

    const [recipes, setRecipes]= useState([])
    const navigate = useNavigate();
    


    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/recipes");
            const data = await response.json();
            console.log(data);
            setRecipes(data);
        }
        getData();
    }, [])

    function getId(id){
        navigate("/recipesdetails", {state: {recipeId: id}})
    }


  return (
    <div className='recipe-whole'>
        {recipes.map((item)=>{
            return(
                <div className='recipe-front' onClick={()=> getId(item.id)}>
                    <img src={item.image} alt='recipe' width={300}/>
                    <h1>{item.name}</h1>
                    <p>Cooking Time: {item.cookTimeMinutes} Mins</p>
                    <p>Level: {item.difficulty}</p>
                    <p>Rating: {item.rating}</p>

                </div>
            )
        })}
    </div>
  )
}
