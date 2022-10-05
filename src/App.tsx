import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext, pages } from "./AppContext";
import Navbar from "./components/navbar/Navbar";

const App = (): JSX.Element => {
  const location = useLocation();
  const { page, setPage } = useContext(AppContext);

  useEffect(() => {
    let loc = location.pathname.slice(1);
    if (loc === "") {
      loc = "home";
    }
    for (let p of pages) {
      if (loc.includes(p)) {
        setPage(p);
        console.log(loc.includes(p), p);
      }
    }
  }, [location.pathname, setPage]);

  return (
    <div style={{position: "relative", minHeight: "100vh"}}>
      <div className={"home-bg " + (page === "home" ? "" : " hidden")}></div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
