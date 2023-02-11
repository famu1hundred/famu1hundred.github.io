
import React from 'react'
import Section from '../Section'
import BarChart from '../BarChart'
import styles from './SkillSet.module.css'

export default function SkillSet() {
  return (
    <Section heading="My Expertise">
      <div className={styles.grid}>
        <article>
          <h4>Frontend</h4>
          <BarChart
            title="React"
            score={100}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="NextJS"
            score={100}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="React Native"
            score={90}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="Angular"
            score={80}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
          <BarChart
            title="Nativescript"
            score={45}
            color="linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))"
          />
        </article>
        <article>
          <h4>Backend</h4>
          <BarChart
            title="GraphQL"
            score={80}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="Node"
            score={80}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="NoSQL"
            score={60}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="OAuth"
            score={60}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
          <BarChart
            title="PHP"
            score={20}
            color="linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))"
          />
        </article>
        <article>
          <h4>Site Reliability</h4>
          <BarChart
            title="GCP"
            score={80}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Optimizely"
            score={65}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Jest"
            score={60}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="Docker"
            score={40}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
          <BarChart
            title="AWS"
            score={20}
            color="linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))"
          />
        </article>
        <article>
          <h4>Programming Language</h4>
          <BarChart
            title="Javascript"
            score={100}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="HTML"
            score={100}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="SASS/CSS"
            score={80}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="Typescript"
            score={70}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
          <BarChart
            title="Swift"
            score={25}
            color="linear-gradient(90deg, #5665f6, #d8b4fe)"
          />
        </article>
      </div>
    </Section>
  )
}
