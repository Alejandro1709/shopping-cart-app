import Cart from '../../public/cart.svg';
import { EmptyList, CartImage } from './styles';

function Alert() {
  return (
    <EmptyList>
      <CartImage src={Cart} alt='Cart Image' draggable={false} />
      <h2>Your cart is empty</h2>
      <p>Seems like you haven’t chosen what to buy...</p>
    </EmptyList>
  );
}

export default Alert;
