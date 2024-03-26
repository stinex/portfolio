import { FC, useEffect } from 'react'

import { IMenu } from '@/app/store/menu/menu.interface'
import { link_ru } from '@/app/data/link/link.data'
import MenuItem from './menu-item/MenuItem'
import Container from '../../container/Container'

import styles from './Menu.module.scss'

const Menu: FC<IMenu> = ({ menu }) => {
  useEffect(() => {
    if (menu === true) {
      ;(
        document.documentElement.querySelector('body') as HTMLElement
      ).classList.add('hide')
    } else {
      ;(
        document.documentElement.querySelector('body') as HTMLElement
      ).classList.remove('hide')
    }
  }, [menu])

  return (
    <nav className={`${styles.menu} ${menu === true ? styles.open : ''}`}>
      <Container>
        <ul className={styles.ul}>
          {link_ru.map((item) => (
            <li className={styles.li} key={item.href}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
export default Menu
