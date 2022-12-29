import { useContext } from 'react';
import { ProductContext } from '../context/productsContext';

function useProducts() {
  return useContext(ProductContext);
}

export { useProducts };
