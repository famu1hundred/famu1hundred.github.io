"use client";

import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useContext,
  useState,
} from 'react'

export const SchemeContext = createContext(null)

export const useSchemeContext = () => useContext(SchemeContext);

const SchemeProvider = ({ children }) => {
  /**
   * Register event handler. Update body's class name based on media query
   * only when local storage is empty (user select "darkmode: auto").
   */
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = () => {
      const body = document.querySelector('body')
      const schemeInStorage = window.localStorage.getItem('__color-scheme__')
      const prefersDarkmode = media.matches

      if (schemeInStorage === null) {
        if (prefersDarkmode) {
          body.classList.add('dark')
        } else {
          body.classList.remove('dark')
        }
      }
    }

    if (media.addEventListener === undefined) {
      media.addListener(handler)
    } else {
      media.addEventListener('change', handler)
    }

    return () => {
      if (media.removeEventListener === undefined) {
        media.removeListener(handler)
      } else {
        media.removeEventListener('change', handler)
      }
    }
  }, [])

  /**
   * Control local storage and body's class name based on "scheme" state.
   */
  const [scheme, setSchemeState] = useState(null)
  const setScheme = (preference) => () => {
    setSchemeState(preference)
  }

  useEffect(() => {
    if (scheme === null) {
      const schemeInStorage = window.localStorage.getItem(
        '__color-scheme__'
      )

      if (schemeInStorage === null) {
        setSchemeState('auto')
      } else {
        setSchemeState(schemeInStorage)
      }
    } else if (scheme === 'auto') {
      window.localStorage.removeItem('__color-scheme__')
    } else {
      window.localStorage.setItem('__color-scheme__', scheme)
    }

    const body = document.querySelector('body')

    if (scheme === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')

      if (media.matches) {
        body.classList.add('dark')
      } else {
        body.classList.remove('dark')
      }
    } else if (scheme === 'light') {
      body.classList.remove('dark')
    } else {
      body.classList.add('dark')
    }
  }, [scheme])

  return (
    <SchemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </SchemeContext.Provider>
  )
}

export default SchemeProvider
