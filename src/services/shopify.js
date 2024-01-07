import '@shopify/shopify-api/adapters/node'
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api'
import { restResources } from '@shopify/shopify-api/rest/admin/2023-10'

const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: '11e0c8c9b77c1da50c289c6c8e58765d',
  apiSecretKey: '44093c806f058f3e61bbf6939f7abd7e',
  adminApiAccessToken: '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',
  apiVersion: LATEST_API_VERSION,
  scopes: ['read_products'],
  hostName: 'https://youtube-raphael-lima.myshopify.com/',
  isEmbeddedApp: false,
  isCustomStoreApp: true,
  restResources,
})

const session = shopify.session.customAppSession(
  'youtube-raphael-lima.myshopify.com',
)

export const getProduct = async () => {
  const client = new shopify.clients.Rest({ session })
  const data = await client.get({
    path: 'products/7603098321077',
  })

  console.log('Data', data)
  return data
}
