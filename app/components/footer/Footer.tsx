import { FC } from 'react'
import Image from 'next/image'

import { link_ru } from '@/app/data/link/link.data'
import { socials } from '@/app/data/socials/social.data'

import Container from '../container/Container'

import styles from './Footer.module.scss'
import { Link } from 'react-scroll'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.reserved}>
            ©{new Date().getFullYear()} – All Rights Reserved
          </p>

          <nav className={styles.nav}>
            {link_ru.map((item) => (
              <Link
                href="#"
                to={item.href}
                smooth={true}
                className={styles.link}
                key={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className={styles.socials}>
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  key={social.name}
                  className={styles.social}
                >
                  <Image src={social.img} alt={social.name} />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
