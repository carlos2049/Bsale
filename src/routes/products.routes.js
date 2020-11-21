import express from "express";
import {
  products
} from "../controllers/ProductController";

const router = express.Router();

router.get('/', products);

export default router;