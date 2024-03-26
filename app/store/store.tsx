import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from './menu/menu.slice'
import { colorModeReducer } from './theme/theme.slice'

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
    setMenu: menuReducer,
  },
})

export type TypeRootState = ReturnType<typeof store.getState>
