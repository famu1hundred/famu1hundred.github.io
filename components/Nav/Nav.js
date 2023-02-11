"use client";

import React, { useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FiX } from 'react-icons/fi'
import styles from './Nav.module.css'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import { useSchemeContext } from '../SchemeProvider'
import DarkmodeSwitch from '../DarkmodeSwitch'
import Link from '../Link'
import classNames from 'classnames';

export default function Nav() {
  const { scheme } = useSchemeContext();
  const [isMenuOpen, openMenu] = useState(false)
  const closeMenu = () => openMenu(false)
  const onMenuStateChange = ({ isOpen }) => openMenu(isOpen)
  return (
    <header className={styles.header}>
      <div className={styles.sidebar}>
        <div>
          <div className={classNames(styles.overlay, isMenuOpen ? styles.open : null)}></div>
          <div>
            <div className={styles.burger}>
              <button
                style={{display: isMenuOpen ? 'none': 'block'}}
                onClick={() => openMenu(!isMenuOpen)}>
              </button>
              <BiMenuAltLeft style={{display: isMenuOpen ? 'none': 'block'}} />
            </div>
          </div>
          <div id='menu' className={classNames(styles.menuWrap, isMenuOpen ? styles.open : null, scheme === 'light' ? styles.light : styles.dark )}>
            <div className={styles.menu}>
              <nav>
              <Link href="/" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Home
                </button>
              </Link>
              {/*
              <Link href="/articles" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Articles
                </button>
              </Link>
              <Link href="/work" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Work
                </button>
              </Link>
              */}
              <Link href="/now" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Now
                </button>
              </Link>
              <Link href="/expertise" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Expertise
                </button>
              </Link>
              <Link href="/contact" className={styles.link}>
                <button
                  className={styles.button}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  Contact
                </button>
              </Link>

              <span className={styles.pusher} />
              <span className={styles.divider} />

              <div className={styles.profile}>
                <Link
                  href='https://www.linkedin.com/in/raymondbpace'
                  aria-label="Link to Raymond's Linkedin profile"
                  className={styles.iconLink}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <GrLinkedin />
                </Link>
                <Link
                  href='https://github.com/famu1hundred'
                  aria-label="Link to Raymond's GitHub profile"
                  className={styles.iconLink}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <GrGithub />
                </Link>
              </div>
              <DarkmodeSwitch showLabel tabIndex={isMenuOpen ? 0 : -1} />
              </nav>
            </div>
            <div>
              <div className={styles.cross}>
                <button
                  style={{display: isMenuOpen ? 'block': 'none'}}
                  onClick={closeMenu}>
                </button>
                <FiX style={{display: isMenuOpen ? 'block': 'none'}} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  )
}
