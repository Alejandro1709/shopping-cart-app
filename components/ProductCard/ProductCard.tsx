import Image from 'next/image';
import type Product from '../../types/product';
import * as S from './styles';
import { useProducts } from '../../hooks/useProducts';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { handleAddProductToCart } = useProducts();

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
        <S.AddButton onClick={() => handleAddProductToCart(product)}>
          +
        </S.AddButton>
      </S.Right>
    </S.Product>
  );
}

export default ProductCard;
