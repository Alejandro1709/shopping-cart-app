import { List } from './styles';
import ProductCard from '../ProductCard';
import Alert from '../Alert';
import { useProducts } from '../../hooks/useProducts';

function ProductsList() {
  const { foundProducts } = useProducts();
  return (
    <List>
      {foundProducts && foundProducts.length > 0 ? (
        foundProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <Alert />
      )}
    </List>
  );
}

export default ProductsList;
