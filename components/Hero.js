import styles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>TAU GAMMA PHI</h1>
        <p className={styles.heroSubtitle}>TRISKELIONS GRAND FRATERNITY</p>
        <p className={styles.motto}>FORTIS VOLUNTAS FRATERNITAS</p>
        <div className={styles.heroButtons}>
          <a href="/about" className={styles.primaryButton}>Learn More</a>
          <a href="/contact" className={styles.secondaryButton}>Join Us</a>
        </div>
      </div>
    </section>
  )
}