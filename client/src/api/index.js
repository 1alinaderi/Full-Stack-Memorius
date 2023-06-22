import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePosts = (currentId, newPost) =>
  axios.patch(`${url}/${currentId}`, newPost);
export const deletePosts = (currentId) => axios.delete(`${url}/${currentId}`);
