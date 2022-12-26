import { List } from './styles';
import ProductCard from '../ProductCard';
import Alert from '../Alert';
import type Product from '../../types/product';
import { CartProductCard } from '../ProductCard/ProductCard';

type ProductsListProps = {
  products?: Array<Product>;
  cart?: Array<Product>;
  onCartChange: (item: Product) => void;
  onCartAdd: (item: Product) => void;
};

function ProductsList({
  products,
  cart,
  onCartChange,
  onCartAdd,
}: ProductsListProps) {
  return (
    <List>
      {products && products.length > 0 ? (
        products.map((product) => {
          return product.inCart ? (
            <CartProductCard
              key={product.id}
              product={product}
              cart={cart}
              onCartChange={onCartChange}
            />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              onCartAdd={onCartAdd}
            />
          );
        })
      ) : (
        <Alert />
      )}
    </List>
  );
}

export default ProductsList;
