const memoryFunctions = ['MODE', 'ME', 'SV', 'DE', 'CE'];

export function Memory({ memoryEvents }) {
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
