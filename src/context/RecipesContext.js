import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creando el context
export const RecipesContext = createContext();

//Creando el provider
const RecipesProvider = (props)=> {

    //State para recetas
    const [recipes, saveRecipes]= useState([]);
    //State busqueda de recetas
    const [search, searchRecipes]= useState({
        name:'',
        category:''
    })

    //State para consulta
     const [query, saveQuery]= useState(false);

    //Destructuring
    const { name, category } = search;

    useEffect(()=>{
        if(query===true){
            const getRecipe = async()=> {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
            
                const result = await axios.get(url);
                saveRecipes(result.data.drinks);
            }
            getRecipe();
        }
       
       

    },[search])

    return(
        <RecipesContext.Provider
        value = {{
            recipes,
            searchRecipes,
            saveQuery
        }}
        > 
            {props.children}

        </RecipesContext.Provider> 
    );
}

export default RecipesProvider;