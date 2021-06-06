import { useLocalObservable } from "mobx-react-lite"
import React from "react"
import { ThemeStore } from "../stores/theme/main"
import { userStore } from "../stores/user/main"





export const storesContext = React.createContext({
    counterStore: userStore(),
    themeStore: new ThemeStore(),
  })


  export const useStores = () => React.useContext(storesContext)
