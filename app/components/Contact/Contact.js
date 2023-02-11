import React from 'react'
import Section from '../Section'
import styles from './Contact.module.css'
import Link from '../Link'

export default function Contact({ heading }) {
  return (
    <Section heading={heading}>
      <p>
        If you are looking for help to build something to make an impact and you
        care about innovation and sustainability, Let's talk{' '}
        <span role="img" aria-label="Raising Hands">
          🙌🏾
        </span>
      </p>
      <p>Send me an email at:</p>
      <p className={styles.email}>famu1hundred@gmail.com</p>
      
      <p>
        Just want to say hi? Ping me over on{' '}
        <Link href='https://www.linkedin.com/in/raymondbpace'>Linkedin</Link>!
      </p>
    </Section>
  )
}
