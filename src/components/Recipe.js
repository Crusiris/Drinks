import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}
   
function getModalStyle() {
    const top = 45 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width:350,
      height:700,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({recipe}) => {
    //Configuracion del modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    //Extrayendo valores del Modalcontext
        const { drink, saveDrink, saveIdRecipe } = useContext(ModalContext);

    //Mostrando y formateando ingredientes
    const displayIngredient = (drink)=>{
        let ingredient=[];
        for (let i=1; i<16; i++){
            if(drink[`strIngredient${i}`]){
                ingredient.push(
                    <li>{ drink[`strIngredient${i}`] } { drink[`strMeasure${i}`] } </li>
                )
            }
        }
        return ingredient;
    }


    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`}/>
            
                <div className="card-body">
                    <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={()=>{
                        saveIdRecipe(recipe.idDrink);
                        handleOpen();
                    }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                    open={open}
                    onClose={ ()=> {
                        saveIdRecipe(null);
                        saveDrink({});
                        handleClose();
                    }}
                    
                    >
                        <div style={modalStyle} className={classes.paper}>
                                <h2>{drink.strDrink}</h2>
                                <h3 className="mt-4"> Instrucciones</h3>
                                <p>
                                    {drink.strInstructions}
                                </p>

                                <img className="img-fluid my-4" src={drink.strDrinkThumb} alt={drink.strDrink}/>
                       
                                <h3>Ingredientes y cantidades</h3>
                                <ul>
                                    {displayIngredient(drink)}
                                </ul>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
}
 
export default Recipe;