import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";
import Navbar from "./components/navbar/Navbar";

const App = (): JSX.Element => {
  const location = useLocation();
  const { setPage } = useContext(AppContext);

  useEffect(() => {
    let loc = location.pathname.slice(1);
    if (loc === "") {
      loc = "home";
    }
    setPage(loc);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
