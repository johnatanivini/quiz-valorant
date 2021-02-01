import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import db from './../db.json'

const GlobalStyle = createGlobalStyle`

  @font-face {
                    font-family: 'Noto Sans TC';
                    src: url('/fonts/NotoSansTC-Regular.otf');
                    font-weight: bold;
                    font-style: normal;
                    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    font-family:'Noto Sans TC',sans-serif;
    color:${({ theme }) => theme.colors.contrastText};
  }

  html,body {
    height: 100vh;
  }
  #__next {
    flex:1;
    display:flex;
    flex-direction:column;
  }
`
const theme = db.theme

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Quiz | Valorant </title>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: db.url,
          site_name: db.title,
          images: [
            {
              url: db.bg,
              width: 800,
              heigth: 600,
              alt: db.title
            }
          ]
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
         
      </ThemeProvider>
    </>
  )
}
