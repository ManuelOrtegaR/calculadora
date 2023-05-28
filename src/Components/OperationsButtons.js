const inputOperators = ['+', '-', '*', '/', '='];

export function Operators({ operations }) {
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
