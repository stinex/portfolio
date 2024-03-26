import { FC } from 'react'
// import Link from 'next/link'

import { ILink } from '@/app/data/link/link.interface'

import styles from './MenuItem.module.scss'
import { Link } from 'react-scroll'
import { useActions } from '@/app/hooks/useActions'

interface IMenuItemLink {
  item: ILink
}

const MenuItem: FC<IMenuItemLink> = ({ item }) => {
  const { setMenu } = useActions()
  return (
    <Link
      href="#"
      to={item.href}
      onClick={() => setMenu(false)}
      smooth={true}
      className={styles.link}
    >
      {item.name}
    </Link>
  )
}
export default MenuItem
