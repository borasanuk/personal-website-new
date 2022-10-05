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
      <div className="d-flex gap-2 my-3">
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
      <div className="py-3"></div>
      <hr />
      <div className="b-blog-view-table">
        <div className="b-blog-view-table-item">
          <h5 className="b-blog-view-table-item-title">Role</h5>
          <p className="b-blog-view-table-item-content">
            Web developer, designer
          </p>
        </div>
        <div className="b-blog-view-table-item">
          <h5 className="b-blog-view-table-item-title">Responsibilites</h5>
          <p className="b-blog-view-table-item-content">
            Developing a full-stack app, designing and developing a landing
            page, creating a visual identity, designing a logo
          </p>
        </div>
        <div className="b-blog-view-table-item">
          <h5 className="b-blog-view-table-item-title">URL</h5>
          <p className="b-blog-view-table-item-content">
            Coming soon!
          </p>
        </div>
      </div>
      <hr />
      <div className="py-3"></div>
      <Markdown>{data.content}</Markdown>
    </div>
  );
};

export default BlogView;
