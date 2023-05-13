import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Calculadora App</h1>
      <div className='display'>1235646</div>
      <div className='controlsMemory'>
        <button className='controlsMemory__clear'>CE</button>
        <button className='controlsMemory__save'>SV</button>
        <button className='controlsMemory__memory'>ME</button>
        <button className='controlsMemory__delete'>DE</button>
      </div>
      <div className='controls'>
        <div className='controls__keys'>
          <button className='controls__keys__key_7'>7</button>
          <button className='controls__keys__key_8'>8</button>
          <button className='controls__keys__key_9'>9</button>
          <button className='controls__keys__key_4'>4</button>
          <button className='controls__keys__key_5'>5</button>
          <button className='controls__keys__key_6'>6</button>
          <button className='controls__keys__key_1'>1</button>
          <button className='controls__keys__key_2'>2</button>
          <button className='controls__keys__key_3'>3</button>
          <button className='controls__keys__key_point'>.</button>
          <button className='controls__keys__key_0'>0</button>
          <button className='controls__keys__key_backspace'>Erase</button>
        </div>
        <div className='controls__functions'>
          <button className='addition'>+</button>
          <button className='substraction'>-</button>
          <button className='multiplication'>x</button>
          <button className='division'>/</button>
          <button className='equal'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
