import React, { useContext, useState } from 'react';
import { CategorysContext } from '../context/CategorysContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

    //State para la busqueda
    const [ search, saveSearch ] = useState({
        name: '',
        category:''
    })


  //Destructuring de context
  const { categorys } = useContext(CategorysContext);

  const { searchRecipes, saveQuery } = useContext(RecipesContext);

  //Funcion que obtiene busqueda
  const getsearch = e => {

    saveSearch ({
        ...search,
        [e.target.name]:e.target.value
    });

  }
  
  
    return ( 
        <form className="col-12"
        onSubmit={ e => {
            e.preventDefault();
            searchRecipes(search);
            saveQuery(true);
        }}
        >

            <fieldset className="text-center">
                <legend>Buscar bebidas por Categoria o Ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por Ingrediente"
                    onChange= {getsearch}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                        onChange= {getsearch}>

                            <option value="">---- Selecciona Categoria ----</option>

                            {categorys.map(category=>(
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                    >{category.strCategory}
                                </option>  
                            ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                    type="submit" 
                    className="btn btn-block btn-primary"
                    value="Buscar bebidas" />
                </div>
            </div>
        </form>
     );
}
 
export default Form;