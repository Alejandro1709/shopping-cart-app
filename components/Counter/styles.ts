import styled from 'styled-components';

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 4px;
  user-select: none;
  width: 18rem;
  color: white;
  gap: 2rem;
  background-color: var(--main-orange-clr);
  z-index: 100;
`;

export const CounterButton = styled.button`
  border-radius: 50%;
  border: 0;
  font-size: 2.8rem;
  font-weight: 300;
  color: white;
  background: transparent;
`;
