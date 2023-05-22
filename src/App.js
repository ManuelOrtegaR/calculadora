import { useState } from 'react';
import { useEffect } from 'react';
import { IconCalculator, IconBackspace } from '@tabler/icons-react';
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

function Title() {
  return (
    <div className='header m-3'>
      <h1 className='header__title text-center'>
        <IconCalculator size={40} />
        Calculadora
      </h1>
    </div>
  );
}

function Display({ dataValue, display }) {
  return (
    <div className='display row m-3 p-2 rounded'>
      <div className='display__history col-12 text-end'>{dataValue}</div>
      <div className='display__input col-12 text-end'>{display}</div>
    </div>
  );
}

function MemoryControls({ memory, dataIndex, memoryEvents }) {
  return (
    <div className='memory row m-3'>
      <span className='memory__info col-12 text-end'>
        Items Saveds: {memory.length} Position: {dataIndex + 1}
      </span>
      <Memory memoryEvents={memoryEvents} />
    </div>
  );
}

function ControlPanel({ printNumber, operations }) {
  return (
    <div className='panel m-3'>
      <div className='panel__numbers col-8'>
        <Buttons printNumber={printNumber} />
      </div>
      <div className='panel__operations col-4'>
        <Operators operations={operations} />
      </div>
    </div>
  );
}

function Buttons({ printNumber }) {
  return inputPanel.map(function (elemento) {
    return (
      <button
        className='panel__numbers__button rounded col-4'
        onClick={printNumber}
        key={elemento}
        id={elemento}
      >
        {elemento === 'back' ? <IconBackspace size={30} /> : elemento}
      </button>
    );
  });
}
function Operators({ operations }) {
  return inputOperators.map(function (elemento) {
    return (
      <button
        className='panel__operations__button rounded col-6'
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
        className='col memory__button rounded'
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
    const pressedButton = event.target.id;
    if (pressedButton === '') {
      const text = display.toString();
      setDisplay(text.slice(0, -1));
    } else {
      if (pressedButton === '.' && !display) {
        setDisplay(display + '0.');
      } else {
        if (pressedButton === '.' && display.includes('.') === false) {
          setDisplay(display + '.');
        } else {
          if (pressedButton !== '.') {
            setDisplay(display + pressedButton);
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

  function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
  }

  function equal(array) {
    let process = array;
    while (process.length >= 3) {
      if (process[1] === '/' && process[2] === '0') {
        window.alert(`${process[0]} no se puede dividir entre 0`);
        process = [''];
      } else {
        const firstOperation = process[0] + process[1] + process[2];
        const operationResult = evaluaArimetica(firstOperation).toFixed(1);
        const remainigOps = process.slice(3);
        remainigOps.unshift(operationResult);
        process = remainigOps;
      }
    }
    setDisplay(process[0]);
    setDataValue([]);

    const postOperation = {
      operation: array,
      result: process,
    };
    setStorageData(postOperation);
  }

  function memoryEvents(event) {
    const request = event.target.textContent;
    if (request === 'CE') clear(event);
    if (request === 'SV') save(event);
    if (request === 'ME') dataSave(event);
    if (request === 'DE') deleteData(event);
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

  return (
    <div className='container p-1 mt-3'>
      <Title />
      <Display dataValue={dataValue} display={display} />
      <MemoryControls
        memory={memory}
        dataIndex={dataIndex}
        memoryEvents={memoryEvents}
      />
      <ControlPanel printNumber={printNumber} operations={operations} />
    </div>
  );
}

export default App;
