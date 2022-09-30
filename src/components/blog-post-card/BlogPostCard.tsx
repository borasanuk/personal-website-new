import { CSSProperties } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogPostCard.scss";

type BlogPostColorOption =
  | "pink"
  | "yellow"
  | "olive"
  | "black"
  | "white"
  | "blue"
  | "red"
  | "cyan";

export const blogPostColors: BlogPostColorOption[] = [
  "pink",
  "olive",
  "blue",
  "red",
  "cyan",
  "black",
  "yellow",
  "white",
];

interface BlogPostCardProps {
  data: BBlogPost;
  color?: BlogPostColorOption;
  style?: CSSProperties;
}

const BlogPostCard = ({
  data,
  color,
  style,
}: BlogPostCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/blog/" + data.id)}
      className={"b-blog-post-card nostyle-anchor " + color}
      style={style}
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
