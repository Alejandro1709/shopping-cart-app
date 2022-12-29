import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Head from 'next/head';
import Alert from '../components/Alert';
import Wrapper from '../components/Wrapper';
import SearchInput from '../components/SearchInput';
import ProductsList from '../components/ProductsList';
import Cart from '../components/Cart';
import styled from 'styled-components';
import type Product from '../types/product';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { CartProductCard } from '../components/ProductCard/ProductCard';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6.4rem;
  width: 50%;
  background: transparent;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 45rem;
  gap: 1.6rem;
`;

const ListHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 48rem;
  border-radius: 4px;
  background-color: var(--white-clr);
`;

const Right = styled.div`
  height: calc(48rem - 4px);
  align-self: flex-end;
  width: 50rem;
  /* background-color: var(--white-clr); */
`;

type HomeProps = {
  products: Array<Product>;
};

export default function Home({ products }: HomeProps) {
  const { cart, setProductsAvailable } = useProducts();

  const combineDuplicateProducts = (products: Array<Product>) => {
    const combinedProducts = products.reduce((acc, product) => {
      const existingProduct = acc.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        return acc;
      } else {
        return acc.concat(product);
      }
    }, [] as Array<Product>);
    return combinedProducts;
  };

  useEffect(() => {
    setProductsAvailable(products);
    // eslint-disable-next-line
  }, [products]);

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <Container>
          <Left>
            <SearchInput
              id='searchProducts'
              name='searchProducts'
              placeholder='Search Products'
            />
            <ListHolder>
              {combineDuplicateProducts(cart).length > 0
                ? combineDuplicateProducts(cart).map((product) => (
                    <CartProductCard key={product.id} product={product} />
                  ))
                : null}
              {products.length > 0 ? <ProductsList /> : <Alert />}
            </ListHolder>
          </Left>
          <Right>
            <Cart />
          </Right>
        </Container>
      </Wrapper>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query getProducts {
        products {
          id
          title
          imageUrl
          price
          quantity
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
    },
  };
}
