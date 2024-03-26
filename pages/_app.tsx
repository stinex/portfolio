import '@/app/assets/styles/globals.scss'

import { Open_Sans } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'

const open_sans = Open_Sans({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={open_sans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
