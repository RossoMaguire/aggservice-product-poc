import { QueryClientProvider, QueryClient } from 'react-query';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Center } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';
import { ProductProvider } from './components/context/ProductContext';
import config from './config';

// Unified GraphQL Client
const unifiedClient = new ApolloClient({
  uri: config.unified.baseURL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={unifiedClient}>
        <ProductProvider>
          <Center pt={100}>
            <ProductCard />
          </Center>
        </ProductProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
