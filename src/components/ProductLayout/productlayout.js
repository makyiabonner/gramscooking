import styles from './productlayout.module.css'

export default function ProductLayout(props){
    return(
        <section className={styles.section}>
            <img src={props.img} alt="" className={styles.img} />
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.details}>{props.details}</p>
        </section>
    )
}