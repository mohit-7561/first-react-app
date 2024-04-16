import { useContext, useRef } from "react";
import { PostListData } from "../store/post-list";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIDElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionElement.current.value;
    const tag = tagElement.current.value.split(" ");

    userIDElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
    addPost(userID, title, content, reaction, tag);
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userID" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIDElement}
          className="form-control"
          id="userID"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?....."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          rows={5}
          ref={contentElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell me more about your post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reaction
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtag
        </label>
        <input
          type="text"
          ref={tagElement}
          className="form-control"
          id="tags"
          placeholder="Enter your hashtags "
        />
      </div>

      <button type="Post" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
