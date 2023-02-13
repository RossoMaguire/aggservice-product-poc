import { gql } from '@apollo/client';

const GET_UNIFIED_PRODUCT = gql`
  query GetUnifedProduct($productId: ID!, $bcProductId: ID!) {
    product(id: $productId, idType: DATABASE_ID) {
      name
      description
      image {
        mediaItemUrl
      }
      video
      technicalDetails
    }
    BigC_node(id: $bcProductId) {
      ... on BigC_Product {
        sku
        availabilityV2 {
          status
        }
        prices {
          basePrice {
            value
          }
          salePrice {
            value
          }
        }
      }
    }
  }
`;

export default GET_UNIFIED_PRODUCT;
