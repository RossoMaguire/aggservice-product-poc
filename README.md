## Instructions

The `storefront-product` directory holds the frontend ( product page ) which displays the data.

The `ProductContext` component fetches the Shopify and WordPress data from the aggregation service built with Wundergraph, which is doing the stitching by slug ( WordPress ) and handle ( Shopify ), and makes it available globally to the other components that need to render their specific information from it.

### Running the app for local development

1. Create the following `.env.local` files:

   `VITE_UNIFIED_BASE_URL`=the graphql endpoint of the storefront aggregation service wether you have it running locally or somewhere accessible

2. To run the frontend (product page)

   `cd storefront-product`

   `npm run dev`

### Example

![Example Screenshot](https://github.com/RossoMaguire/aggservice-product-poc/blob/5e5f2010ad65ded4d8df4e4c0dd7ce24135d4e93/storefront-product/example.png)

### Demo tips

The application is deployed [here](https://aggservice-product-i4kb4yik6-rossomaguire.vercel.app/). If you open the Network tab in Chrome Dev Tools and reload the page you will see a request to graphql. Click on this and go to the Preview tab to open up the unified response.

You can open a few tabs alongside the app to show the different parts we are bringing together with this concept.

1. [Open the ACF Dashboard in WordPress](https://bpatlasprodsho.wpengine.com/wp-admin/post.php?post=4755&action=edit) to show the ACF product model and the various fields that belong to it. The [product itself that is served by the unified API can be found here](https://bpatlasprodsho.wpengine.com/wp-admin/edit.php?post_type=product)

<img width="1760" alt="Screenshot 2023-07-17 at 14 25 59" src="https://github.com/RossoMaguire/aggservice-product-poc/assets/48026075/67941196-3b25-4757-8448-15be8ce0adf1">


2. [Open the WPGraphQL IDE in WordPress](https://bpatlasprodsho.wpengine.com/wp-admin/admin.php?page=graphiql-ide) and paste the below query (then hit play) to show a request for just the WordPress product content:

```
query GetProduct {
  product(id: "radiowave-shirt", idType: SLUG) {
    title
    slug
    productFields {
      title
      technicalDetails
      description
      video
      image {
        node {
          mediaItemUrl
        }
      }
    }
  }
}
```

3. [Open the Shopify Storefront API playground](https://admin.shopify.com/store/blueprintbetatest/apps/5a3c93b0e9bc8d5abf63531fcd829b5d) and paste the below query (then hit play) to show a request for just the Shopify product data which matches the slug of the WordPress ACF product seen in step 1.

```
{
  product(handle: "radiowave-shirt") {
    collections(first: 100) {
      nodes {
        handle
        title
      }
    }
    variants(first: 100) {
      nodes {
        id
        sku
        quantityAvailable
        image {
          url
        }
        selectedOptions {
          name
          value
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
    }
  }
}
```

4. Open the [unified query endpoint that this application uses](https://aggservice-api-poc.wundergraph.dev/operations/Product?slug=%22radiowave-shirt%22), to show the above 2 queries as one served from Wundergraph.



