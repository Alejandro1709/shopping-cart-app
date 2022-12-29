import Image from 'next/image';
import type Product from '../../types/product';
import * as S from './styles';
import { useProducts } from '../../hooks/useProducts';
import Counter from '../Counter';

type ProductCardProps = {
  product: Product;
};

export function CartProductCard({ product }: ProductCardProps) {
  const { setCart } = useProducts();

  const handleDeleteProductFromCart = (product: Product) => {
    setCart((prevCart) => {
      return prevCart.filter((p) => p.id !== product.id);
    });
  };

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
        <Counter product={product} />
        <button onClick={() => handleDeleteProductFromCart(product)}>
          Delete
        </button>
      </S.Right>
    </S.Product>
  );
}

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
