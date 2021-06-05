import App from "next/app";
import React from "react";
import { Provider } from "mobx-react";

import { StoreProvider } from "../hooks/Context";



const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.light);










class InSpace extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <StoreProvider>
          <ThemeContext.Provider value={themes.dark}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </StoreProvider>
    );
  }
}
export default InSpace;