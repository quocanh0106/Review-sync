const ShopifyBuy = require('shopify-buy');
const { request, gql } = require('graphql-request');
const fs = require('fs');


const shopifyStorePersonalchic = 'personal-chic.myshopify.com';
const accessTokenPersonalchic = '9247cc90dc368c9df16839d62b1df007';

const shopifyStoreCadeuplus = 'cadeau-plus-fr.myshopify.com';
const accessTokenCadeuplus = 'ee5b6915d6644e89cf473beacc41c754';

const shopifyStoreGeschenkemall = 'geschenke-mall.myshopify.com';
const accessTokenGeschenkemall = '4753067ae5ef4ac3816b3d7cbb8c216e';

const shopifyStoreCustomchic = 'customchic-uk-uk.myshopify.com';
const accessTokenCustomchic = '500ada5a1d1aaae05ae3661c29a4feb7';

const shopifyStoreVivelamode = 'vive-la-mode-fr.myshopify.com';
const accessTokenVivelamode = '47235aaec1c7cd11fb767f20c686e10e';

const shopifyStoreDietollemode = 'dietollemode.myshopify.com';
const accessTokenDietollemode = '96fcd38b1a835e997ee0c9e55c12a427';

const fetchShopifyProducts = async () => {
  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStorePersonalchic}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenPersonalchic
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsPersonalchic.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }

  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStoreCadeuplus}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenCadeuplus
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsCadeuplus.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }
  
  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStoreGeschenkemall}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenGeschenkemall
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsGeschenkemall.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }

  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStoreCustomchic}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenCustomchic
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsCustomchic.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }

  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStoreVivelamode}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenVivelamode
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsVivelamode.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }

  try {
    // Xây dựng GraphQL truy vấn
    const query = gql`
      query ($cursor: String) {
        products(first: 250, after: $cursor) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `;
    
    // Endpoint GraphQL của Shopify
    const endpoint = `https://${shopifyStoreDietollemode}/api/2023-10/graphql.json`;

    let hasNextPage = true;
    let cursor = null;
    let products = [];

    while (hasNextPage) {
      // Gửi truy vấn GraphQL đến Shopify Storefront API
      const data = await request(endpoint, query, { cursor }, {
        'X-Shopify-Storefront-Access-Token': accessTokenDietollemode
      });

      // Lấy thông tin sản phẩm từ truy vấn
      const pageInfo = data.products.pageInfo;
      const edges = data.products.edges;
      // Lưu thông tin sản phẩm vào mảng products
      products = products.concat(edges);

      // Cập nhật cursor cho lần gọi tiếp theo
      cursor = pageInfo.endCursor;

      // Kiểm tra xem còn trang kế tiếp hay không
      hasNextPage = pageInfo.hasNextPage;
    }
    // Ghi dữ liệu vào tệp JSON
    await fs.promises.writeFile('ShopifyProductsDietollemode.json', JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error fetching Shopify products:', error.message);
  }
}

fetchShopifyProducts()