import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import Intro from '../components/Intro/Intro'
import SkillSet from '../components/SkillSet'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Intro />
      <SkillSet />
    </main>
  )
}
