import styles from './carousel.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <FiChevronLeft className={styles.arrow} />
      <div className={styles.blocksContainer}>
        <div className={styles.block}>

        </div>
        <div className={styles.block}>

        </div>
        <div className={styles.block}>

        </div>
        <div className={styles.block}>

        </div>
        <div className={styles.block}>

        </div>
      </div>

      <FiChevronRight className={styles.arrow} />
    </div>
  )
}

export default Carousel;