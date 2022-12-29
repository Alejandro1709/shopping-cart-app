import Image from 'next/image';
import { useProducts } from '../../hooks/useProducts';
import Disk from '../../public/disk.png';
import * as S from './styles';

function Cart() {
  const { cart } = useProducts();

  const totalPrices = cart.reduce((acc, product) => product.price + acc, 0);
  const shipping = totalPrices * 0.1;
  const taxes = Math.round(totalPrices * 0.18);
  const total = totalPrices + shipping;

  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const deliveryDate = new Date(year, month, date + ((5 - day + 7) % 7) + 1);

  // explain this formula: (year, month, date + ((5 - day + 7) % 7) + 1
  // 5 - day: 5 is the day of the week we want to get to (Friday)
  // 7 is the number of days in a week
  // % 7: if the day is Saturday or Sunday, we want to get to the next Friday
  // + 1: we want to get to the next Friday, not the current Friday

  const final = `${
    deliveryDate.getMonth() + 1
  }/${deliveryDate.getDate()}/${deliveryDate
    .getFullYear()
    .toString()
    .slice(-2)}`;

  return (
    <S.Cart>
      <S.Inner>
        <S.HeadingInfo>
          <Image src={Disk} alt='disk logo' width={20} height={20} />
          <S.Heading>
            Buy now and get it by <S.Date>{final}</S.Date>
          </S.Heading>
        </S.HeadingInfo>
        <S.CartInfo>
          <S.CartList role='list'>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Products</h3>
              <p>${totalPrices}</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Shipping cost</h3>
              <p>${shipping}</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Taxes</h3>
              <p>${taxes}</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Total</h3>
              <p>${total}</p>
            </S.CartItem>
          </S.CartList>
        </S.CartInfo>
        <S.Button enabled={total >= 50} disabled={total <= 50}>
          Complete Order
        </S.Button>
      </S.Inner>
    </S.Cart>
  );
}

export default Cart;
