import styles from './nav.module.css';
import menu from '../../icons/menu.svg';
import close from '../../icons/close-button.svg';
import logo from '../../icons/logo.svg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Nav(){
    const [isActive, setIsActive ] = useState(false);
    const toggleActive = () => setIsActive(!isActive);
    return (
        <>
            <nav className={styles.nav}>
                <section>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <div className={styles.div}>
                        <ul className={styles.nav_list}>
                            <li className={styles.list_item}>Home</li>
                            <li className={styles.list_item}>Recipes</li>
                            <li className={styles.list_item}>Recipe</li>
                            <li className={styles.list_item}>About us</li>
                            <li className={styles.list_item}>Catering</li>
                        </ul>
                        <div className={styles.div}>
                            <button className={styles.ham_btn} onClick={toggleActive} >
                                <img src={menu} alt="" className={styles.hamburger_menu} />
                            </button>
                            <button className={styles.btn}>Buy now</button>
                        </div>
                    </div>
                </section>
            </nav>
            <section className={`${styles.mobile_menu} ${isActive ? styles.open : styles.close}`}>
                <div className={styles.mobile_close_div}>
                    <button onClick={toggleActive} className={styles.close_button}>
                        <img src={close} alt='close button' className={styles.close_button_icon}/>
                    </button>
                </div>
                <div className={styles.mobile_buy_div}>
                    <button className={styles.mobile_buy_btn}>Buy now</button>
                </div>
                <ul className={styles.mobile_list}>
                    <li className={styles.mobile_list_item}>Home</li>
                    <li className={styles.mobile_list_item}>Recipes</li>
                    <li className={styles.mobile_list_item}>Recipe</li>
                    <li className={styles.mobile_list_item}>About us</li>
                    <li className={styles.mobile_list_item}>Catering</li>
                </ul>
                <ul className={styles.social_media_div}>
                    <li><a className={styles.social_media_logo}><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a className={styles.social_media_logo}><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a className={styles.social_media_logo}><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </section>
        </>
    )
}