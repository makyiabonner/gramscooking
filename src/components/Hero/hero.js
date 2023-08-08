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
                    details='Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim. Duis fermentum faucibus est.'/>
                <div className={styles.two_buttons}>
                    <Button type='dark' content='About Us'/>
                    <Button type='light' content='Our Catering'/>
                </div>
            </div>
        </div>
    )
}