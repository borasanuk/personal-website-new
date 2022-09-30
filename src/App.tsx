import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext, pages } from "./AppContext";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = (): JSX.Element => {
  const location = useLocation();
  const { setPage } = useContext(AppContext);

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
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
