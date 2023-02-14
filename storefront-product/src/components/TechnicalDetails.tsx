import { GridItem } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const TechnicalDetails = ({ source }: CardSectionProps) => {
  const { unifiedResponse } = useProductContext();

  if (unifiedResponse?.unifiedLoading) {
    return <p>...Loading</p>;
  }

  if (unifiedResponse?.unifiedError) {
    return <p>Error</p>;
  }

  return (
    <GridItem id='technical-details' colSpan={2} rowSpan={2}>
      <SourceLogo src={source} />
      <div
        dangerouslySetInnerHTML={{
          __html: unifiedResponse?.wpData?.technicalDetails,
        }}
        style={{ whiteSpace: 'pre-line', textAlign: 'left', padding: '14px' }}
      ></div>
    </GridItem>
  );
};

export default TechnicalDetails;
