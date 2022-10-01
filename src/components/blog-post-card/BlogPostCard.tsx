import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogPostCard.scss";

interface BlogPostCardProps {
  data: BBlogPost;
  size?: "sm" | "md" | "lg" | "responsive";
  className?: string;
  style?: CSSProperties;
}

const BlogPostCard = ({
  data,
  size,
  ...props
}: BlogPostCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/works/" + data.id)}
      className={
        "b-blog-post-card nostyle-anchor " + props.className + " " + size
      }
      style={props.style}
    >
      {/* <img src={data.img_src} className="b-blog-post-card-img" alt="" /> */}
      <div className="b-blog-post-card-tags-container">
        {data.tags.map((tag) => (
          <div className="b-blog-post-card-tag">{tag}</div>
        ))}
        <div className="b-blog-post-card-date">
          {epochToDate(data.date, "numeric")}
        </div>
      </div>
      <div className="b-blog-post-card-title">{data.title}</div>
    </div>
  );
};

export default BlogPostCard;
