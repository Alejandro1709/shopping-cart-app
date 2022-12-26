import { ChangeEvent } from 'react';
import { Input } from './styles';

type SearchInputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({
  id,
  name,
  type = 'text',
  placeholder = 'Placeholder',
  value,
  onChange,
}: SearchInputProps) {
  return (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
