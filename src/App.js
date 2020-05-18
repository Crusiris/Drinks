import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategorysProvider from './context/CategorysContext';

function App() {
  return (
    <CategorysProvider>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Form/>
        </div>
      </div>
    </CategorysProvider>
   
  );
}

export default App;
