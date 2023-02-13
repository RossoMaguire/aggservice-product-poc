import { GridItem, Center } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';
import SaleTag from './SaleTag';

const Image = ({ source }: CardSectionProps) => {
  const { unifiedResponse } = useProductContext();

  if (unifiedResponse?.unifiedLoading) {
    return <p>...Loading</p>;
  }

  if (unifiedResponse?.unifiedError) {
    return <p>Error</p>;
  }

  return (
    <GridItem id='image' colSpan={2} rowSpan={2}>
      {unifiedResponse?.unifiedData?.BigC_node?.prices?.salePrice && (
        <SaleTag />
      )}
      <img
        src={unifiedResponse?.unifiedData?.product?.image?.mediaItemUrl}
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
