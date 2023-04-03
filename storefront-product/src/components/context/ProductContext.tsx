import { createContext, useContext } from 'react';
import { useQuery as useApolloQuery } from '@apollo/client';
import GET_UNIFIED_PRODUCT from '../../graphQL/unified-product';

const defaultValues: any = {};
export const ProductContext = createContext(defaultValues);

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: any) {
  // sourcing unified data from the Storefront POC aggregation server
  const {
    data: unifiedData,
    loading: unifiedLoading,
    error: unifiedError,
  } = useApolloQuery(GET_UNIFIED_PRODUCT, {
    // This is for one specific product
    variables: { productId: 900, idType: 'DATABASE_ID' },
  });

  const value = {
    unifiedResponse: {
      bcData: unifiedData?.product?.bcSite?.product,
      wpData: unifiedData?.product,
      unifiedLoading,
      unifiedError,
    },
  };

  return (
    <>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </>
  );
}
