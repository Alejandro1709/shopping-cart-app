import styled from 'styled-components';

export const Product = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.6rem;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 1px solid var(--border-clr);
`;

export const Left = styled.div`
  display: flex;
  width: fit-content;
  background-color: white;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  flex: 1 0 0;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Price = styled.p`
  font-size: 2.133rem;
  font-weight: 600;
  color: var(--red-clr);
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  width: fit-content;
`;

export const AddButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: 0;
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  background-color: var(--main-orange-clr);
  cursor: pointer;
`;
