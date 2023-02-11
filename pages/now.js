import React from 'react'
import { useLiveReload, useMDXComponent } from 'next-contentlayer/hooks'
import { allPages } from 'contentlayer/generated'
import components from '../components/MDXComponents'
import styles from '../styles/Now.module.css'
import Section from '../components/Section'
import Link from '../components/Link'

export default function Now({ meta }) {
  const MDXContent = useMDXComponent(meta.body.code)
  useLiveReload()

  return (
    <main className={styles.main}>
      <Section>
        <article className={styles.article}>
          <h1>{meta.title}</h1>
          <h2>
            Inspired by{' '}
            <Link href="https://nownownow.com/about">nownownow.com</Link>
          </h2>
          <MDXContent components={components} />
        </article>
      </Section>
    </main>
  )
}

export async function getStaticProps() {
  const meta = allPages.find((page) => page.slug === 'now')

  return { props: { meta } }
}
