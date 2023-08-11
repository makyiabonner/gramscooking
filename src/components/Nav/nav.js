import styles from './nav.module.css';
import menu from '../../icons/menu.svg'

export default function Nav(){
    return (
        <>
            <nav className={styles.nav}>
                <img src="" alt="" className={styles.logo} />
                <div className={styles.div}>
                    <ul className={styles.nav_list}>
                        <li className={styles.list_item}>Home</li>
                        <li className={styles.list_item}>Recipes</li>
                        <li className={styles.list_item}>Recipe</li>
                        <li className={styles.list_item}>About us</li>
                        <li className={styles.list_item}>Catering</li>
                    </ul>
                    <div className={styles.div}>
                        <img src={menu} alt="" className={styles.hamburger_menu} />
                        <button className={styles.btn}>Buy now</button>
                    </div>
                </div>
            </nav>
        </>
    )
}