// src/stores/theme-store.tsx
import { observable, action } from 'mobx'

export class ThemeStore {
  @observable
  theme = 'light'
  @observable
  test="hey"

  @action
  setTheme(newTheme: string) {

      console.log(newTheme, this.test, 'theme')
    this.theme = newTheme
  }
}