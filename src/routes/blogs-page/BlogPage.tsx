import { useEffect, useState } from "react";
import BlogPostCard, {
  blogPostColors,
} from "../../components/blog-post-card/BlogPostCard";
import useWindowSize from "../../hooks/useWindowSize";
import { BBlogPost } from "../../models/BBlogPost";
import { getAllBlogPosts } from "../../services/DatabaseService";
import "./blogPage.scss";

const BlogPostsPage = (): JSX.Element => {
  const [postData, setPostData] = useState<BBlogPost[]>([]);
  const windowDimensions = useWindowSize();

  useEffect(() => {
    getAllBlogPosts().then((data) => setPostData(data));
  }, []);

  return (
    <div className="b-blog-posts-container container">
      {postData.map((data, index) => (
        <BlogPostCard
          data={data}
          key={data.id}
          color={blogPostColors[index % blogPostColors.length]}
          style={{
            marginLeft: windowDimensions.width > 942 ? (index * 100) % 300 : 0,
          }}
        />
      ))}
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default BlogPostsPage;
