import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Colorway } from "./common/colorway";

export const pages = ["home", "works"];

interface AppState {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  navbarColorway: Colorway;
  setNavbarColorway: Dispatch<SetStateAction<Colorway>>;
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

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        navbarColorway,
        setNavbarColorway,
        shouldRandomizeDropdownColor,
        setShouldRandomizeDropdownColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
