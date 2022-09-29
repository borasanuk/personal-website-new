import { useEffect, useState } from "react";
import BlogPostCard from "../../components/blog-post-card/BlogPostCard";
import { BBlogPost } from "../../models/BBlogPost";
import { getAllBlogPosts } from "../../services/DatabaseService";
import "./blogPage.scss";

const BlogPostsPage = (): JSX.Element => {
  const [postData, setPostData] = useState<BBlogPost[]>([]);
  useEffect(() => {
    getAllBlogPosts().then((data) => setPostData(data));
  }, []);

  return (
    <div className="container">
      <div className="py-5"></div>
      <div className="py-5"></div>

      {postData.map((data) => (
        <BlogPostCard data={data} key={data.id} />
      ))}

      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default BlogPostsPage;
