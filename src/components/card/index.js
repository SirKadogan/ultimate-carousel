
import { useMemo } from 'react';
import styles from './card.module.css';

const Card = ({ item, style }) => {
  const { title, images } = item;

  const pickImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  }

  const selectedImage = useMemo(() => pickImage(), [title]);

  return (

    <div
      className={styles.card}
      style={style}>
      <a href={selectedImage} target="_blank" rel="noreferrer">
        <div className={styles.cardContent}>
          <img src={selectedImage} alt="Test" />
          <div className={styles.cardBody}>
            <h2>{title}</h2>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo adipisci reprehenderit eum omnis maxime, corrupti enim aspernatur doloremque quas hic </span>
          </div>
        </div>
      </a>
    </div>
  )

}

export default Card;