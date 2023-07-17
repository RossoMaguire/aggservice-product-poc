import { Center } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';
import { ProductProvider } from './components/context/ProductContext';

function App() {
  return (
    <div className='App'>
        <ProductProvider>
          <Center pt={20}>
            <ProductCard />
          </Center>
        </ProductProvider>
    </div>
  );
}

export default App;
