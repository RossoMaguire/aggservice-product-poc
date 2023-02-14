## Instructions

The `storefront-product` directory holds the frontend (product page) which displays the data.

The `ProductContext` component fetches the BigCommerce and WordPress data from the storefront API aggregation service, which is doing the stitching, and makes it available globally to the other components that need to render their specific information from it.

### Running the app for local development

1. Create the following `.env.local` files:

   `VITE_UNIFIED_BASE_URL`=the graphql endpoint of the storefront aggregation service wether you have it running locally or somewhere accessible

2. To run the frontend (product page)

   `cd storefront-product`

   `npm run dev`

### Example

![Example Screenshot](https://github.com/RossoMaguire/storefront-product-poc/blob/master/example.png?raw=true)

### Demo tips

The application is [deployed here](https://storefront-product-poc.vercel.app/). If you open the `Network` tab in **_Chrome Dev Tools_** and reload the page you will see a request to `graphql`.
Click on this and go to the `Preview` tab to open up the unified response.

You can open a few tabs alongside the app to show the different parts we are bringing together with this concept.

1. Open the [ACM admin in WordPress](https://ecombluedemo.wpengine.com/wp-admin/admin.php?page=atlas-content-modeler&view=edit-model&id=product) to show the content model

2. Open the [WPGraphQL IDE](e&page=graphiql-ide&query=I4VwpgTgngBAcmA7gRXNGBvAUDGAHCAewBMQBjAFwAoBLYgLhgCIAOANgCYmAaGOgFSh4wjACIBBfuIBC4gMoBRAPoBJUQEpMOXDAB2AQwC2YbbmJgAzmQg08FGoV2m%2Bh-QHMw2HTuPEa%2BlQowQwBVCAAbZwBfZwA3OjBCZyCyAAtdGjJ9cNEwCn0acIttGKigA) and paste the below query (then hit play) to show a request for just the WordPress product content

```
query productById {
  product(id: "862", idType: DATABASE_ID) {
    sku
    name
    description
    image {
      mediaItemUrl
    }
    video
    technicalDetails
  }
}
```

3. Open the [BigCommerce Storefront API playground](https://store-sowr02yzax.mybigcommerce.com/manage/settings-list) (scroll to bottom to find the link), navigate to the tab for **_Single Product_** and paste the below query (then hit play) to show a request for just the BigCommerce product data

```
 query productById {
   site {
     product(entityId: 86) {
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
```

4. Open the [unified query](https://github.com/RossoMaguire/storefront-product-poc/blob/master/storefront-product/src/graphQL/unified-product.ts) that this application uses, to show the above 2 queries as one.

5. An example unified response can also be shown [which is located here](https://github.com/RossoMaguire/storefront-product-poc/blob/master/unified-response-sample.json) or in the `Network` tab in **_Chrome Dev Tools_** as mentioned previously.
