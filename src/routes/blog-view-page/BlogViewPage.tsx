import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogView from "../../components/blog-view/BlogView";
import { BBlogPost } from "../../models/BBlogPost";
import { getBlogPost } from "../../services/DatabaseService";
import "./blogViewPage.scss";

const BlogViewPage = () => {
  const params = useParams();
  const [data, setData] = useState<BBlogPost>();

  useEffect(() => {
    if (params.id) {
      getBlogPost(params.id).then((res) => setData(res));
    }
  }, [params]);

  return (
    <div className="b-blog-view-page-container container">
      <div className="py-5"></div>
      <div className="py-3"></div>
      {data && <BlogView data={data} />}
    </div>
  );
};

export default BlogViewPage;
