import { GridItem, Center } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';
import SaleTag from './SaleTag';

const Image = ({ source }: CardSectionProps) => {
  const { unifiedProduct } = useProductContext();

  const onSale = unifiedProduct?.data?.wordpress_product?._join?.shopify_product?.variants?.nodes[0]?.compareAtPrice;
  const image = unifiedProduct?.data?.wordpress_product?.productFields?.image?.node?.mediaItemUrl;

  return (
    <GridItem id='image' colSpan={2} rowSpan={2}>
      {onSale && <SaleTag />}
      <img
        src={image}
        alt='unified Image'
        style={{ width: '100%' }}
      />
      <Center>
        <SourceLogo src={source} />
      </Center>
    </GridItem>
  );
};

export default Image;
