import { IconChevronRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BBlogPost } from "../../models/BBlogPost";
import { getRecentBlogPosts } from "../../services/DatabaseService";
import BlogPostCard from "../blog-post-card/BlogPostCard";
import "./recentBlogPosts.scss";

interface RecentBlogPostsProps {
  size?: "sm" | "md" | "lg" | "responsive";
}

const RecentBlogPosts = (props: RecentBlogPostsProps) => {
  const [recentPosts, setRecentPosts] = useState<BBlogPost[]>([]);

  useEffect(() => {
    getRecentBlogPosts().then((res) => setRecentPosts(res));
  }, []);

  return (
    <div className="b-recent-posts">
      <div className="d-flex align-items-center">
        <div className={"b-recent-posts-title " + props.size}>
          Works
        </div>
        <Link
          to="blog"
          className={
            "b-recent-posts-see-all nostyle-anchor ms-auto underline " +
            props.size
          }
        >
          See all
        </Link>
      </div>
      <hr />
      {recentPosts.map((data, index) => (
        <BlogPostCard
          data={data}
          key={data.id}
          size={props.size}
          style={{ marginTop: index > 0 ? 30 : 10 }}
        />
      ))}
    </div>
  );
};

export default RecentBlogPosts;
