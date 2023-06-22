import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePosts = (currentId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(currentId, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePosts = (currentId) => async (dispatch) => {
  try {
    await api.deletePosts(currentId);
    dispatch({ type: "DELETE", payload: currentId });
  } catch (error) {
    console.log(error);
  }
};
