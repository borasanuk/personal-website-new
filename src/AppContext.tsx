import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

export const pages = ["home", "works"];

interface AppState {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

export const AppContext = React.createContext<AppState>({} as AppState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [page, setPage] = useState<string>("home");

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
