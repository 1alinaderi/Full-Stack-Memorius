import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
