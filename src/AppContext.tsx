import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { colorValues, Colorway } from "./common/colorway";

export const pages = ["home", "works"];

interface AppState {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  navbarColorway: Colorway;
  setNavbarColorway: Dispatch<SetStateAction<Colorway>>;
  setMetaThemeColor: (color: string) => void;
  setBodyBackground: (color: string) => void;
  shouldRandomizeDropdownColor: boolean;
  setShouldRandomizeDropdownColor: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppState>({} as AppState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [page, setPage] = useState<string>("home");
  const [shouldRandomizeDropdownColor, setShouldRandomizeDropdownColor] =
    useState<boolean>(false);
  const [navbarColorway, setNavbarColorway] = useState<Colorway>({
    text: "olive",
  });

  const setMetaThemeColor = (color: string) => {
    const scheme = document.querySelector('meta[name="theme-color"]');
    scheme?.setAttribute("content", colorValues[color as keyof typeof colorValues]);
  }

  const setBodyBackground = (color: string) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        navbarColorway,
        setNavbarColorway,
        setMetaThemeColor,
        setBodyBackground,
        shouldRandomizeDropdownColor,
        setShouldRandomizeDropdownColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
