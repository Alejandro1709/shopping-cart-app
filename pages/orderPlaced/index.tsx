import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Success from '../../public/success.svg';
import Wrapper from '../../components/Wrapper';
import Link from 'next/link';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const Heading = styled.h1`
  font-weight: 600;
`;

const OrderId = styled.span`
  font-weight: 700;
`;

const NavigateToHome = styled(Link)`
  text-decoration: none;
  color: var(--blue-clr);
`;

function OrderPlacedPage() {
  const [orderId, setOrderId] = useState<number>(1);

  useEffect(() => {
    setOrderId((prev) => prev + 1);
  }, []);

  return (
    <>
      <Head>
        <title>🎉 Order Placed!</title>
      </Head>
      <Wrapper>
        <ContentWrapper>
          <Heading>Thank You!</Heading>
          <p>
            Your order <OrderId>P000{orderId}</OrderId> has been registered
          </p>
          <NavigateToHome href='/'>Continue Shopping</NavigateToHome>
        </ContentWrapper>
        <Image src={Success} width={400} height={400} alt='thank-you pic' />
      </Wrapper>
    </>
  );
}

export default OrderPlacedPage;
