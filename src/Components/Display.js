export function Display({ dataValue, display }) {
  return (
    <div className='display row m-3 p-2 rounded'>
      <div className='display__history col-12 text-end'>{dataValue}</div>
      <div className='display__input col-12 text-end'>{display}</div>
    </div>
  );
}
