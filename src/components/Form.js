import React from 'react';

const Form = () => {
    return ( 
        <form className="col-12">

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
                    />
                </div>

                <div className="col-md-4">
                    <select 
                    className="form-control"
                    name="categoria">
                        <option value="">---- Selecciona Categoria ---</option>
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