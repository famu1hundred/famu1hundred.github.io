import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Menubar from '../components/Menubar'
import SchemeProvider from '../components/SchemeProvider'

function MyApp({ Component, pageProps }) {
  return (
      <SchemeProvider>
        <Head>
        <title>famu1hundred</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" /> 
        <meta name="description" content="Raymond is a software engineer, UX advocate, and creator who is dedicated to Web engineering. He has over 20 years of experience in web, mobile and digital design and has worked in multiple industries on various implementations with virtual teams spread across the globe." />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>

        <div id="outer-container">
          <Nav />
          <Menubar />
          <div id="page-wrap">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </SchemeProvider>
  )
}

export default MyApp
