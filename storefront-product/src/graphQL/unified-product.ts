import { gql } from '@apollo/client';

const GET_UNIFIED_PRODUCT = gql`
  query GetUnifiedProduct($productId: ID!, $idType: ProductIdType) {
    product(id: $productId, idType: $idType) {
      sku
      name
      description
      image {
        mediaItemUrl
      }
      video
      technicalDetails
      bcSite {
        product {
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
  }
`;

export default GET_UNIFIED_PRODUCT;
