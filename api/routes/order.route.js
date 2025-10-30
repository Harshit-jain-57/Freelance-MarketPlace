import express from 'express';
import {verifyToken} from "../middleware/jwt.js";
import {createOrder,getOrder,intent} from '../controllers/order.controller.js';

const router=express.Router()

router.post("/:gigId",verifyToken,createOrder)
router.get("/",verifyToken,getOrder)
router.get("/create-checkout-session",verifyToken,intent)
export default router;