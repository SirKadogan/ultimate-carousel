
import styles from './card.module.css';

const Card = ({ item, style }) => {
  const { title, images } = item;

  return (
    <div
      className={styles.card}
      style={style}>
      <div className={styles.cardContent}>

        <img src={images[0]} alt="Test" />
        <div className={styles.cardBody}>

          <h2>{title}</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illo adipisci reprehenderit eum omnis maxime, corrupti enim aspernatur doloremque quas hic </span>
        </div>
      </div>
    </div>)

}

export default Card;