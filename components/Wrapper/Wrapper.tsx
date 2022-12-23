import React from 'react';
import { Main } from './styles';

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return <Main>{children}</Main>;
}

export default Wrapper;
