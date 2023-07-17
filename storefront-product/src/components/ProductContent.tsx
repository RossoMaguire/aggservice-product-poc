import { Box, GridItem, Heading } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const ProductContent = ({ source }: CardSectionProps) => {
  const { unifiedProduct } = useProductContext();

  const title = unifiedProduct?.data?.wordpress_product?.productFields?.title
  const description = unifiedProduct?.data?.wordpress_product?.productFields?.description

  return (
    <GridItem id='product-details' colSpan={3} rowSpan={1} textAlign='left'>
      <Box w='100%' p={4}>
        <SourceLogo src={source} />
        <Heading as='h2' size='xl'>
          {title}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          style={{
            whiteSpace: 'pre-line',
            textAlign: 'left',
            marginTop: '30px',
          }}
        ></div>
      </Box>
    </GridItem>
  );
};

export default ProductContent;
