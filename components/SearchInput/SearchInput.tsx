import { ChangeEvent, useContext } from 'react';
import { ProductContext } from '../../context/productsContext';
import { Input } from './styles';

type SearchInputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function SearchInput({
  id,
  name,
  type = 'text',
  placeholder = 'Placeholder',
}: SearchInputProps) {
  const { inputQuery, handleSearchProducts } = useContext(ProductContext);
  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={inputQuery}
      onChange={handleSearchProducts}
    />
  );
}

export default SearchInput;
