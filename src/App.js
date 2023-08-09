import styles from './App.module.css';
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';
import Button from './components/Button/button';
import TitleLayout from './components/TitleLayout/titlelayout';
import HomeFoodCard from './components/Home_foodcard/home_foodcard';

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <section className={styles.section}>
        <div className={styles.new_table_div}>
          <h2 className={styles.subtitle_light}>Whats new on our table</h2>
          <div>
            <span className={styles.span}>Do you want to see more? </span>
            <a href="" className={styles.a}>
              <span className={styles.a_span}>Show all recipes</span>
            </a>
          </div>
        </div>
        <div className={styles.our_table_recipes}>
          <HomeFoodCard
            img='./images/spaghetti-pic.jpg'
            title='Spaghetti with tomato sauce'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
          <HomeFoodCard
            img='./images/seafood-pic.jpg'
            title='Seafood soup'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
          <HomeFoodCard
            img='./images/oriental-pic.jpg'
            title='Oriental soup'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
          <HomeFoodCard
            img='./images/toast-pic.jpg'
            title='Toast with cream and strawberries'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
          <HomeFoodCard
            img='./images/salad-pic.jpg'
            title='Mixed chef’s salad'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
          <HomeFoodCard
            img='./images/rice-pic.jpg'
            title='Thailand rice food'
            context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
          />
        </div>
        <div className={styles.other_recipes}>
            <TitleLayout 
              type='light'
              span_content='CHECK THIS'
              title_content1='Other recipes'
            />
          <Button type='dark' content='Show all'/>
        </div>
      </section>
    </>
  );
}

export default App;
