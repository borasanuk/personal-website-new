import {
  IconArrowUpRight,
  IconChevronRight, IconHeart
} from "@tabler/icons";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { colorValues } from "../../common/colorway";
import ContactForm from "../../components/contact-form/ContactForm";
import ContactInfo from "../../components/contact-info/ContactInfo";
import RecentBlogPosts from "../../components/recent-blog-posts/RecentBlogPosts";
import "./homePage.scss";

const HomePage = (): JSX.Element => {
  const {
    setNavbarColorway,
    setShouldRandomizeDropdownColor,
    setBodyBackground,
    setMetaThemeColor,
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarColorway({ text: "olive" });
    setMetaThemeColor("tan");
    setBodyBackground(colorValues["tan"])
    setShouldRandomizeDropdownColor(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="b-masthead gap-3 gap-md-4">
      <div className="py-5"></div>
      <section
        className="d-flex flex-column align-items-center justify-content-center border-pink bg-pink text-pink px-4 py-5"
        style={{ flex: 1, position: "relative" }}
      >
        <div className="b-masthead-title text-center text-shadow-pink mt-4">
          hey, i'm bora.
        </div>
        <div className="b-masthead-subtitle text-center text-shadow-pink">
          i do frontend dev stuff, ui/ux, and design.
        </div>
        <div className="d-flex justify-content-center mt-5 gap-1 flex-wrap">
          <div
            className="me-4"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1RjXITzw5qtzdezsMO8RyrFavAP5dQze3/view?usp=sharing",
                "_blank"
              )
            }
          >
            view cv{" "}
            <IconArrowUpRight
              size={20}
              stroke={1.5}
              style={{ marginBottom: 1 }}
            />
          </div>
          <div onClick={() => navigate("works")} style={{ cursor: "pointer" }}>
            see works{" "}
            <IconChevronRight
              size={20}
              stroke={1.5}
              style={{ marginBottom: 1 }}
            />
          </div>
        </div>
        <div
          className="d-flex align-items-center gap-1"
          style={{
            fontSize: 12,
            fontWeight: 500,
            opacity: 0.8,
            position: "absolute",
            right: "calc(50% - 64px)",
            bottom: 10,
          }}
        >
          from istanbul with
          <IconHeart size={16} stroke={0} fill={colorValues.pinkDarker} />
        </div>
      </section>
      <section className="d-flex flex-wrap flex-column flex-lg-row gap-3 gap-md-4">
        <RecentBlogPosts
          size="sm"
          className="bg-olive border-olive text-olive p-4"
          style={{ flex: 3 }}
        />
        <ContactForm
          size="sm"
          className="p-4"
          style={{ flex: "1 1 300px" }}
          colorway={{
            background: "blue",
            text: "blue",
            border: "blue",
          }}
        />
        <ContactInfo className="bg-yellow border-yellow text-yellow p-4" />
      </section>
      <div className="py-1"></div>
    </div>
  );
};

export default HomePage;
