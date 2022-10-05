import { Loader } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { colors, colorValues } from "../../common/colorway";
import BlogPostCard from "../../components/blog-post-card/BlogPostCard";
import useWindowSize from "../../hooks/useWindowSize";
import { BBlogPost } from "../../models/BBlogPost";
import { getAllBlogPosts } from "../../services/DatabaseService";
import "./blogPage.scss";

const mockTitles = [
  "Lorem ipsum dolor sit amet consectetur adipisicing",
  "Praesentium enim maiores sequi",
  "Labore nulla voluptate officiis porro veritatis",
  "Minima veritatis dolorem laborum repellendus magnam",
  "Pariatur voluptate",
  "Molestiae blanditiis deserunt natus suscipit?",
];

const BlogPostsPage = (): JSX.Element => {
  const { setNavbarColorway, setMetaThemeColor } = useContext(AppContext);
  const [postData, setPostData] = useState<BBlogPost[]>([]);
  const [active, setActive] = useState(-1);
  const navigate = useNavigate();
  const windowDimensions = useWindowSize();

  useEffect(() => {
    getAllBlogPosts().then((data) => setPostData(data));
    setNavbarColorway({ background: undefined, text: "olive" });
    setMetaThemeColor("tan");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="b-blog-posts-container container">
      {postData.length > 0 ? (
        postData.map((data, index) => {
          const color = colors[index % colors.length];
          return (
            <div
              key={index}
              className={
                "d-flex gap-3 item " +
                (active !== -1 && index !== active ? "disabled" : "")
              }
              onMouseOver={(event) => {
                setActive(index);
              }}
              onMouseLeave={(event) => {
                setActive(-1);
              }}
              style={{
                transition: "all 0.2s ease-in",
                width: windowDimensions.width > 768 ? "fit-content" : "100%",
                minWidth: "70%",
                opacity: 0.9,
              }}
            >
              <BlogPostCard
                data={
                  index > 0
                    ? {
                        ...data,
                        title: mockTitles[index % mockTitles.length],
                      }
                    : data
                }
                colorway={{
                  border: color,
                  background: color,
                  text: color,
                  hoverShadow: color,
                }}
                className="p-4 w-100"
                passColorwayToBlogView
                style={
                  {
                    // transition: "all 0.2s ease-in-out",
                    // width: windowDimensions.width > 768 ? "fit-content" : "100%",
                  }
                }
              />
              <div
                className={
                  "bg-" +
                  color +
                  " border-" +
                  color +
                  " text-" +
                  color +
                  " hover-shadow-" +
                  color +
                  " p-4 align-items-center d-none d-md-flex"
                }
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate("/works/" + data.id, {
                    state: {
                      colorway: {
                        border: color,
                        background: color,
                        text: color,
                        hoverShadow: color,
                      },
                    },
                  })
                }
              >
                <IconChevronRight size={50} stroke={1} />
              </div>
            </div>
          );
        })
      ) : (
        <div
          style={{
            position: "absolute",
            right: "calc(50% - 30px)",
            top: "50%",
          }}
        >
          <Loader size={60} color={colorValues.oliveDarker} />
        </div>
      )}
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default BlogPostsPage;
