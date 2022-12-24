import { useState } from 'react';
import Image from 'next/image';
import type Product from '../../types/product';
import ProductCardActive from './ProductCardActive';
import * as S from './styles';
import Counter from '../Counter';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [isCounterShowing, setIsCounterShowing] = useState<boolean>(false);

  return product.inCart ? (
    <ProductCardActive product={product} />
  ) : (
    <S.Product>
      <S.Left>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={75}
          height={75}
          draggable={false}
        />
      </S.Left>
      <S.Center>
        <S.Title>{product.title}</S.Title>
        <S.Price>${Intl.NumberFormat('en-US').format(product.price)}</S.Price>
      </S.Center>
      <S.Right>
        {isCounterShowing ? (
          <Counter />
        ) : (
          <S.AddButton onClick={() => setIsCounterShowing(true)}>+</S.AddButton>
        )}
      </S.Right>
    </S.Product>
  );
}

export default ProductCard;
