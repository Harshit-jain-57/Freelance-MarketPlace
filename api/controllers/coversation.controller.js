import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const getConversations = async (req, res, next) => {
  try {
    const conversation = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};
export const createConversations = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readByseller: req.isSeller,
    readBybuyer: !req.isSeller,
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).send(savedConversation);
  } catch (err) {
    next(err);
  }
};
export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({
      id: req.params.id,
    });
    if(!conversation) return next(createError(404,"Not Found!"))
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};
export const updateConversations = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readByseller: true } : { readBybuyer: true }),
        },
      },
      { new: true }
    );
    res.status(200).send(updateConversations);
  } catch (err) {
    next(err);
  }
};
