import models from '../models';
const { Product } = models;

export const getProducts = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const product = await Product.findAll({
      where: {
        category: categoryId,
      },
    });

    const fixProduct = product.map((x, i) => {
      let object = x.dataValues;
      let addUrl = {
        url_image: object.url_image ? object.url_image : '',
      };
      object.url_image = addUrl.url_image;
      return object;
    });
    console.log(fixProduct);
    // const nuevo = productos.url_image === null ? '' : productos.url;

    res.json(fixProduct);
  } catch (error) {
    console.log(error);
  }
};
