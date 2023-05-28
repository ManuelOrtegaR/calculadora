import { IconBackspace } from '@tabler/icons-react';

const inputPanel = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'back'];

export function Buttons({ printNumber }) {
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
