import { Grid } from '@chakra-ui/react';
import Image from './Image';
import ProductData from './ProductData';
import ProductContent from './ProductContent';
import TechnicalDetails from './TechnicalDetails';
import Video from './Video';

const ProductCard = () => {
  return (
    <Grid
      h='800px'
      w='1040px'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <Image source='wordpress.jpeg' />
      <ProductContent source='wordpress.jpeg' />
      <ProductData source='bigcommerce.png' />
      <TechnicalDetails source='wordpress.jpeg' />
      <Video source='wordpress.jpeg' />
    </Grid>
  );
};

export default ProductCard;
