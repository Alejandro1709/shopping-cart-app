import { Input } from './styles';

type SearchInputProps = {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
};

function SearchInput({
  id,
  name,
  type = 'text',
  placeholder,
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
