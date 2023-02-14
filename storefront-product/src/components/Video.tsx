import { GridItem } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const Video = ({ source }: CardSectionProps) => {
  const { unifiedResponse } = useProductContext();

  if (unifiedResponse?.unifiedLoading) {
    return <p>...Loading</p>;
  }

  if (unifiedResponse?.unifiedError) {
    return <p>Error</p>;
  }

  return (
    <GridItem id='video' colSpan={3} rowSpan={3} style={{ overflow: 'hidden' }}>
      <SourceLogo src={source} />
      <iframe
        width='100%'
        height='100%'
        src={unifiedResponse?.wpData?.video}
        title='YouTube video player'
      ></iframe>
    </GridItem>
  );
};

export default Video;
