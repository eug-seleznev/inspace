import App from "next/app";
import React from "react";
import Auth from "../components/auth/auth";
import { storesContext, UserSoreProvider } from "../hooks/stores";
import { UserStoreProvider } from "../stores/user/hook";




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
          <UserStoreProvider>
            <Component {...pageProps} />
          </UserStoreProvider>
        );    

    }
    
}
export default InSpace;