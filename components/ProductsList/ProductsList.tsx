import { List } from './styles';
import ProductCard from '../ProductCard';
import Alert from '../Alert';
import type Product from '../../types/product';
import { CartProductCard } from '../ProductCard/ProductCard';

type ProductsListProps = {
  products?: Array<Product>;
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <List>
      {products && products.length > 0 ? (
        products.map((product) => {
          return product.inCart ? (
            <CartProductCard key={product.id} product={product} />
          ) : (
            <ProductCard key={product.id} product={product} />
          );
        })
      ) : (
        <Alert />
      )}
    </List>
  );
}

export default ProductsList;
