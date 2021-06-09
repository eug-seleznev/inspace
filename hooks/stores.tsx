import { useLocalObservable } from "mobx-react-lite"
import React from "react"
import { CounterStore } from "../stores/counter/main"
import { ThemeStore } from "../stores/theme/main"
import { userStore } from "../stores/user/main"





export const storesContext = React.createContext({
    counterStore: new CounterStore(),
    themeStore: new ThemeStore(),
  })


  export const useStores = () => React.useContext(storesContext)





  export const UserSoreProvider = ({ children  }: any) => {
  const store = useLocalObservable(userStore)
  
  return <storesContext.Provider value={store}>{children}</storesContext.Provider>
}