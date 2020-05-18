import React, { createContext, useState }  from 'react';

//TODOS LOS DATOS AHORA FLUYEN DESDE AQUI [CONTEXT]
//Creando el context
export const CategorysContext = createContext();

//Provider donde se encuentran las funciones y state
const CategorysProvider = (props)=>{

    //Creando state del context
    const [hello, saveHello] = useState('Hola');

    return (
        <CategorysContext.Provider
        value={{
            hello
        }}
        >
            {props.children}
        </CategorysContext.Provider>
    );
}

export default CategorysProvider;
