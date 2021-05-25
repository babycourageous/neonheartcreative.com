import tw, { GlobalStyles } from 'twin.macro'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Global
        styles={css`
          body {
            ${tw`font-sans text-gray-800`}
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
