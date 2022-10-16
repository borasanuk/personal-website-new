import { IconChevronUp } from "@tabler/icons";
import Markdown from "markdown-to-jsx";
import {
  colorValues,
  Colorway,
  getColorwayClasses,
} from "../../common/colorway";
import { BBlogPost } from "../../models/BBlogPost";
import { epochToDate } from "../../utilities";
import "./blogView.scss";

interface BlogPostProps {
  data: BBlogPost;
  className?: string;
  colorway?: Colorway;
}

const BlogView = ({ data, ...props }: BlogPostProps): JSX.Element => {
  return (
    <div
      className={
        "b-blog-view " +
        props.className +
        " " +
        getColorwayClasses(props.colorway)
      }
    >
      <img className="b-blog-view-image" src={data.img_src} alt="" />
      <div className="d-flex flex-wrap gap-2 my-3">
        <div
          className={
            "b-chip" +
            getColorwayClasses({
              ...props.colorway,
              border: props.colorway?.text,
            })
          }
        >
          {epochToDate(data.date)}
        </div>
        {data.tags.map(
          (tag) =>
            tag && (
              <div
                className={
                  "b-chip" +
                  getColorwayClasses({
                    ...props.colorway,
                    border: props.colorway?.text,
                  })
                }
              >
                {tag}
              </div>
            )
        )}
      </div>
      <h1 className="mb-3 mt-2">{data.title}</h1>
      <hr />
      <Markdown>{data.content}</Markdown>
      <div className="py-5"></div>
    </div>
  );
};

export default BlogView;
