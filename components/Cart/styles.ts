import Link from 'next/link';
import styled from 'styled-components';

export const Cart = styled.section`
  display: flex;
  justify-content: center;
  /* background-color: aqua; */
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  /* background-color: red; */
`;

export const HeadingInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Heading = styled.h4`
  display: flex;
  gap: 5px;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Date = styled.p`
  font-weight: 600;
`;

export const CartInfo = styled.div`
  padding: 1.6rem;
  background-color: var(--white-clr);
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    font-weight: 400;
  }

  &:nth-child(2) {
    background-color: #ffe200;
  }

  &:nth-child(3) p {
    color: #ff2d55;
  }
`;

type ButtonProps = {
  enabled?: boolean;
};

export const Button = styled(Link)<ButtonProps>`
  padding: 12px 16px;
  border: 0;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${(props) =>
    props.enabled ? 'var(--white-clr)' : 'var(--border-clr)'};
  background-color: ${(props) =>
    props.enabled ? 'var(--main-orange-clr)' : 'transparent'};
  border: 1px solid
    ${(props) =>
      props.enabled ? 'var(--main-orange-clr)' : 'var(--border-clr)'};
  cursor: ${(props) => (props.enabled ? 'pointer' : 'not-allowed')};
`;
