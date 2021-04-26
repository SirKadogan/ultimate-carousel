import styles from './carousel.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <FiChevronLeft className={styles.arrow} />
      <div className={styles.blocksContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <div className={styles.block}>
            <h1>{item}</h1>
          </div>
        ))}

      </div>

      <FiChevronRight className={styles.arrow} />
    </div>
  )
}

export default Carousel;