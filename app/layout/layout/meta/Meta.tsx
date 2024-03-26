import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { siteName, titleMerge } from './meta.config'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

import { ISeo } from './meta.interface'

const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  image = 'logo.png',
  children,
  type = 'website',
}) => {
  const { asPath } = useRouter()
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`

  const { colorMode } = useTypedSelector((state) => state)

  return (
    <>
      <Head>
        <title itemProp="headline">{titleMerge(title)}</title>
        {description ? (
          <>
            <meta itemProp="description" name="description" content={description} />
            <link rel="canonical" href={currentUrl} />
            <link rel="shortcut icon" href={(colorMode as any) === 'theme-red' ? '/1.ico' : (colorMode as any) === 'theme-green' ? '/2.ico' : '/3.ico'} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="ru" />
            <meta property="og:title" content={titleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={description} />
            <meta name="yandex-verification" content="5d7086eeca30b9c3" />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  )
}
export default Meta
