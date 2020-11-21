import models from '../models';
const { Product } = models;

export const products = async (req, res) => {

  console.log('holaa')
  const productos = await Product.findAll()

  res.json(productos)
}