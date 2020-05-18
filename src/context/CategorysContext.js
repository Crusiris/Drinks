import React, { createContext, useState, useEffect }  from 'react';
import Axios from 'axios';


//TODOS LOS DATOS AHORA FLUYEN DESDE AQUI [CONTEXT]
//Creando el context
export const CategorysContext = createContext();

//Provider donde se encuentran las funciones y state
const CategorysProvider = (props)=>{

    //Creando state del context
    const [categorys, saveCategorys] = useState([]);

    //Ejecutando el llamado al API
    useEffect(()=> {
        //Funcion asincrona
        const getCategorys = async()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorys = await Axios.get(url);
            saveCategorys(categorys.data.drinks);

        }

        getCategorys()

    },[])
    

    return (
        <CategorysContext.Provider
        value={{
            categorys
           
        }}
        >
            {props.children}
        </CategorysContext.Provider>
    );
}

export default CategorysProvider;
