import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import ContactInfo from "../../components/contact-info/ContactInfo";
import RecentBlogPosts from "../../components/recent-blog-posts/RecentBlogPosts";
import "./homePage.scss";

const HomePage = (): JSX.Element => {
  const {
    setNavbarColorway,
    setShouldRandomizeDropdownColor,
    setMetaThemeColor,
  } = useContext(AppContext);

  useEffect(() => {
    setNavbarColorway({ background: undefined, text: "olive" });
    setMetaThemeColor("tan");
    setShouldRandomizeDropdownColor(false);
  }, [setMetaThemeColor, setNavbarColorway, setShouldRandomizeDropdownColor]);

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

        {/* <img
          src={AbstractGradient}
          className="b-masthead-img"
          style={{
            position: "absolute",
            height: "200%",
            right: "-160px",
            bottom: "-50%",
          }}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
