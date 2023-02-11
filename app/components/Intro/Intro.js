import React from 'react'
import styles from './Intro.module.css'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import Link from '../Link'
import Section from '../Section'

export default function Intro() {
  return (
    <Section>
      <div className={styles.wrap}>
        <div className={styles.portrait} style={{backgroundImage: `url('assets/me.webp')`}}>

        </div>
        
        <div className={styles.greeting}>
          <h1>Raymond Pace</h1>
          <p>
            Thats me, when I was younger. Now, I am a dynamic, highly motivated, disciplined individual with the ability to understand and articulate complex technical information. Additionally, I am adept at analyzing client needs and delivering technical solutions that achieve significant ROI.
          </p>
          <div className={styles.socials}>
            <Link
              href='https://www.linkedin.com/in/raymondbpace'
              aria-label="Link to Raymond's Linkedin profile"
            >
              <GrLinkedin size="1.5em" />
              <span hidden>Link to Raymond's Linkedin profile</span>
            </Link>
            <Link
              href='https://github.com/famu1hundred'
              aria-label="Link to Raymond's GitHub profile"
            >
              <GrGithub size="1.5em" />
              <span hidden>Link to Raymond's GitHub profile</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
