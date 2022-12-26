import { useState } from 'react';
import * as S from './styles';

function Counter() {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    if (count >= 10) return;

    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return;

    setCount((prevCount) => prevCount - 1);
  };

  return (
    <S.Counter>
      <S.CounterButton onClick={handleDecrement}>-</S.CounterButton>
      <span>{count}</span>
      <S.CounterButton onClick={handleIncrement}>+</S.CounterButton>
    </S.Counter>
  );
}

export default Counter;
