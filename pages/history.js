import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function History() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - History</title>
        <meta name="description" content="History of Tau Gamma Phi Fraternity" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our History</h1>
          <p className={styles.heroSubtitle}>The legacy of Tau Gamma Phi since 1968</p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Foundation</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>October 4, 1968</h3>
                <p>Tau Gamma Phi Fraternity was founded at the University of the Philippines Diliman. It was established by a group of students who sought to create an organization that would promote brotherhood, leadership, and service to the community and nation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Early Years</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Growth & Expansion</h3>
                <p>In its formative years, the fraternity quickly grew in numbers and influence, establishing chapters in various universities across the Philippines. The Triskelions became known for their academic excellence, leadership, and commitment to social causes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Expansion</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>National Presence</h3>
                <p>Throughout the 1970s and 1980s, Tau Gamma Phi expanded beyond university campuses, establishing alumni chapters and engaging in community development projects. The fraternity became one of the largest and most recognized Greek-letter organizations in the Philippines.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Modern Era</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Continuing Legacy</h3>
                <p>Today, Tau Gamma Phi continues to thrive with chapters throughout the Philippines and overseas. The fraternity remains committed to its founding principles while adapting to the challenges of the modern world, continuing to produce leaders in various fields including politics, business, arts, and public service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}