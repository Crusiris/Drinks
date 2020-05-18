import React, { createContext, useState } from 'react';

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

    return(
        <RecipesContext.Provider
        value = {{
            searchRecipes
        }}
        > 
            {props.children}

        </RecipesContext.Provider> 
    );
}

export default RecipesProvider;