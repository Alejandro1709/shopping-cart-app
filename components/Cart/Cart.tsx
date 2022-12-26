import Image from 'next/image';
import Disk from '../../public/disk.png';
import * as S from './styles';

function Cart() {
  return (
    <S.Cart>
      <S.Inner>
        <S.HeadingInfo>
          <Image src={Disk} alt='disk logo' width={20} height={20} />
          <S.Heading>
            Buy now and get it by <S.Date>05/24/19</S.Date>
          </S.Heading>
        </S.HeadingInfo>
        <S.CartInfo>
          <S.CartList role='list'>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Products</h3>
              <p>$253.00</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Shipping cost</h3>
              <p>$25.30</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Taxes</h3>
              <p>$45.64</p>
            </S.CartItem>
            <S.CartItem className={S.CartItem} role='listitem'>
              <h3>Total</h3>
              <p>$278.30</p>
            </S.CartItem>
          </S.CartList>
        </S.CartInfo>
        <S.Button>Complete Order</S.Button>
      </S.Inner>
    </S.Cart>
  );
}

export default Cart;
