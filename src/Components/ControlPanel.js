import { Buttons } from './PanelButtons';
import { Operators } from './OperationsButtons';

export function ControlPanel({ printNumber, operations }) {
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
