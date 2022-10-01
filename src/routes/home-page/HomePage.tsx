import RecentBlogPosts from "../../components/recent-blog-posts/RecentBlogPosts";
import AbstractGradient from "../../common/gradient.png";
import "./homePage.scss";
import FeaturedWork from "../../components/featured-work/FeaturedWork";
import useWindowSize from "../../hooks/useWindowSize";

const HomePage = (): JSX.Element => {
  const windowDimensions = useWindowSize();

  return (
    <div className="b-masthead">
      <div className="d-flex flex-wrap flex-column flex-md-row gap-5 gap-md-0" style={{ position: "relative" }}>
        <FeaturedWork style={{ zIndex: 1 }} />
        <img
          src={AbstractGradient}
          style={{
            position: "absolute",
            height: "200%",
            right: -200,
            top: "-50%",
            filter: "blur(80px) saturate(2.5) hue-rotate(240deg)",
          }}
          alt=""
        />
        <section
          className="border-olive bg-olive text-olive p-3 p-sm-4 ms-0 ms-md-auto"
          style={{ zIndex: 1 }}
        >
          <RecentBlogPosts size={windowDimensions.width > 1200 ? "md" : "sm"} />
        </section>
      </div>
      <section>
        <div className="b-bloom"></div>
        <div className="b-masthead-title">
          hey, i'm <span className="fancy">bora.</span>
        </div>
        <div className="b-masthead-subtitle">
          i do frontend dev stuff, ui/ux, and design.
        </div>
        <div className="b-bloom ms-auto mt-auto"></div>
      </section>
    </div>
  );
};

export default HomePage;
