"use client";

import React from 'react'
import styles from './Menubar.module.css'
import { GrGithub } from 'react-icons/gr'
import DarkmodeSwitch from '../DarkmodeSwitch'
import Link from '../Link'
import { FiMessageCircle } from 'react-icons/fi'

const Menubar = () => {
  return (
    <div className={styles.menubar}>
      <Link href="/contact" className={styles.hireMe}>
        <FiMessageCircle size="1.5em" />
        Contact Me
      </Link>
      <DarkmodeSwitch />
      <Link
        href='https://github.com/famu1hundred'
        aria-label="See more Raymond's work on GitHub"
      >
        <GrGithub size="1.5em" />
      </Link>
    </div>
  )
}

export default Menubar
