import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { colorModeActions } from '@/app/store/theme/theme.slice'
import { menuActions } from '@/app/store/menu/menu.slice'

const allActions = {
  ...colorModeActions,
  ...menuActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}
