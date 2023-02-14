import { Box, GridItem, Heading } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const ProductContent = ({ source }: CardSectionProps) => {
  const { unifiedResponse } = useProductContext();

  if (unifiedResponse?.unifiedLoading) {
    return <p>...Loading</p>;
  }

  if (unifiedResponse?.unifiedError) {
    return <p>Error</p>;
  }

  return (
    <GridItem id='product-details' colSpan={3} rowSpan={1} textAlign='left'>
      <Box w='100%' p={4}>
        <SourceLogo src={source} />
        <Heading as='h2' size='xl'>
          {unifiedResponse?.wpData?.name}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: unifiedResponse?.wpData?.description,
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
