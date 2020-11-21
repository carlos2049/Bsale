import express from 'express';
import products from './products.routes'
import categories from './categories.routes'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'rutaaa'
  });
});

router.use('/products', products)
router.use('/categories', categories)

export default router;