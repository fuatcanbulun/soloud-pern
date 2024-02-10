import { Get, Post } from "./requests";

export const addFavorite = async (user_id, video_id) => {
  const postBody = { user_id, video_id };
  let result;
  await Post(
    "favorites",
    postBody,
    (response) => {
      result = response;
    },
    (error) => {
      result = error;
    }
  );
  return result;
};

export const getFavorites = async (user_id) => {
  let result;
  await Get(
    `favorites/${user_id}`,
    (response) => {
      result = response;
    },
    (error) => {
      result = error;
    }
  );
  return result;
};
