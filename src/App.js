import { useState } from 'react';
import './App.css';

const inputPanel = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'back'];
const inputOperators = ['+', '-', '*', '/', '='];
const displayText = '';
const memoryData = [];
const data = [];

function App() {
  const memoryFunctions = [
    { function: clear, input: 'CE' },
    { function: 'save', input: 'SV' },
    { function: 'memory', input: 'ME' },
    { function: 'delete', input: 'DE' },
  ];
  const [display, setDisplay] = useState(displayText);
  const [dataValue, setDataValue] = useState(data);
  function Buttons() {
    return inputPanel.map(function (elemento) {
      return (
        <button
          className='col-3 controlPanel__Button controlPanel__Number'
          onClick={printNumber}
        >
          {elemento}
        </button>
      );
    });
  }
  function Operators() {
    return inputOperators.map(function (elemento) {
      return (
        <button
          className='col-5 controlPanel__Button controlPanel__Number'
          onClick={operations}
        >
          {elemento}
        </button>
      );
    });
  }
  function Memory() {
    return memoryFunctions.map(function (elemento) {
      const funct = elemento.function;
      const value = elemento.input;
      return (
        <button
          className='memoryControl__Button memory-Control__clear'
          onClick={funct}
        >
          {value}
        </button>
      );
    });
  }

  function printNumber(event) {
    const displayValue = event.target.innerText;
    if (displayValue === 'back') {
      setDisplay(display.slice(0, -1));
    } else {
      if (displayValue === '.' && !display) {
        setDisplay(display + '0.');
      } else {
        if (displayValue === '.' && display.includes('.') === false) {
          setDisplay(display + '.');
        } else {
          if (displayValue !== '.') {
            setDisplay(display + displayValue);
          }
        }
      }
    }
  }

  function equal(array) {
    let prueba = array;
    while (prueba.length >= 3) {
      const stri = prueba[0] + prueba[1] + prueba[2];
      const newStri = evaluaArimetica(stri);
      const arr1 = prueba.slice(3);
      arr1.unshift(newStri);
      prueba = arr1;
    }
    setDisplay(prueba[0]);
    setDataValue([]);
  }

  function operations(event) {
    const sign = event.target.innerText;
    if (sign !== '=' && display) {
      const newArray = [display, sign];
      newArray.map((elem) => dataValue.push(elem));
      console.log(dataValue);
      setDisplay('');
    } else {
      if (sign === '=' && display) {
        setDataValue(dataValue.push(display));
        equal(dataValue);
      }
    }
  }

  function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
  }

  function clear() {
    setDisplay('');
    setDataValue([]);
  }

  return (
    <div className='container'>
      <div className='aplication'>
        <h1>
          <img
            className='aplication__Logo'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcklEQVR4nO2cSWgVQRCGv7hjxGiMokZRTy4gXtwCelKJV/WgB0/GKC4gyUU0oka8CRIRL4qeNLjgSdSTnsQIEYwgYogQNzTixQXMnpGGevIYumfevMzLVKB/qEv4u7r6Ty81NT0PPEaNmcAeoAVoBe5mZK0Sw26JacwwGWgCfgGBMjMxnQQmlVqECuCpggHH2ROJtSSYCDxWMMhC7ZHEnDoOKhhcUtuftggTgE8KBpbUPgJlaQqxQcGgirV1aQpxQMGAVCyPJkcnz4CdwNaMbQfw3BGjiT01nLF08BuYhR6YWP5Y4jSxl1SIdvShPQshXqAPJiYvBF6I//AzQuCFEHghBF4IgRdC4IXIUoiX6EMmmWUvsBQ9mJ3Vs0YAfAHqFTx97gLaHDGOiRDBODAvBF4I/IzALw1U7hFDcqIUwv0pFscbEZ/D42WzbAMWSbtVQGfEwBrknYmxRvmbjfsOWCk+F0cclWqEGAAWhtqud3BvWvq55eCuDfGqgUHNQnRZ2pr/dp+Fe9jCPWLh9YmPMLo0CzFkSbs3O7j3LP3cd3A3hXjLpC+1QgRAR956rgE+RHDPAtPEmiN43cDGvH2nQ/seEYReABXC63MsndH4VCVEoMS8EHgh8DMCZUvjtmSKcXeuvslpYayngDtRxued8bJHHAu1bXHwvgLz83gLRBgb92LIZ4N2IX5Y7ixVOJIf2wWOUxbekOUiaZn0pVaIHkvbGY7nguMW7gkLb1B8hIX4rlmIAKgLtT3v4JmMszKPVym34GzccyGf9dqXRiD1gqvAvgI2tm7ZABtjUvHcBmx8XktYk/AJFV4I/IzALw3U7hHDBfJGImqVxfpUIUSnFFHMBy7bI7LFQLJOc2zOAS5F8EwWWis+ayIKwmqEGAaWh9puc3AfWPp56OBuCfFWJJgdqoq3/RauKdSOpnj7XrMQ/cDcUNs1Du51Sz83HNzVId48h7hqhAjke6oqaWcq2q8jlpHJFHOoi5jupli7RHhVCb8rS1WI0wk6zt2meSMvfOK4n8XieAPiszdhLCb21HA0YeeazPYiqWjUKhhQsWauFqWGqUo/eI0z85Z9CimjWcHAgiz3hxzKgVcKBleomZNmOiVCdcRxqMne5h23JUM5cAH4q2DAtvrmlVJ+F26DeVDaq+BnE4xdBg5ZLql4kBD/AHfdmdITQ1bXAAAAAElFTkSuQmCC'
          />
          Calculadora
        </h1>
        <div className='display'>{display}</div>
        <div className='memoryControl'>
          <Memory />
        </div>
        <div className='controlPanel row'>
          <div className='numbers col-8'>
            <Buttons />
          </div>
          <div className='operatos col-4'>
            <Operators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
