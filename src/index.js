import express from 'express'
import dotenv from 'dotenv'
import { getProduct } from './services/shopify.js'
dotenv.config()

const PORT = process.env.DEV_PORT

const app = express()
app.use(express.json())

app.get('/', async (request, response) => {
  const product = await getProduct()
  console.log('Product: ', product)
  return response.status(200).json(product)
})

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`)
})
