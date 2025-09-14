import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function CoinLogo() {
  const [isFlipping, setIsFlipping] = useState(false)
  const [showFront, setShowFront] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  // Auto-flip on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasLoaded) {
        handleFlip()
        setHasLoaded(true)
      }
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [hasLoaded])

  const handleFlip = () => {
    if (!isFlipping) {
      setIsFlipping(true)
      setShowFront(!showFront)
      
      setTimeout(() => {
        setIsFlipping(false)
      }, 1000)
    }
  }

  const handleClick = () => {
    handleFlip()
  }

  return (
    <div 
      className={`${styles.coinContainer} ${isFlipping ? styles.flipping : ''}`}
      onClick={handleClick}
      title="Click to flip!"
    >
      <div className={styles.coin}>
        {/* Front of coin - TGP Seal */}
        <div className={`${styles.coinSide} ${styles.coinFront} ${showFront ? styles.visible : styles.hidden}`}>
          <Image
            src="/images/tgp3.png"
            alt="Tau Gamma Phi Seal"
            width={60}
            height={60}
            className={styles.coinImage}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          {/* Fallback if image fails to load */}
          <span className={styles.fallbackSymbol} style={{display: 'none'}}>ΤΓΦ</span>
        </div>
        
        {/* Back of coin - Greek Letters */}
        <div className={`${styles.coinSide} ${styles.coinBack} ${!showFront ? styles.visible : styles.hidden}`}>
          <span className={styles.greekSymbols}>
            <span className={styles.gamma}>Γ</span>
            <span className={styles.phi}>Φ</span>
          </span>
        </div>
      </div>
    </div>
  )
}