import Markdown from "markdown-to-jsx";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogView.scss";

interface BlogPostProps {
  data: BBlogPost;
}

const BlogView = ({ data }: BlogPostProps): JSX.Element => {
  return (
    <div className="b-blog-post">
      <img className="b-blog-post-image" src={data.img_src} alt="" />
      <div className="d-flex gap-2 my-3">
        {data.tags.map((tag) => (
          <div className="b-chip">{tag}</div>
        ))}
      </div>
      <h1>{data.title}</h1>
      <div>{epochToDate(data.date)}</div>
      <hr />
      <Markdown>{data.content}</Markdown>
    </div>
  );
};

export default BlogView;
