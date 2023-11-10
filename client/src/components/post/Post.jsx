import "./post.css";
import postbgImg from "./../../assets/images/sunset.jpg";
import { Link } from "react-router-dom";

const Post = ({post}) => {

  const PF = "http://localhost:4500/api/images/";

  return (
    <div className="post">
      {post.photo && (<img className="postImg" src={PF + post.photo} alt="postImg" />)}
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c,index)=>(
              <span key={index} className="postCat">{c}</span>
            ))
          }
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <div className="postDate">
          {new Date(post.createdAt).toDateString()}
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Post;
