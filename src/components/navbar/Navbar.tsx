import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext, pages } from "../../AppContext";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowSize from "../../hooks/useWindowSize";
import Dropdown from "../dropdown/Dropdown";
import "./navbar.scss";

const Navbar = (): JSX.Element => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const { page, setPage } = useContext(AppContext);
  const navigate = useNavigate();

  const isNavbarActive = (): boolean => {
    // return scrollPosition > 0 || page !== "home";
    return true;
  };

  const dimensions = useWindowSize();
  const shouldShowCompactNavbar = (): boolean => {
    return dimensions.width < 768;
  };

  const shouldShowFullLogo = (): boolean => {
    return dimensions.width > 460;
  };

  return (
    <div className="b-navbar-container" ref={navbarRef}>
      <div
        className={
          "b-navbar" +
          (isNavbarActive() ? " active" : "") +
          (scrollPosition > window.innerHeight * 2 || page !== "home"
            ? " background-active"
            : "")
        }
      >
        <div className="b-navbar-logo" onClick={() => navigate("/")}>
          b
        </div>
        {shouldShowFullLogo() && (
          <div
            className={
              "b-navbar-logo zero-width" + (isNavbarActive() ? "" : " hidden")
            }
            onClick={() => navigate("/")}
          >
            orasanuk
          </div>
        )}
        {shouldShowCompactNavbar() ? (
          <Dropdown
            className={
              "b-navbar-items-dropdown" + (isNavbarActive() ? "" : " hidden")
            }
            style={{ marginLeft: "auto" }}
            childrenClass="b-navbar-dropdown-item"
            defaultIndex={pages.indexOf(page)}
          >
            {pages.map((p) => (
              <div
                className="b-dropdown-item"
                key={p}
                onClick={() => {
                  setPage(p);
                  navigate(p === "home" ? "/" : p);
                }}
              >
                {p}
              </div>
            ))}
          </Dropdown>
        ) : (
          <div
            className={
              "b-navbar-items-container" + (isNavbarActive() ? "" : " hidden")
            }
          >
            {pages.map((p) => (
              <Link
                to={"/" + p}
                className={"b-navbar-item" + (p === page ? " selected" : "")}
                key={p}
                onClick={() => setPage(p)}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
