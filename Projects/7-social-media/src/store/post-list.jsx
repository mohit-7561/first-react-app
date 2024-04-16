import { useReducer } from "react";
import { createContext } from "react";

const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currpostList, action) => {
  let newPostList = currpostList;
  if (action.type === "DELETE_POST") {
    newPostList = currpostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currpostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userID, title, content, reaction, tag) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: content,
        user_id: userID,
        reactions: reaction,
        tags: tag,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postID },
    });
  };

  return (
    <PostListData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
export { PostListData };

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Get a Job",
    body: "My name is Mohit Kumar, I work everyday for my goal",
    user_id: "7",
    reactions: 12,
    tags: ["dream", "goals"],
  },

  {
    id: "2",
    title: "Get a Home",
    body: "I want to make My Parents Proud",
    user_id: "9",
    reactions: "51",
    tags: ["grind", "proud"],
  },
];
