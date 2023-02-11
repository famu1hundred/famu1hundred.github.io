import React from 'react'
import ContactSection from '../components/Contact'
import styles from '../styles/Contact.module.css'
import Section from '../components/Section'

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1>Get in Touch</h1>
      <h2>Let's build something together</h2>
      <ContactSection />
    </main>
  )
}
