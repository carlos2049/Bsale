import express from 'express';
import products from './products.routes'

const router = express.Router();


router.get('/', (req, res) => {
  res.json({
    message: 'rutaaa'
  });
});

router.use('/products', products)

export default router;