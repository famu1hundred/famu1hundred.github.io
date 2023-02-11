import './styles/globals.css'
import Nav from './components/Nav'
import Menubar from './components/Menubar'
import SchemeProvider from './components/SchemeProvider'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SchemeProvider>
        <div id="outer-container">
          <Nav />
          <Menubar />
          <div id="page-wrap">
            {children}
            <Footer />
          </div>
        </div>
        </SchemeProvider>
      </body>
    </html>
  )
}
