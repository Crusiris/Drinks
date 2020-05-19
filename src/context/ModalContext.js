import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//Creando el context
export const ModalContext = createContext();

//Provider
const ModalProvider = (props)=> {

    //State
    const [idrecipe, saveIdRecipe] = useState(null);

    //State
    const [drink, saveDrink]= useState({});

    //Peticion get al api, cuando se obtenga un id
    useEffect(()=>{
        const getRecipe = async ()=>{

            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
            const result = await Axios.get(url);
            saveDrink(result.data.drinks[0]);

        }

        getRecipe();

    }, [idrecipe])

    return(
        <ModalContext.Provider
            value={{
                drink,
                saveDrink,
                saveIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
 