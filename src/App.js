import styles from './App.module.css';
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';
import Button from './components/Button/button';
import TitleLayout from './components/TitleLayout/titlelayout';
import HomeFoodCard from './components/Home_foodcard/home_foodcard';
import ProductLayout from './components/ProductLayout/productlayout';
import Testimonial from './components/Testimonial/testimonial';

function App() {
  const recipes = [
    {id:0, img:'./images/spaghetti-pic.jpg', title:'Spaghetti with tomato sauce'},
    {id:1, img:'./images/seafood-pic.jpg', title:'Seafood soup'},
    {id:2, img:'./images/oriental-pic.jpg', title:'Oriental soup'},
    {id:3, img:'./images/toast-pic.jpg', title:'Toast with cream and strawberries'},
    {id:4, img:'./images/salad-pic.jpg', title:'Mixed chef’s salad'},
    {id:5, img:'./images/rice-pic.jpg', title:'Thailand rice food'},
  ]
  
  const products = [
    {img:'./images/star-icon.png',title:'Betheme Star'},
    {img:'./images/food-icon.png',title:'World food'},
    {img:'./images/spices-icon.png',title:'Aromatic spices'},
    {img:'./images/fish-icon.png',title:'Fresh Meat and Fish'}
  ]
  return (
    <>
      <Nav/>
      <Hero/>
      <section className={styles.section}>
        <div className={styles.new_table_div}>
          <h2 className={styles.subtitle_light}>Whats new on our table</h2>
          <div>
            <span className={styles.span}>Do you want to see more? </span>
            <a href="/" className={styles.a}>
              <span className={styles.a_span}>Show all recipes</span>
            </a>
          </div>
        </div>
        <div className={styles.our_table_recipes}>
          {recipes.map(recipe => {
            return (
              <HomeFoodCard
                key={recipe.id}
                img={recipe.img}
                title={recipe.title}
                context='Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.'
              />
            )
          })}
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
      <section className={styles.natural_products_section}>
        <div>
          <TitleLayout
            type='light'
            span_content='ABOUT US'
            title_content1='Natural products and'
            title_content2='aromatic spices'
            details='Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan.'
          />
          <div className={styles.two_buttons}>
            <Button type='dark' content='Read more'/>
            <Button type='light' content='Our catering'/>
          </div>
        </div>
        <div className={styles.bottom_section}>
          {products.map(product =>{
            return (
              <ProductLayout 
                img={product.img}
                title={product.title}
                details='Ut ultricies imperdiet sodales. Aliquam fringilla aliquam.'
              />
            )
          })}
        </div>
      </section>
      <Testimonial/>
    </>
  );
}

export default App;
