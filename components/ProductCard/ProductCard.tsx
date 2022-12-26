import Image from 'next/image';
import type Product from '../../types/product';
import * as S from './styles';

type ProductCardProps = {
  product: Product;
  onCartAdd: (item: Product) => void;
};

type CartProductCardProps = {
  product: Product;
  cart?: Array<Product>;
  onCartChange: (item: Product) => void;
};

export function CartProductCard({
  product,
  onCartChange,
}: CartProductCardProps) {
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
        <S.AddButton>1</S.AddButton>
        <button onClick={() => onCartChange(product)}>Delete</button>
      </S.Right>
    </S.Product>
  );
}

function ProductCard({ product, onCartAdd }: ProductCardProps) {
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
        <S.AddButton onClick={() => onCartAdd(product)}>+</S.AddButton>
      </S.Right>
    </S.Product>
  );
}

export default ProductCard;
