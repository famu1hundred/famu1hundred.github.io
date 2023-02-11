import React from 'react'

import styles from './Footer.module.css'
import Link from '../Link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.resources}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              ❤️
            </span>
            This site is built with
          </p>
          <Link href='https://nextjs.org/'>Next.js</Link>
          <Link href='https://react-icons.github.io/react-icons'>React Icons</Link>
          <Link href='https://mdxjs.com/'>MDX</Link>
          <Link href='https://unifiedjs.com/'>unified</Link>
          <Link href='https://www.contentlayer.dev/docs/getting-started'>Contentlayer</Link>
        </div>
        <div className={styles.contact}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              🔍
            </span>
            Where to find me
          </p>
          <Link href='https://www.linkedin.com/in/raymondbpace'>Linkedin</Link>
          <Link href='https://github.com/famu1hundred'>GitHub</Link>
        </div>
        <div className={styles.sitemap}>
          <p>
            <span
              role="img"
              aria-label="build with love"
              className={styles.emoji}
            >
              🌐
            </span>
            Sitemap
          </p>
          <Link href="/">Home</Link>
          {/*
          <Link href="/articles">Articles</Link>
          <Link href="/work">Work</Link>
          */}
          <Link href="/now">Now</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()}{' '}
        <Link href='https://www.linkedin.com/in/raymondbpace'>Raymond Pace</Link>
      </div>
    </footer>
  )
}
