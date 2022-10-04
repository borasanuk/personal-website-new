import { IconChevronRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BBlogPost } from "../../models/BBlogPost";
import { getRecentBlogPosts } from "../../services/DatabaseService";
import BlogPostCard from "../blog-post-card/BlogPostCard";
import "./recentBlogPosts.scss";

interface RecentBlogPostsProps {
  size?: "sm" | "md" | "lg" | "responsive";
}

const RecentBlogPosts = (props: RecentBlogPostsProps) => {
  const [recentPosts, setRecentPosts] = useState<BBlogPost[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getRecentBlogPosts().then((res) => setRecentPosts(res));
  }, []);

  return (
    <div className="b-recent-posts">
      <div className="d-flex align-items-center">
        <div className={"b-recent-posts-title " + props.size}>Recent Works</div>
        <Link
          to="works"
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
        <div className="d-flex align-items-end gap-3" key={data.id} onClick={() => navigate("/works/" + data.id)}>
          <BlogPostCard
            data={data}
            size={props.size}
            style={{ marginTop: index > 0 ? 30 : 10 }}
          />
          <IconChevronRight size={22} stroke={1.5} style={{marginBottom: 1}} />
        </div>
      ))}
    </div>
  );
};

export default RecentBlogPosts;
