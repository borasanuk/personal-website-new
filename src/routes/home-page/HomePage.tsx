import { IconChevronRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogPostCard, {
  blogPostColors,
} from "../../components/blog-post-card/BlogPostCard";
import useScrollPosition from "../../hooks/useScrollPosition";
import { BBlogPost } from "../../models/BBlogPost";
import { getRecentBlogPosts } from "../../services/DatabaseService";
import "./homePage.scss";

const HomePage = (): JSX.Element => {
  const scrollPosition = useScrollPosition();
  const [recentPosts, setRecentPosts] = useState<BBlogPost[]>([]);

  useEffect(() => {
    getRecentBlogPosts().then((res) => setRecentPosts(res));
  }, []);

  return (
    <div className="b-home-container">
      <div className={"b-title" + (scrollPosition > 0 ? " hidden" : "")}>
        borasanuk
      </div>
      <div className={"b-masthead" + (scrollPosition > 0 ? "" : " hidden")}>
        <div
          className="b-bloom"
          style={{ position: "absolute", top: "30%", left: "5%" }}
        ></div>
        <div
          className="b-bloom"
          style={{ position: "absolute", top: "50%", right: "5%" }}
        ></div>
        <div
          className="b-bloom"
          style={{ position: "absolute", bottom: "0%", left: "40%" }}
        ></div>
        <div className="container" style={{ zIndex: 1 }}>
          <div className="col-11 col-lg-8">
            <div className="b-showcase">
              <div className="b-showcase-image-container">
                <img
                  src="https://i.ibb.co/z7GbxWc/278011989-522465269369111-4375721299295600633-n.jpg"
                  alt=""
                />
              </div>
              <div className="b-showcase-title">ku acm</div>
              <div className="b-showcase-text">
                a thorough reimagination of the club's visual identity with a
                renewed logo, design language, and landing page.
              </div>
            </div>
          </div>
          <div className="py-5"></div>
          <div className="row">
            <div className="ms-auto col-11 col-lg-8">
              <div className="b-showcase left-aligned inverted-colors">
                <div className="b-showcase-image-container left-aligned">
                  <img
                    src="https://i.ibb.co/vPWth7z/playground-32.png"
                    alt=""
                  />
                </div>
                <div className="b-showcase-title text-end">
                  aeon technologies
                </div>
                <div className="b-showcase-text text-end">
                  ui/ux, frontend development, logo, branding, landing page, and
                  other design tasks at the startup i co-founded.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5"></div>
      </div>
      <div className="py-5"></div>
      <div className="container-lg d-flex flex-column px-4">
        <div className="d-flex align-items-center">
          <h1 className="serif">Recent Blog Posts</h1>
          <Link
            to="blog"
            className="serif nostyle-anchor ms-auto d-none d-sm-block"
            style={{ fontSize: 24 }}
          >
            See all <IconChevronRight stroke={1.5} />
          </Link>
        </div>
        <hr />
        <div className="py-2"></div>
        {recentPosts.map((data, index) => (
          <BlogPostCard
            data={data}
            key={data.id}
            style={{ margin: "10px 0 50px 10px" }}
            color={blogPostColors[index % blogPostColors.length]}
          />
        ))}
        <Link
          to="blog"
          className="serif nostyle-anchor mx-auto d-sm-none"
          style={{ fontSize: 24 }}
        >
          See all <IconChevronRight stroke={1.5} />
        </Link>
      </div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default HomePage;
