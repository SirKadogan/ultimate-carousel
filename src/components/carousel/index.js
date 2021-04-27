import { useState, useEffect } from 'react';

// Libraries
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Services
import api from '../../services/api';

// Styles
import styles from './carousel.module.css';

const Carousel = () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function init() {
      const { data } = await api.get('/projects');
      console.log(data);
      setProjects(data);
    }

    init();
  }, [])

  const handleBackClick = () => {
    const nextIndex = currentIndex - 4;
    if (nextIndex <= 0) {
      /*only goes back the difference between the negative result and 
      the usual 4 steps*/
      const remainingItems = nextIndex + 4;
      setCurrentIndex(currentIndex - remainingItems);
    } else {
      setCurrentIndex(nextIndex);
    }
  }

  const handleNextClick = () => {
    const nextIndex = currentIndex + 4;
    if ((nextIndex + 4) > items.length) {
      const remainingItems = items.length - nextIndex;
      setCurrentIndex(currentIndex + remainingItems)
    } else {
      setCurrentIndex(nextIndex)
    }
  }


  return (
    <div className={styles.carouselContainer}>
      <FiChevronLeft className={styles.arrow} onClick={handleBackClick} />

      <div className={styles.blocksContainer}>
        {projects.map((item, itemIndex) => (
          <div className={styles.block} style={{ left: 250 * (itemIndex - currentIndex) }}
          >
            <h1>{item.title}</h1>
          </div>
        ))}

      </div>

      <FiChevronRight className={styles.arrow} onClick={handleNextClick} />
    </div >
  )
}

export default Carousel;