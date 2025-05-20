import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const tableRef = useRef(null);

  

  return (
    <ScrollContext.Provider value={{ tableRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
