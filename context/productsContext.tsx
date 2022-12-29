import React, {
  ChangeEvent,
  createContext,
  SetStateAction,
  useState,
} from 'react';
import type Product from '../types/product';

type ProductContextType = {
  productsAvailable: Array<Product>;
  foundProducts: Array<Product>;
  inputQuery: string;
  cart: Array<Product>;
  setInputQuery: React.Dispatch<SetStateAction<string>>;
  setProductsAvailable: React.Dispatch<SetStateAction<Product[]>>;
  setFoundProducts: React.Dispatch<SetStateAction<Product[]>>;
  setCart: React.Dispatch<SetStateAction<Product[]>>;
  handleSearchProducts: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddProductToCart: (product: Product) => void;
};

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextType>({
  productsAvailable: [],
  foundProducts: [],
  cart: [],
  inputQuery: '',
  setInputQuery: () => {},
  setProductsAvailable: () => {},
  setFoundProducts: () => {},
  setCart: () => {},
  handleSearchProducts: () => {},
  handleAddProductToCart: () => {},
});

function ProductProvider({ children }: ProductProviderProps) {
  const [productsAvailable, setProductsAvailable] = useState<Array<Product>>(
    []
  );
  const [inputQuery, setInputQuery] = useState<string>('');
  const [foundProducts, setFoundProducts] = useState<Array<Product>>([]);
  const [cart, setCart] = useState<Array<Product>>([]);

  const handleSearchProducts = (e: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value);

    if (inputQuery.length >= 2) {
      const matchedProducts: Array<Product> = productsAvailable.filter(
        (prod: Product) =>
          prod.title.toLowerCase().includes(inputQuery.toLowerCase())
      );

      if (!matchedProducts) return;

      setFoundProducts(matchedProducts);
    }
  };

  const handleAddProductToCart = (product: Product) => {
    setCart([...cart, { ...product, quantity: product.quantity + 1 }]);
  };

  return (
    <ProductContext.Provider
      value={{
        productsAvailable,
        foundProducts,
        cart,
        inputQuery,
        setInputQuery,
        setProductsAvailable,
        setFoundProducts,
        setCart,
        handleSearchProducts,
        handleAddProductToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider };
