import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://shopping-cart-api-ig8q.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
