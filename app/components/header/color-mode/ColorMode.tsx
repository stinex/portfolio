import { FC, useRef } from 'react'

import { useActions } from '@/app/hooks/useActions'

import styles from './ColorMode.module.scss'

const ColorMode: FC = () => {
  const colors = useRef<HTMLDivElement>(null)
  const colorsBg = useRef<HTMLDivElement>(null)

  const showColor = () => {
    const colorArr = colors.current?.children as HTMLCollection

    if (!colors.current?.getAttribute('style')) {
      colors.current?.setAttribute('style', 'display: flex;')
      colorsBg.current?.setAttribute(
        'style',
        'background: rgba(255, 251, 251, 0.1);'
      )
    } else {
      colors.current?.removeAttribute('style')
      colorsBg.current?.removeAttribute('style')
    }

    Array.from(colorArr)?.map((item) => {
      if (colors.current?.getAttribute('style')) {
        var op = 0
        while (op <= 1) {
          ;(function (_op) {
            setTimeout(function () {
              item.setAttribute(
                'style',
                `opacity: ${_op}; transform: rotate(${225 * _op + 0.2}deg)`
              )
            }, 60 + op * 300)
          })(op)
          op += 0.1
        }
      } else {
        item.removeAttribute('style')
      }
    })
  }

  const { setColorMode } = useActions()

  return (
    <div
      className={styles.color}
      onMouseEnter={showColor}
      onMouseLeave={showColor}
    >
      <div ref={colors} className={`${styles.color_options}`}>
        <div
          data-color="theme-red"
          onClick={() => setColorMode('theme-red')}
          className={styles.color_option}
        ></div>
        <div
          data-color="theme-green"
          onClick={() => setColorMode('theme-green')}
          className={styles.color_option}
        ></div>
        <div
          data-color="theme-grey"
          onClick={() => setColorMode('theme-grey')}
          className={styles.color_option}
        ></div>
      </div>
      <div className={styles.color_text}>color mode</div>
      <div ref={colorsBg} className={styles.bg}></div>
    </div>
  )
}

export default ColorMode
