

import Carousel from './components/carousel';

// Assets
import Logo from './assets/logo.png';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="logo" height={350} />
      <Carousel />
      <span className={styles.credits}>Developed by <a href="https://github.com/sirkadogan" target="_blank" rel="noreferrer">Thales Kenne</a></span>
    </div>
  );
}

export default App;
