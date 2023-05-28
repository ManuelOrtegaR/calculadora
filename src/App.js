import { useState } from 'react';
import { useEffect } from 'react';
import { Title } from './Components/Title';
import { Display } from './Components/Display';
import { MemoryControls } from './Components/MemoryPanel';
import { ControlPanel } from './Components/ControlPanel';
import './App.css';
import { save, deleteData } from './Services/Data';

const displayText = '';
const memoryData = {};
const data = [];
const storage = {};
const indexList = -1;
const toggler = false;
const mode = true;
const baseURL = 'http://127.0.0.1:3001';

function App() {
  const [display, setDisplay] = useState(displayText);
  const [dataValue, setDataValue] = useState(data);
  const [memory, setMemory] = useState(memoryData);
  const [storageData, setStorageData] = useState(storage);
  const [dataIndex, setDataIndex] = useState(indexList);
  const [togg, setTogg] = useState(toggler);
  const [modeOp, setModeOp] = useState(mode);

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
    const data = loadMemory();
    setMemory(data);
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
        if (!togg) {
          setDataValue(dataValue.push(display));
        }
        modeOp ? equalLineal(dataValue) : equalAlgeb(dataValue);
      }
    }
  }

  function evaluaArimetica(fn) {
    return new Function('return ' + fn)();
  }

  function equalLineal(array) {
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

  function equalAlgeb(array) {
    console.log(array);
    const newString = array.reduce((element, final) => element + final, '');
    console.log(newString);
    const result = evaluaArimetica(newString);
    setDisplay(result);
    setDataValue([]);

    const postOperation = {
      operation: array,
      result: result,
    };
    setStorageData(postOperation);
  }

  function memoryEvents(event) {
    const request = event.target.textContent;
    if (request === 'MODE') setModeOp(!modeOp);
    if (request === 'CE') clear(event);
    if (request === 'SV') {
      save(event, storageData);
      setStorageData({});
    }
    if (request === 'ME') dataSave(event);
    if (request === 'DE') {
      deleteData(event, dataIndex, memory);
      setDataIndex(-1);
      setDisplay('');
      setDataValue([]);
      setTogg(false);
    }
  }

  function clear(event) {
    setDisplay('');
    setDataValue([]);
    setTogg(false);
  }

  function dataSave(event) {
    if (Object.keys(memory).length > 0) {
      let index = dataIndex;
      if (index < Object.keys(memory).length - 1) {
        index++;
      } else {
        index = 0;
      }
      const item = Object.keys(memory)[index];
      const displayValue = memory[item].result;
      const memoryValue = memory[item].operation;
      setDataIndex(index);
      setDisplay(displayValue);
      setDataValue(memoryValue);
      setTogg(true);
      loadMemory();
    }
  }

  return (
    <div className='container p-1 mt-3'>
      <Title />
      <Display dataValue={dataValue} display={display} />
      <MemoryControls
        modeOp={modeOp}
        memory={memory}
        dataIndex={dataIndex}
        memoryEvents={memoryEvents}
      />
      <ControlPanel printNumber={printNumber} operations={operations} />
    </div>
  );
}

export default App;
