import React from 'react'
import styles from './BarChart.module.css'

export default function BarChart({ title, score, color }) {
  return (
    <div className={styles.grid}>
      <span className={styles.sm} data-testid="barchart-label">
        {title}
      </span>
      <span className={styles.lg}>
        <span
          className={styles.bar}
          style={{ width: `${score}%`, background: color }}
          role="math"
          aria-label={`${score}%`}
          data-testid="barchart-bar"
        />
      </span>
    </div>
  )
}
