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

![Example Screenshot](https://github.com/RossoMaguire/aggservice-product-poc/blob/master/example.png?raw=true)

### Demo tips

TBC
