import { Loader } from "@mantine/core";
import { IconChevronUp, IconPalette, IconPaletteOff } from "@tabler/icons";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";
import {
  colorValues,
  Colorway,
  getColorwayClasses,
} from "../../common/colorway";
import BlogView from "../../components/blog-view/BlogView";
import useScrollPosition from "../../hooks/useScrollPosition";
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
  const scrollPosition = useScrollPosition();
  const [prefersReducedColor, setPrefersReducedColor] = useState(false);
  const [initialColorway, setInitialColorway] = useState<Colorway>();
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
    setInitialColorway({
      ..._colorway,
      background: _colorway.background + "-lighter",
    });
    setNavbarColorway({ ..._colorway, border: colorway.text });
    setMetaThemeColor(colorway.background! + "Lighter");
    setBodyBackground(
      colorValues[(colorway.background + "Lighter") as keyof typeof colorValues]
    );
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

  useEffect(() => {
    if (!initialColorway) return;
    if (prefersReducedColor) {
      setNavbarColorway({ background: "snow", text: "snow", border: "snow" });
      setColorway({ background: "snow", text: "snow" });
      setMetaThemeColor("snowLighter");
      setBodyBackground(colorValues.snowLighter);
      setShouldRandomizeDropdownColor(false);
    } else {
      setColorway(initialColorway);
      setNavbarColorway({
        ...initialColorway,
        border: initialColorway.text,
        background: initialColorway.text,
      });
      setMetaThemeColor(initialColorway.background! + "Lighter");
      setBodyBackground(
        colorValues[
          (initialColorway.background + "Lighter") as keyof typeof colorValues
        ]
      );
      setShouldRandomizeDropdownColor(true);
    }
  }, [prefersReducedColor]);

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
        <div
          style={{
            position: "absolute",
            right: "calc(50% - 30px)",
            top: "50%",
          }}
        >
          <Loader
            size={60}
            color={
              colorValues[
                (colorway.text + "Darker") as keyof typeof colorValues
              ]
            }
          />
        </div>
      )}
      {initialColorway && (
        <div
          className={
            "theme-toggle" +
            (prefersReducedColor
              ? getColorwayClasses({
                  text: initialColorway.text,
                  border: initialColorway.text,
                })
              : getColorwayClasses({ text: "snow", border: "snow" })) +
            (scrollPosition > 100 ? " shifted" : "")
          }
          onClick={() => setPrefersReducedColor(!prefersReducedColor)}
          style={{
            backgroundColor: prefersReducedColor
              ? colorValues[initialColorway.text as keyof typeof colorValues]
              : colorValues.snow,
            // colorValues["peach"],
          }}
        >
          {prefersReducedColor ? <IconPalette /> : <IconPaletteOff />}
        </div>
      )}
      <div
        className={
          "scroll-to-top" +
          getColorwayClasses({ text: colorway.text, border: colorway.text }) +
          (scrollPosition > 100 ? "" : " hidden")
        }
        onClick={() => window.scrollTo(0, 0)}
        style={{
          backgroundColor:
            colorValues[colorway.text as keyof typeof colorValues],
          // colorValues["peach"],
        }}
      >
        <IconChevronUp />
      </div>
    </div>
  );
};

export default BlogViewPage;
