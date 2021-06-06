import App from "next/app";
import React from "react";
import { storesContext } from "../hooks/stores";




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
            <Component {...pageProps} />
    );
  }
}
export default InSpace;