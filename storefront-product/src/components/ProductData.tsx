import { GridItem, Flex, Center, Text } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const ProductData = ({ source }: CardSectionProps) => {
  const { unifiedResponse } = useProductContext();

  if (unifiedResponse?.unifiedLoading) {
    return <p>...Loading</p>;
  }

  if (unifiedResponse?.unifiedError) {
    return <p>Error</p>;
  }

  return (
    <GridItem id='product-details' colSpan={3} rowSpan={1}>
      <SourceLogo src={source} />
      <Flex alignItems='left' p={4} justifyContent='space-between'>
        <Text>
          <b>SKU:</b> {unifiedResponse?.bcData?.sku}
        </Text>
        <Text>
          <b>Price:</b>{' '}
          {unifiedResponse?.bcData?.prices?.salePrice?.value ||
            unifiedResponse?.bcData?.basePrice?.value}
        </Text>
        <Text>
          <b>Availability:</b> {unifiedResponse?.bcData?.availabilityV2?.status}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default ProductData;
