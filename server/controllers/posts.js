import mongoose from "mongoose";
import PostMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postsMessage = await PostMessage.find();

    res.status(200).json(postsMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const body = req.body;

  const newPost = new PostMessage(body);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePosts = async (req, res) => {
  const body = req.body;
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with this id");

  const updatePost = await PostMessage.findByIdAndUpdate(_id, body, {
    new: true,
  });

  res.json(updatePost);
};
export const deletePosts = async (req, res) => {
  const body = req.body;
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with this id");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "post deleted" });
};
