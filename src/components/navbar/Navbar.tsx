import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AppContext, pages } from "../../AppContext";
import { useScrollPosition, useWindowSize } from "../../utilities/hooks";
import Dropdown from "../dropdown/Dropdown";
import "./navbar.scss";

const Navbar = (): JSX.Element => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const { page, setPage } = useContext(AppContext);
  const isNavbarActive = (): boolean => {
    return scrollPosition > 0 || page !== "home";
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
      <div className="container">
        <div
          className={
            "b-navbar" +
            (isNavbarActive() ? " active" : "") +
            (scrollPosition > window.innerHeight * 2 || page !== "home"
              ? " background-active"
              : "")
          }
        >
          <div className="b-navbar-logo">b</div>
          {shouldShowFullLogo() && (
            <div
              className={
                "b-navbar-logo zero-width" + (isNavbarActive() ? "" : " hidden")
              }
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
                <Link
                  to={"/" + p}
                  className="b-dropdown-item"
                  key={p}
                  onClick={() => setPage(p)}
                >
                  {p}
                </Link>
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
    </div>
  );
};

export default Navbar;
