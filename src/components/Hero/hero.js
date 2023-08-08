import styles from './hero.module.css'
import arrow from '../../icons/arrow.svg'
import Button from '../Button/button'

export default function Hero(){
    return(
        <div className={styles.container}>
            <div className={styles.div}>
                <span className={styles.span}>WELCOME</span>
                <p className={styles.title}>Easy recipes<br></br> for any occasion</p>
                <p className={styles.details}>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim. Duis fermentum faucibus est.</p>
                <div className={styles.two_buttons}>
                    <Button type='dark' content='About Us'/>
                    <Button type='light' content='Our Catering'/>
                </div>
            </div>
        </div>
    )
}