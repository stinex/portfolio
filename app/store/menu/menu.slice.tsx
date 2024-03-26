import { createSlice } from '@reduxjs/toolkit'

import { IMenu } from './menu.interface'

const initialState: IMenu = { menu: false }

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      return void(state.menu = action.payload)
    },
  },
})

export const menuReducer = menuSlice.reducer
export const menuActions = menuSlice.actions
