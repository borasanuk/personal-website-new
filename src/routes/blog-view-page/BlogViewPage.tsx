import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { Colorway, getColorwayClasses } from "../../common/colorway";
import BlogView from "../../components/blog-view/BlogView";
import { BBlogPost } from "../../models/BBlogPost";
import { getBlogPost } from "../../services/DatabaseService";
import "./blogViewPage.scss";

const BlogViewPage = () => {
  const { setNavbarColorway, setShouldRandomizeDropdownColor } =
    useContext(AppContext);
  const params = useParams();
  const [data, setData] = useState<BBlogPost>();
  const location = useLocation();
  const [colorway] = useState<Colorway>(
    location.state
      ? (location.state as { colorway: Colorway }).colorway
      : {
          background: "olive",
          text: "olive",
        }
  );
  const [readingColorway, setReadingColorway] = useState<Colorway>(colorway);
  const [prefersReducedColor, setPrefersReducedColor] =
    useState<boolean>(false);

  useEffect(() => {
    setNavbarColorway({ ...colorway, border: colorway.text });
    setShouldRandomizeDropdownColor(true);
  }, [colorway, setNavbarColorway, setShouldRandomizeDropdownColor]);

  useEffect(() => {
    if (params.id) {
      getBlogPost(params.id).then((res) => {
        setData(res);
      });
    }
  }, [params]);

  const togglePrefersReducedColor = () => {
    setReadingColorway(prefersReducedColor ? colorway : { background: "snow" });
    setPrefersReducedColor(!prefersReducedColor)
  }

  return (
    <div
      className={
        "b-blog-view-page-container " +
        getColorwayClasses({
          background: readingColorway.background,
          text: readingColorway.background,
        })
      }
    >
      <div className="py-5"></div>
      <div className="py-3"></div>
      {data && (
        <BlogView
          data={data}
          className="container"
          colorway={{
            background: readingColorway.background,
            text: readingColorway.background,
          }}
        />
      )}
      <div
        className="b-chip border-black bg-white"
        style={{
          position: "fixed",
          bottom: 15,
          right: 15,
          color: "black",
          cursor: "pointer",
        }}
        onClick={() => {
          togglePrefersReducedColor();
        }}
      >
        {prefersReducedColor
          ? "click again if you regret doing that"
          : "click this if you hate colors, ecre"}
      </div>
    </div>
  );
};

export default BlogViewPage;
