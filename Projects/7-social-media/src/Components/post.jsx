import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { PostListData } from "../store/post-list";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <IoMdCloseCircle />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success reactions" role="alert">
        This Post has been reacted to {post.reactions} peoples
      </div>
    </div>
  );
};

export default Post;
