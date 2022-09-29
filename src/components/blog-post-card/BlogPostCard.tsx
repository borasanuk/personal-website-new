import { Link } from "react-router-dom";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogPostCard.scss";

interface BlogPostCardProps {
  data: BBlogPost;
}

const BlogPostCard = ({ data }: BlogPostCardProps): JSX.Element => {
  return (
    <Link to={"/blog/" + data.id} className="b-blog-post-card">
      <div className="b-blog-post-card-img-container">
        <img src={data.img_src} alt="" />
      </div>
      <div className="b-blog-post-card-details">
        <div className="b-blog-post-card-tags-container">
          <div className="b-blog-post-card-tag">{epochToDate(data.date)}</div>
          {data.tags.map(tag => <div className="b-blog-post-card-tag">{tag}</div>)}
        </div>
        <div className="b-blog-post-card-title">{data.title}</div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
