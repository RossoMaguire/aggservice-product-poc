import { GridItem, Flex, Center, Text } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const ProductData = ({ source }: CardSectionProps) => {
  const { unifiedProduct } = useProductContext();

  const sku = unifiedProduct?.data?.wordpress_product?._join?.shopify_product?.variants?.nodes[0]?.sku
  const comparePrice = unifiedProduct?.data?.wordpress_product?._join?.shopify_product?.variants?.nodes[0]?.compareAtPrice?.amount
  const price = unifiedProduct?.data?.wordpress_product?._join?.shopify_product?.variants?.nodes[0]?.price?.amount
  const available = unifiedProduct?.data?.wordpress_product?._join?.shopify_product?.variants?.nodes[0]?.quantityAvailable

  return (
    <GridItem id='product-details' colSpan={3} rowSpan={1}>
      <SourceLogo src={source} />
      <Flex alignItems='left' p={4} justifyContent='space-between'>
        <Text>
          <b>SKU:</b> {sku}
        </Text>
        <Text>
          <b>Price:</b>{' '}
          $
          {comparePrice || price}
          {' '}
          {comparePrice && <del>{price}</del>}
        </Text>
        <Text>
          <b>Availability:</b> {available}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default ProductData;
