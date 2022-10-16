import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { Colorway, getColorwayClasses } from "../../common/colorway";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogPostCard.scss";

interface BlogPostCardProps {
  data: BBlogPost;
  size?: "sm" | "md" | "lg" | "responsive";
  className?: string;
  colorway?: Colorway;
  style?: CSSProperties;
  passColorwayToBlogView?: boolean;
}

const BlogPostCard = ({
  data,
  size,
  ...props
}: BlogPostCardProps): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() =>
        navigate("/works/" + data.id, {
          state: {
            colorway: props.colorway,
          },
        })
      }
      className={
        "b-blog-post-card nostyle-anchor " +
        props.className +
        " " +
        size +
        " " +
        getColorwayClasses(props.colorway)
      }
      style={props.style}
    >
      {/* <img src={data.img_src} className="b-blog-post-card-img" alt="" /> */}
      <div className="b-blog-post-card-tags-container">
        {data.tags.map((tag, index) => (
          <div className="b-blog-post-card-tag" key={index}>{tag}</div>
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
