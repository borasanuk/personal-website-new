import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext, pages } from "./AppContext";
import Navbar from "./components/navbar/Navbar";
import { MantineProvider } from "@mantine/core";
import { analytics } from "./services/firebaseConfig";
import { logEvent } from "firebase/analytics";

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
      }
    }
    console.log(location.pathname);
    const page_path = location.pathname;
    logEvent(analytics, "screen_view", {
      firebase_screen: page_path,
      firebase_screen_class: undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, setPage]);

  return (
    <MantineProvider>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div className={"home-bg " + (page === "home" ? "" : " hidden")}></div>
        <Navbar />
        <Outlet />
      </div>
    </MantineProvider>
  );
};

export default App;
