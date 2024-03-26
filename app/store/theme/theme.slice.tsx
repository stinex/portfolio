import { createSlice } from '@reduxjs/toolkit'
import { ITheme } from './theme.interface'

const initialState: ITheme =
  typeof window !== 'undefined' && localStorage.getItem('colorMode')
    ? JSON.parse(localStorage.getItem('colorMode') as string)
    : 'theme-green'

export const themeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      localStorage.setItem('colorMode', JSON.stringify(action.payload))
      return (state = action.payload)
    },
  },
})

export const colorModeReducer = themeSlice.reducer
export const colorModeActions = themeSlice.actions
