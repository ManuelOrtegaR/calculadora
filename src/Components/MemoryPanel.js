import { Memory } from './MemoryButtons';

export function MemoryControls({ memory, dataIndex, memoryEvents, modeOp }) {
  return (
    <div className='memory row m-3'>
      <span className='memory__info col-12 text-end'>
        Mode: {modeOp ? 'Lineal' : 'Algebraic'} Items Saveds:{' '}
        {Object.keys(memory).length} Position: {dataIndex + 1}
      </span>
      <Memory memoryEvents={memoryEvents} />
    </div>
  );
}
