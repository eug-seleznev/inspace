import React from 'react'
import { createStore, TStore } from '../stores/RootStore'
import { useLocalStore } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0
import { userStore } from '../stores/user/main'

const storeContext = React.createContext<TStore | null>(null)

export const StoreProvider = ({ children  }: any) => {
  const store = useLocalStore(userStore)
  
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}

