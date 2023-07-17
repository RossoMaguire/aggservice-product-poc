import { GridItem } from '@chakra-ui/react';
import { useProductContext } from './context/ProductContext';
import SourceLogo from './SourceLogo';

const Video = ({ source }: CardSectionProps) => {
  const { unifiedProduct } = useProductContext();

  const video = unifiedProduct?.data?.wordpress_product?.productFields?.video

  return (
    <GridItem id='video' colSpan={3} rowSpan={3} style={{ overflow: 'hidden' }}>
      <SourceLogo src={source} />
      <iframe
        width='100%'
        height='100%'
        src={video}
        title='YouTube video player'
      ></iframe>
    </GridItem>
  );
};

export default Video;
