import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition, useWindowSize } from "../../utilities/hooks";
import Dropdown from "../dropdown/Dropdown";
import "./navbar.scss";

const Navbar = (): JSX.Element => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const isNavbarActive = (): boolean => {
    return scrollPosition > 0;
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
            (scrollPosition > window.innerHeight - 50
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
              defaultIndex={0}
            >
              <Link to="/" className="b-dropdown-item" key={"home"}>
                home
              </Link>
              <Link to="/" className="b-dropdown-item" key={"portfolio"}>
                portfolio
              </Link>
              <Link to="/" className="b-dropdown-item" key={"blog"}>
                blog
              </Link>
              <Link to="/" className="b-dropdown-item" key={"contact"}>
                contact
              </Link>
            </Dropdown>
          ) : (
            <div
              className={
                "b-navbar-items-container" + (isNavbarActive() ? "" : " hidden")
              }
            >
              <div className="b-navbar-item selected">home</div>
              <div className="b-navbar-item">portfolio</div>
              <div className="b-navbar-item">blog</div>
              <div className="b-navbar-item">contact</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
