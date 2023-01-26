import * as React from 'react'

import { CalculatorContextProvider } from './calculatorContext';
import Calculator from './components/calculator/calculator';
import './App.css';

function App() {
  return (
    <div className="App">
        <CalculatorContextProvider>
           <Calculator/>
        </CalculatorContextProvider>
    </div>
  );
}

export default App;
