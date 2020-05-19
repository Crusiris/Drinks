import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListRecipes from './components/ListRecipes';
import CategorysProvider from './context/CategorysContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategorysProvider>
      <RecipesProvider>
        <ModalProvider>
         <Header/>
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <ListRecipes/>
          </div>
          </ModalProvider>
      </RecipesProvider>
    </CategorysProvider>
   
  );
}

export default App;
