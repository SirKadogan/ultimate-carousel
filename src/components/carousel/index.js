import { useState, useEffect } from 'react';

// Libraries
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Services
import api from '../../services/api';

// Styles
import styles from './carousel.module.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    async function init() {
      const { data } = await api.get('/projects');
      setProjects(data);
    }
    init();
  }, [])

  const handleBackClick = () => {
    setNextDisabled(false);
    const nextIndex = currentIndex - 4;
    if (nextIndex <= 0) {
      setPrevDisabled(true);
      /*only goes back the difference between the negative result and 
      the usual 4 steps*/
      const remainingItems = nextIndex + 4;
      setCurrentIndex(currentIndex - remainingItems);
    } else {
      setCurrentIndex(nextIndex);
    }
  }

  const handleNextClick = () => {
    setPrevDisabled(false);
    const nextIndex = currentIndex + 4;
    if ((nextIndex + 4) >= projects.length) {
      setNextDisabled(true);
      const remainingItems = projects.length - nextIndex;
      setCurrentIndex(currentIndex + remainingItems)
    } else {
      setCurrentIndex(nextIndex)
    }
  }


  return (
    <div className={styles.carouselContainer}>
      <button disabled={prevDisabled} onClick={handleBackClick}>
        <FiChevronLeft
          className={styles.arrow}
        />
      </button>

      <div className={styles.blocksContainer}>
        {projects.map((item, itemIndex) => (
          <div className={styles.block} style={{ left: 250 * (itemIndex - currentIndex) }}
          >
            <h1>{item.title}</h1>
          </div>
        ))}

      </div>
      <button disabled={nextDisabled} onClick={handleNextClick}>
        <FiChevronRight className={styles.arrow} />
      </button>
    </div >
  )
}

export default Carousel;