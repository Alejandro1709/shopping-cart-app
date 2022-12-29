import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import type Product from '../../types/product';
import * as S from './styles';

function Counter({ product }: { product: Product }) {
  const [count, setCount] = useState<number>(1);
  const { cart, setCart } = useProducts();

  const handleIncrement = () => {
    if (count >= 10) return;

    setCount((prevCount) => prevCount + 1);

    setCart([...cart, product]);
  };

  const handleDecrement = () => {
    if (count <= 0) return;

    setCount((prevCount) => prevCount - 1);

    const filtered = cart.filter((p) => p.id !== product.id);

    setCart(filtered);
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
