import { IconChevronRight, IconDownload } from "@tabler/icons";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarColorway({ background: undefined, text: "olive" });
    setMetaThemeColor("tan");
    setShouldRandomizeDropdownColor(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="b-masthead gap-3 gap-md-4">
      <div className="py-5"></div>
      <section
        className="d-flex flex-column align-items-center justify-content-center border-pink bg-pink text-pink p-4"
        style={{ flex: 1 }}
      >
        <div className="b-masthead-title text-center text-shadow-pink">
          hey, i'm bora.
        </div>
        <div className="b-masthead-subtitle text-center text-shadow-pink">
          i do frontend dev stuff, ui/ux, and design.
        </div>
        <div className="d-flex justify-content-center mt-4 gap-1 flex-wrap">
          <div className="underline mx-4" style={{ cursor: "pointer" }}>
            download cv
          </div>
          <div
            className="underline mx-4"
            onClick={() => navigate("works")}
            style={{ cursor: "pointer" }}
          >
            see works{" "}
            <IconChevronRight
              size={18}
              stroke={1.5}
              style={{ marginBottom: 1 }}
            />
          </div>
        </div>
      </section>
      <section className="d-flex flex-wrap flex-column flex-md-row gap-3 gap-md-4">
        <RecentBlogPosts
          size="sm"
          className="bg-olive border-olive text-olive p-4"
          style={{ flex: 1.5 }}
        />
        {/* <ContactForm
          size="sm"
          className="bg-olive border-olive text-olive p-4"
          style={{ flex: 1 }}
        /> */}
        <ContactInfo className="bg-yellow border-yellow text-yellow p-4" />
      </section>
      <div className="py-1"></div>
    </div>
  );
};

export default HomePage;
