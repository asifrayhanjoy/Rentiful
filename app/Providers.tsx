"use client";

import React, { createContext, useContext } from "react";

const ThemeContext = createContext({});

export function StyleProvider({ children }: { children: React.ReactNode }) {

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;

