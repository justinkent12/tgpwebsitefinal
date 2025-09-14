import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - About</title>
        <meta name="description" content="Learn about Tau Gamma Phi Fraternity" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Tau Gamma Phi</h1>
          <p className={styles.heroSubtitle}>Learn about our history, mission, and values</p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Purpose & Commitment</h3>
                <p>Tau Gamma Phi Fraternity is dedicated to fostering brotherhood, promoting academic excellence, and serving the community. We strive to develop leaders who will make a positive impact on society through our core values and principles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Future Leadership</h3>
                <p>To be the premier fraternity that produces outstanding leaders committed to serving humanity and upholding the values of truth, justice, and equality. We envision a brotherhood that transcends generations and creates lasting positive change.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>The Triskelion Symbol</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Meaning & Significance</h3>
                <p>The Triskelion, our fraternity symbol, represents the three-fold ideals of the fraternity: Brotherhood, Service, and Excellence. The three interlocking spirals symbolize the eternal bond between members and the continuous pursuit of these ideals throughout our lives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Our Core Principles</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Brotherhood</h3>
                <p>We believe in creating lifelong bonds of friendship, trust, and mutual support among our members. Brotherhood is the foundation upon which our fraternity is built.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Service</h3>
                <p>We are committed to serving our communities and making a positive impact through various outreach programs, charity work, and community development initiatives.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Excellence</h3>
                <p>We strive for excellence in all our endeavors - academic, professional, and personal. We encourage our members to reach their highest potential and become leaders in their fields.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}