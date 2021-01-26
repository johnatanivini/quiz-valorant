import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SEO,{DefaultSeo} from 'next-seo';

import db from './../db.json'



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    font-family:'Lato',sans-serif;
    colors:${({theme})=> theme.colors.contrastText};
  }
  html,body {
    height: 100vh;
  }
  #__next {
    flex:1;
    display:flex;
    flex-direction:column
  }
`
const theme = db.theme


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: db.url,
            site_name: db.title,
            images:[{
              url:db.bg,
              width:800,
              heigth:600,
              alt:db.title
            }]
          }}
        />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
