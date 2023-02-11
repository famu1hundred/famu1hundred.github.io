import React from 'react'
import styles from './Hero.module.css'
import classNames from 'classnames'

/**
 * Hero section. The Show piece of the website.
 *
 * Note: the trailing space in each title is for the "Reader view".
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        <span
          className={classNames(styles.title, styles.heroTitle, styles.heroTitle_1)}
        >
          <span className={classNames(styles.title, styles.animatedTitle_1)}>
            {'ux developer '}
          </span>
        </span>
        <span
          className={classNames(styles.title, styles.heroTitle, styles.heroTitle_2)}
        >
          <span className={classNames(styles.title, styles.animatedTitle_2)}>
            {'solution architect '}
          </span>
        </span>
        <span
          className={classNames(styles.title, styles.heroTitle, styles.heroTitle_3)}
        >
          <span className={classNames(styles.title, styles.animatedTitle_3)}>
            {'creator '}
          </span>
        </span>
      </h1>
    </section>
  )
}
