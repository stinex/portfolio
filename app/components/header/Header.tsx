import { FC, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import Container from '../container/Container'
import ButtonMenu from './button-menu/ButtonMenu'
import ColorMode from './color-mode/ColorMode'
import Menu from './menu/Menu'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scroll, setScroll] = useState(false)

  const { setMenu } = useTypedSelector((state) => state)

  const handleNavigation = useCallback(
    (e: Event) => {
      const window = e.currentTarget as Window
      if (scrollY > window.scrollY) {
        setScroll(false)
      } else if (scrollY < window.scrollY) {
        setScroll(true)
      }
      setScrollY(window.scrollY)
    },
    [scrollY]
  )

  useEffect(() => {
    setScrollY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <header className={`${styles.header} ${scroll ? styles.down : styles.up}`}>
      <Container>
        <div className={styles.header_wapper}>
          <Link href="/" className={styles.logo}>
            vlad aparin.
          </Link>
          <ColorMode />
          <ButtonMenu menu={setMenu.menu} />
          <Menu menu={setMenu.menu} />
        </div>
      </Container>
    </header>
  )
}
export default Header
