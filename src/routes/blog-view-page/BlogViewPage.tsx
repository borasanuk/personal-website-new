import { Loader } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import {
  colorValues,
  Colorway,
  getColorwayClasses,
} from "../../common/colorway";
import BlogView from "../../components/blog-view/BlogView";
import { BBlogPost } from "../../models/BBlogPost";
import { getBlogPost } from "../../services/DatabaseService";
import "./blogViewPage.scss";

const BlogViewPage = () => {
  const {
    setNavbarColorway,
    setShouldRandomizeDropdownColor,
    setMetaThemeColor,
    setBodyBackground,
  } = useContext(AppContext);
  const params = useParams();
  const [data, setData] = useState<BBlogPost>();
  const location = useLocation();
  const [colorway, setColorway] = useState<Colorway>(
    location.state
      ? (location.state as { colorway: Colorway }).colorway
      : {
          background: "olive",
          text: "olive",
        }
  );

  useEffect(() => {
    const _colorway = location.state
      ? (location.state as { colorway: Colorway }).colorway
      : {
          background: "olive",
          text: "olive",
        };
    setColorway({
      ..._colorway,
      background: _colorway.background + "-lighter",
    });
    setNavbarColorway({ ..._colorway, border: colorway.text });
    setMetaThemeColor(colorway.background! + "Lighter");
    setBodyBackground(colorValues[colorway.background + "Lighter" as keyof typeof colorValues])
    setShouldRandomizeDropdownColor(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (params.id) {
      getBlogPost(params.id).then((res) => {
        setData(res);
      });
    }
  }, [params]);

  return (
    <div
      className={
        "b-blog-view-page-container " +
        getColorwayClasses({
          background: colorway.background,
          text: colorway.background,
        })
      }
    >
      <div className="py-5"></div>
      <div className="py-3"></div>
      {data ? (
        <BlogView
          data={data}
          className="container"
          colorway={{
            background: colorway.background,
            text: colorway.text,
          }}
        />
      ) : (
        <div style={{ position: "absolute", right: "calc(50% - 30px)", top: "50%" }}>
          <Loader
            size={60}
            color={colorValues[(colorway.text + "Darker") as keyof typeof colorValues]}
          />
        </div>
      )}
    </div>
  );
};

export default BlogViewPage;
