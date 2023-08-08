import styles from './App.css';
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <section className={styles.section}>
        <h2 className={styles.subtitle_light}>Whats new on our table</h2>
        <span className={styles.span}>Do you want to see more?</span>
        <a href="" className={styles.a}>
          <span className={styles.a_span}>Show all recipes</span>
        </a>

        <div className={styles.other_recipes}>
          <span className={styles.subtitle_span}>CHECK THIS</span>
          <h2 className={styles.subtitle_h2}>Other recipes</h2>
          <button className={styles.red_button}>Show all</button>
        </div>
      </section>
    </>
  );
}

export default App;
