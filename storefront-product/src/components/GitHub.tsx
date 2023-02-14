import { GridItem, Box } from '@chakra-ui/react';

const GitHub = () => {
  return (
    <GridItem
      id='technical-details'
      colSpan={5}
      rowSpan={1}
      borderTop='1px'
      borderColor='gray.200'
    >
      <Box float='right'>
        Browse this code on
        <a
          href='https://github.com/RossoMaguire/storefront-product-poc'
          target='_blank'
        >
          <img
            style={{ height: '30px' }}
            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png'
          />
        </a>
      </Box>
    </GridItem>
  );
};

export default GitHub;
