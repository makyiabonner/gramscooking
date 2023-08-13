import styles from './button.module.css';
import arrow from '../../icons/arrow.svg';

export default function Button(props){
    if (props.type.toLowerCase() === 'dark'){
        return(
            <button className={styles.red_button}>
                <p className={styles.p}>{props.content}</p>
                <img className={styles.red_arrow} src={arrow} alt="arrow" />
            </button>
        )
    }
    if (props.type.toLowerCase() === 'light'){
        return(
        <button className={styles.light_button}>
            <p className={styles.p}>{props.content}</p>
            <img className={styles.light_arrow} src={arrow} alt="arrow" />
        </button>
        )
    }
}