import { v4 as uuid } from "uuid";

export let listOfPosts = [
  {
    id: uuid(),
    title: "React",
    description: "Mi Primer APP",
    author: "Fernando",
    comment: "Esta es mi primer app",
    imageURL:
      "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    createdAt: new Date().toLocaleTimeString("en-US"),
  },
];

const createNewPost = ({ title, description, author, comment, imageURL }) => {
  if (!title) return null;

  const newPost = {
    id: uuid(),
    title,
    description,
    author,
    comment,
    imageURL,
    createdAt: new Date().toLocaleTimeString("en-US"),
  };

  listOfPosts.push(newPost);

  return newPost;
};

const getAllPosts = () => [...listOfPosts];

const getPostById = ({ id }) => {
  const post = listOfPosts.find((post) => post.id === id);
  return post;
};

const findPostByIdAndUpdate = (id, data) => {
  const post = getPostById({ id });
  if (!post) return null;
  listOfPosts = listOfPosts.map((post) => {
    if (post.id === id) {
      if (data.title) post.title = data.title;
      if (data.description) post.description = data.description;
      if (data.author) post.author = data.author;
      if (data.comment) post.comment = data.comment;
      if (data.imageURL) post.imageURL = data.imageURL;

      return post;
    }
    return post;
  });
  return { ...post, ...data };
};

const deletePostById = ({ id }) => {
  listOfPosts = listOfPosts.filter((post) => post.id !== id);
};

export const postModel = {
  findAll: getAllPosts,
  findOne: getPostById,
  create: createNewPost,
  update: findPostByIdAndUpdate,
  destroy: deletePostById,
};
