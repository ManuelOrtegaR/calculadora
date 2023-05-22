import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const baseURL = 'http://127.0.0.1:3001';

const inputPanel = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'back'];
const inputOperators = ['+', '-', '*', '/', '='];
const displayText = '';
const memoryData = [];
const data = [];
const storage = {};
const indexList = -1;
const toggler = false;
const memoryFunctions = ['ME', 'SV', 'DE', 'CE'];

function Buttons({ printNumber }) {
  return inputPanel.map(function (elemento) {
    return (
      <button
        className='col-3 controlPanel__Button controlPanel__Number'
        onClick={printNumber}
        key={elemento}
      >
        {elemento}
      </button>
    );
  });
}
function Operators({ operations }) {
  return inputOperators.map(function (elemento) {
    return (
      <button
        className='col-5 controlPanel__Button controlPanel__Number'
        onClick={operations}
        key={elemento}
      >
        {elemento}
      </button>
    );
  });
}

function Memory({ memoryEvents }) {
  return memoryFunctions.map(function (elemento) {
    return (
      <button
        className='memoryControl__Button memory-Control__clear'
        onClick={memoryEvents}
        key={elemento}
      >
        {elemento}
      </button>
    );
  });
}

function App() {
  const [display, setDisplay] = useState(displayText);
  const [dataValue, setDataValue] = useState(data);
  const [memory, setMemory] = useState(memoryData);
  const [storageData, setStorageData] = useState(storage);
  const [dataIndex, setDataIndex] = useState(indexList);
  const [togg, setTogg] = useState(toggler);

  async function loadMemory() {
    try {
      const response = await fetch(`${baseURL}/memory`);

      if (response.ok) {
        const dataServer = await response.json();
        setMemory(dataServer);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function () {
    loadMemory();
  }, []);

  function printNumber(event) {
    const displayValue = event.target.innerText;
    if (displayValue === 'back') {
      const text = display.toString();
      setDisplay(text.slice(0, -1));
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

  function operations(event) {
    const sign = event.target.innerText;
    if (sign !== '=' && display) {
      const newArray = togg ? [sign] : [display, sign];
      newArray.map((elem) => dataValue.push(elem));
      setDisplay('');
      setTogg(false);
    } else {
      if (sign === '=' && display) {
        setDataValue(dataValue.push(display));
        equal(dataValue);
      }
    }
  }

  function equal(array) {
    let prueba = array;
    while (prueba.length >= 3) {
      if (prueba[1] === '/' && prueba[2] === '0') {
        window.alert(`${prueba[0]} no se puede dividir entre 0`);
        prueba = [''];
      } else {
        const stri = prueba[0] + prueba[1] + prueba[2];
        const newStri = evaluaArimetica(stri).toFixed(1);
        const arr1 = prueba.slice(3);
        arr1.unshift(newStri);
        prueba = arr1;
      }
    }
    setDisplay(prueba[0]);
    setDataValue([]);

    const postOperation = {
      operation: array,
      result: prueba,
    };
    setStorageData(postOperation);
  }

  function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
  }

  function memoryEvents(event) {
    const calculo = event.target.textContent;
    if (calculo === 'CE') clear(event);
    if (calculo === 'SV') save(event);
    if (calculo === 'ME') dataSave(event);
    if (calculo === 'DE') deleteData(event);
  }

  function clear(event) {
    setDisplay('');
    setDataValue([]);
    setTogg(false);
  }

  async function save(event) {
    try {
      const response = await fetch(`${baseURL}/memory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(storageData),
      });

      if (response.ok) {
        setStorageData({});
        const dataServer = await response.json();
        setMemory([...memory, dataServer]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function dataSave(event) {
    if (memory.length > 0) {
      let index = dataIndex;
      if (index < memory.length - 1) {
        index++;
      } else {
        index = 0;
      }
      const displayValue = memory[index].result;
      const memoryValue = memory[index].operation;
      setDataIndex(index);
      setDisplay(displayValue[0]);
      setDataValue(memoryValue);
      setTogg(true);
      loadMemory();
    }
  }

  async function deleteData(event) {
    if (dataIndex !== -1) {
      const id = memory[dataIndex].id;
      try {
        const response = await fetch(`${baseURL}/memory/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          loadMemory();
          setDataIndex(-1);
          setDisplay('');
          setDataValue([]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    setTogg(false);
  }

  /*const handleKeyDown = (event) => {
    const pressedKey = parseInt(event.key);
    let eventKey = event;
    eventKey.target.innerText = pressedKey;
    if (inputPanel.includes(pressedKey)) {
      printNumber(eventKey);
    }
    if (inputOperators.includes(pressedKey)) {
      operations(eventKey);
    }
    console.log('User pressed: ', event.key);
  };
  tabIndex={-1} onKeyDown={handleKeyDown}
  */

  return (
    <div className='container'>
      <div className='aplication'>
        <h1>
          <img
            alt='logo'
            className='aplication__Logo'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcklEQVR4nO2cSWgVQRCGv7hjxGiMokZRTy4gXtwCelKJV/WgB0/GKC4gyUU0oka8CRIRL4qeNLjgSdSTnsQIEYwgYogQNzTixQXMnpGGevIYumfevMzLVKB/qEv4u7r6Ty81NT0PPEaNmcAeoAVoBe5mZK0Sw26JacwwGWgCfgGBMjMxnQQmlVqECuCpggHH2ROJtSSYCDxWMMhC7ZHEnDoOKhhcUtuftggTgE8KBpbUPgJlaQqxQcGgirV1aQpxQMGAVCyPJkcnz4CdwNaMbQfw3BGjiT01nLF08BuYhR6YWP5Y4jSxl1SIdvShPQshXqAPJiYvBF6I//AzQuCFEHghBF4IgRdC4IXIUoiX6EMmmWUvsBQ9mJ3Vs0YAfAHqFTx97gLaHDGOiRDBODAvBF4I/IzALw1U7hFDcqIUwv0pFscbEZ/D42WzbAMWSbtVQGfEwBrknYmxRvmbjfsOWCk+F0cclWqEGAAWhtqud3BvWvq55eCuDfGqgUHNQnRZ2pr/dp+Fe9jCPWLh9YmPMLo0CzFkSbs3O7j3LP3cd3A3hXjLpC+1QgRAR956rgE+RHDPAtPEmiN43cDGvH2nQ/seEYReABXC63MsndH4VCVEoMS8EHgh8DMCZUvjtmSKcXeuvslpYayngDtRxued8bJHHAu1bXHwvgLz83gLRBgb92LIZ4N2IX5Y7ixVOJIf2wWOUxbekOUiaZn0pVaIHkvbGY7nguMW7gkLb1B8hIX4rlmIAKgLtT3v4JmMszKPVym34GzccyGf9dqXRiD1gqvAvgI2tm7ZABtjUvHcBmx8XktYk/AJFV4I/IzALw3U7hHDBfJGImqVxfpUIUSnFFHMBy7bI7LFQLJOc2zOAS5F8EwWWis+ayIKwmqEGAaWh9puc3AfWPp56OBuCfFWJJgdqoq3/RauKdSOpnj7XrMQ/cDcUNs1Du51Sz83HNzVId48h7hqhAjke6oqaWcq2q8jlpHJFHOoi5jupli7RHhVCb8rS1WI0wk6zt2meSMvfOK4n8XieAPiszdhLCb21HA0YeeazPYiqWjUKhhQsWauFqWGqUo/eI0z85Z9CimjWcHAgiz3hxzKgVcKBleomZNmOiVCdcRxqMne5h23JUM5cAH4q2DAtvrmlVJ+F26DeVDaq+BnE4xdBg5ZLql4kBD/AHfdmdITQ1bXAAAAAElFTkSuQmCC'
          />
          Calculadora
        </h1>
        <div className='displayContainer'>
          <div className='history'>{dataValue}</div>
          <div className='display'>{display}</div>
        </div>
        <div className='memoryControl'>
          <span>
            Items Saveds: {memory.length} position: {dataIndex + 1}
          </span>
          <Memory memoryEvents={memoryEvents} />
        </div>
        <div className='controlPanel row'>
          <div className='numbers col-8'>
            <Buttons printNumber={printNumber} />
          </div>
          <div className='operatos col-4'>
            <Operators operations={operations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
