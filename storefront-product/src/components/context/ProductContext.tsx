import { createContext, useContext,useEffect, useState } from 'react';
import config from '../../config';


const defaultValues: any = {};
export const ProductContext = createContext(defaultValues);

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: any) {
  
  const [unifiedProduct, setUnifiedProduct] = useState()
  
  const params = "?slug='radiowave-shirt'";

  useEffect(() => {
    const fetchUnifiedProduct = async () => {
      const response = await fetch(import.meta.env.VITE_UNIFIED_BASE_URL+params);
      const product = await response.json();
      setUnifiedProduct(product)
    }

    fetchUnifiedProduct();

  }, [])

  console.log(unifiedProduct)

  const value = {
    unifiedProduct
  }


  return (
    <>
      <ProductContext.Provider value={value}>
        {children}
      </ProductContext.Provider>
    </>
  );
}
