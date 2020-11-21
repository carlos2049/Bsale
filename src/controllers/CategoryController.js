import models from '../models';
const { Category } = models;

export const getCategories = async (req, res) => {
  
  const categories = await Category.findAll();

  res.json(categories);
}