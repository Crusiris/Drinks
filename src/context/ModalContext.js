import React, { createContext, useState, useEffect } from 'react';

//Creando el context
export const ModalContext = createContext();

//Provider
const ModalProvider = (props)=> {

    //State
    const [idrecipe, saveIdRecipe] = useState(null)

    return(
        <ModalContext.Provider
            value={{
                saveIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
 