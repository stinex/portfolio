import { FC } from 'react'
import { Anton } from '@next/font/google'
import Marquee from 'react-fast-marquee'

import styles from './TextScroll.module.scss'

const bebasNeue = Anton({
  weight: '400',
  subsets: ['latin'],
})

interface ITextScroll {
  text: string
}

const TextScroll: FC<ITextScroll> = ({ text }) => {
  return (
    <Marquee className={`${bebasNeue.className} ${styles.text}`} speed={120}>
      {text}
    </Marquee>
  )
}
export default TextScroll
