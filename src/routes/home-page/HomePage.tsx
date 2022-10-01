import RecentBlogPosts from "../../components/recent-blog-posts/RecentBlogPosts";
import AbstractGradient from "../../common/gradient.png";
import "./homePage.scss";
import FeaturedWork from "../../components/featured-work/FeaturedWork";
import useWindowSize from "../../hooks/useWindowSize";
import ContactInfo from "../../components/contact-info/ContactInfo";

const HomePage = (): JSX.Element => {
  const windowDimensions = useWindowSize();

  return (
    <div className="b-masthead">
      <section>
        <div className="py-5"></div>
        <div className="b-bloom"></div>
        <div className="text-center">
          <span className="b-masthead-title">hey, i'm </span>
          <span className="b-masthead-title fancy">bora.</span>
        </div>
        <div className="b-masthead-subtitle">
          i do frontend dev stuff, ui/ux, and design.
        </div>
        <div className="b-bloom ms-auto mt-auto"></div>
      </section>
      <div
        className="d-flex flex-wrap flex-column flex-md-row gap-5 gap-md-4"
        style={{ position: "relative" }}
      >
        <section
          className="border-olive text-olive p-4"
          style={{ zIndex: 1, flex: 1, mixBlendMode: "multiply" }}
        >
          <RecentBlogPosts size="sm" />
        </section>
        <ContactInfo style={{ zIndex: 1 }} />

        <img
          src={AbstractGradient}
          style={{
            position: "absolute",
            height: "200%",
            right: "-160px",
            bottom: "-50%",
            filter: "blur(80px) saturate(2.5) hue-rotate(240deg)",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
