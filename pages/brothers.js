import Head from 'next/head'
import Layout from '../components/Layout'
import BrotherCard from '../components/BrotherCard'
import styles from '../styles/Home.module.css'

const brothers = [
  {
    id: 1,
    name: "John Dela Cruz",
    position: "Grand Triskelion",
    chapter: "Alpha Chapter",
    image: "/images/brothers/john.jpg",
    bio: "Dedicated leader with 5+ years of service to the fraternity. Committed to upholding our values of brotherhood and excellence."
  },
  {
    id: 2,
    name: "Michael Santos",
    position: "Vice Grand Triskelion",
    chapter: "Beta Chapter",
    image: "/images/brothers/michael.jpg",
    bio: "Strategic planner and community organizer. Passionate about creating meaningful impact through brotherhood and service."
  },
  {
    id: 3,
    name: "Robert Lim",
    position: "Secretary",
    chapter: "Gamma Chapter",
    image: "/images/brothers/robert.jpg",
    bio: "Organized and detail-oriented. Ensures our fraternity operations run smoothly and efficiently."
  },
  {
    id: 4,
    name: "David Tan",
    position: "Treasurer",
    chapter: "Delta Chapter",
    image: "/images/brothers/david.jpg",
    bio: "Financial expert with a passion for responsible stewardship. Manages our resources to maximize impact."
  }
]

export default function Brothers() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - Brothers</title>
        <meta name="description" content="Meet the brothers of Tau Gamma Phi Fraternity" />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Brothers</h1>
          <p className={styles.heroSubtitle}>Meet the dedicated members of Tau Gamma Phi</p>
        </div>
      </section>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Fraternity Leadership</h2>
            <p className={styles.sectionDescription}>
              Our dedicated leaders who guide the fraternity with wisdom, integrity, and commitment to our core values.
            </p>
            <div className={styles.valuesGrid}>
              {brothers.map(brother => (
                <BrotherCard key={brother.id} brother={brother} />
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Join Our Brotherhood</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Why Join Tau Gamma Phi?</h3>
                <p>Becoming a Triskelion means joining a network of professionals, leaders, and lifelong friends. Our membership process is designed to identify individuals who embody our values and are committed to making a positive impact.</p>
              </div>
              
              <div className={styles.valueCard}>
                <h3>Membership Process</h3>
                <p>Our process includes orientation, learning about our history and values, and demonstrating commitment to our principles. We seek men of character who will contribute to our brotherhood and community.</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <a href="/contact" className={styles.primaryButton}>Express Interest</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}