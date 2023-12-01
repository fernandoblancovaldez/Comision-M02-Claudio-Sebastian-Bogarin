import { postModel } from "../models/post-model.js";

export function ctrlCreatePost(req, res) {
  const { title, description, author, comment, imageURL } = req.body;

  postModel.create({
    title,
    description,
    author,
    comment,
    imageURL,
  });

  res.sendStatus(201);
}

export function ctrlGetAllPosts(req, res) {
  const posts = postModel.findAll();
  res.json(posts);
}

export function ctrlGetPostById(req, res) {
  const { postId } = req.params;
  const post = postModel.findOne({ id: postId });
  if (!post) return res.sendStatus(404);
  res.json(post);
}

export function ctrlUpdatePost(req, res) {
  const { postId } = req.params;
  const { title, description, author, comment, imageURL } = req.body;
  const updatedPost = postModel.update(postId, {
    title,
    description,
    author,
    comment,
    imageURL,
  });

  if (!updatedPost) return res.sendStatus(404);

  res.sendStatus(205);
}
