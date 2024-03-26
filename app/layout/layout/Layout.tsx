import { FC, PropsWithChildren } from 'react'

import Meta from './meta/Meta'
import Header from '@/app/components/header/Header'
import { Footer } from '@/app/components/footer/Footer'

import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Layout
