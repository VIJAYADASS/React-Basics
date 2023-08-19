import React, { useState } from 'react';
import './App.css';
import Heading from './Heading';

function App() {

    const [word, setWord] = React.useState('Eat')

      function handleClick(){
          setWord("Drink")
      }
    
      return (
      <div className="App">
          <Heading message = {word +  " a little lemon"}/>
          <button onClick={handleClick}>Click me </button>
     </div>
    );
}

export default App;
