import Image from 'next/image';
import type Product from '../../types/product';
import * as S from './styles';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
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
        <S.AddButton>+</S.AddButton>
      </S.Right>
    </S.Product>
  );
}

export default ProductCard;
