import Image from 'next/image';
import styled from 'styled-components';

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.8rem;
  top: calc(48rem / 3);
  user-select: none;
  align-self: center;
  position: absolute;
`;

export const CartImage = styled(Image)`
  margin: 0 auto;
  margin-bottom: 1.6rem;
`;
