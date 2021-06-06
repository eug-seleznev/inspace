import { observer } from "mobx-react"
import { useStores } from "../hooks/stores"

// src/components/ThemeToggler.tsx
 const ThemeToggler = observer(() => {
    const { counterStore } = useStores()

    return (
      <>
        <div>{counterStore.Users}</div>
        <button onClick={() => counterStore.createUser('gura')}>
          set theme: light
        </button>
        {/* <button onClick={() => themeStore.setTheme('dark')}>
          set theme: dark
        </button> */}
      </>
    )
  })


  export default ThemeToggler