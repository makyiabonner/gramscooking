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
    {id:0, img:'./images/spaghetti-pic.jpg', title:'Spaghetti with tomato sauce', content:`Delight in the timeless appeal of al dente spaghetti enveloped in a luscious tomato sauce.`},
    {id:1, img:'./images/seafood-pic.jpg', title:'Seafood soup', content:`Dive into a medley of ocean flavors with our delectable seafood soup.`},
    {id:2, img:'./images/oriental-pic.jpg', title:'Oriental soup', content:`Embark on an exotic journey of taste with our aromatic oriental soup.`},
    {id:3, img:'./images/toast-pic.jpg', title:'Toast with cream and strawberries', content:`Indulge in a sweet symphony of flavors with our toast topped with creamy delights and fresh strawberries.`},
    {id:4, img:'./images/salad-pic.jpg', title:'Mixed chef’s salad', content:`Experience a burst of freshness in every bite with our meticulously crafted mixed chef’s salad.`},
    {id:5, img:'./images/rice-pic.jpg', title:'Thailand rice food', content:`Transport your taste buds to Thailand with our flavorful and authentic rice dishes.`},
  ]
  
  const products = [
    {img:'./images/star-icon.png',title:'Betheme Star', content:`Explore the culinary universe with Betheme Star's extraordinary offerings.`},
    {img:'./images/food-icon.png',title:'World food', content:`Embark on a global taste adventure through our diverse world food selection.`},
    {img:'./images/spices-icon.png',title:'Aromatic spices', content:`Elevate your dishes with the enchanting allure of aromatic spices.`},
    {img:'./images/fish-icon.png',title:'Fresh Meat and Fish', content:`Indulge in the finest quality of fresh meat and fish for a delectable dining experience.`}
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
                context={recipe.content}
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
            details='Experience the essence of nature through our exquisite range of natural products and aromatic spices.  Explore the world of natural goodness and savor the enticing fragrances that transform ordinary moments into extraordinary experiences.'
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
                details={product.content}
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
