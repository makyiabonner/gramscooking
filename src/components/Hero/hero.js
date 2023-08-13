import styles from './hero.module.css'
import Button from '../Button/button'
import TitleLayout from '../TitleLayout/titlelayout'

export default function Hero(){
    return(
        <div className={styles.container}>
            <div className={styles.div}>
                <TitleLayout 
                    type='dark' 
                    span_content='WELCOME' 
                    title_content1='Easy recipes' 
                    title_content2=' for any occasion'
                    details='Whip up delicious dishes effortlessly for any occasion with these easy recipes. From quick weeknight dinners to impressive party appetizers, these recipes are designed to simplify your cooking experience while delivering amazing flavors.'/>
                <div className={styles.two_buttons}>
                    <Button type='dark' content='About Us'/>
                    <Button type='light' content='Our Catering'/>
                </div>
            </div>
        </div>
    )
}