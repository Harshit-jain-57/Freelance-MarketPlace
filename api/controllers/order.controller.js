import createError from "../utils/createError.js";
import Order from "../models/order.model.js"
import Gig from "../models/gig.model.js"
import Stripe  from "stripe"
export const intent =async(req,res,next)=>{
    const stripe=new Stripe(process.env.STRIPE);
    try{

    }catch(err){
        next(err)
    }
}
export const createOrder= async(req,res,next)=>{
    try{
        const gig = await Gig.findById(req.params.gigId)

        const newOrder=new Order({
            gigId:gig._id,
            img:gig.cover,
            title:gig.title,
            price:gig.price,
            sellerId:gig.userId,
            buyerId:req.userId,
            payment_intent:"temporary"
        });
        await newOrder.save()
        res.status(200).json({ message: "Order created", payment_intent: "temporary" });
    }
    catch(err){
        next(err)
    }
}
export const getOrder= async(req,res,next)=>{
    try{
        const orders= await Order.find({
            ...(req.isSeller? {sellerId:req.userId}:{buyerId:req.userId}),
            isCompleted:true,
        });
        res.status(200).send(orders)
    }
    catch(err){
        next(err)
    }
}