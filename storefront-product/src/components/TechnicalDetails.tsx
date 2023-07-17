import { GridItem } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const TechnicalDetails = ({ source }: CardSectionProps) => {
  const { unifiedProduct } = useProductContext();

  const details = unifiedProduct?.data?.wordpress_product?.productFields?.technicalDetails

  return (
    <GridItem id='technical-details' colSpan={2} rowSpan={2}>
      <SourceLogo src={source} />
      <div
        dangerouslySetInnerHTML={{
          __html: details,
        }}
        style={{ whiteSpace: 'pre-line', textAlign: 'left', padding: '14px' }}
      ></div>
    </GridItem>
  );
};

export default TechnicalDetails;
