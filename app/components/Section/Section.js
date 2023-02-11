import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export default function Section({ fluid, heading, children }) {
  return (
    <section className={classNames(styles.section, { [styles.fluid]: fluid })}>
      {heading && <h3>{heading}</h3>}
      {children}
    </section>
  )
}
