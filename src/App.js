import styles from './App.module.css';
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';
import Button from './components/Button/button';

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
          <Button type='dark' content='Show all'/>
        </div>
      </section>
    </>
  );
}

export default App;
