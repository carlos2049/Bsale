import models from '../models';
const { Product } = models;

export const getProducts = async (req, res) => {
  
  const { categoryId } = req.params;

  const productos = await Product.findAll({
    where: {
      category: categoryId
    }
  });

  res.json(productos);
}