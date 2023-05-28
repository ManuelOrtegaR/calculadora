import { IconCalculator } from '@tabler/icons-react';

export function Title() {
  return (
    <div className='header m-3'>
      <h1 className='header__title text-center'>
        <IconCalculator size={40} />
        Calculadora
      </h1>
    </div>
  );
}
