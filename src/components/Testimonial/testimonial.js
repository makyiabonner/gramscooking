import React, { useState, useRef } from 'react';
import styles from './testimonial.module.css';

export default function Testimonial() {
    const [activeButtons, setActiveButtons] = useState([false, false, false, false]);
    const people = [
        { img: './images/testimonial-1-lg-pic.jpg', comment: `The Thai rice food journeyed me through the vibrant streets of Thailand, each bite a passport to its authentic and savory delights.`, name: 'Katarina Johnes' },
        { img: './images/testimonial-2-lg-pic.jpg', comment: `The seafood soup was a tidal wave of succulent flavors, each spoonful a voyage into the ocean's embrace.`, name: 'Brandon Ross' },
        { img: './images/testimonial-3-lg-pic.jpg', comment: `The oriental soup transported me to distant lands with its aromatic spices and captivating essence.`, name: 'Jennifer Lee' },
        { img: './images/testimonial-4-lg-pic.jpg', comment: `The mixed chef's salad was an orchestra of textures and tastes, a harmonious celebration of freshness on every plate.`, name: 'Tony Johnson' }
    ];

    const personRefs = useRef([]);

    const toggleButton = (index) => {
        const newActiveButtons = activeButtons.map((isActive, i) => (i === index ? !isActive : false));
        setActiveButtons(newActiveButtons);

        if (personRefs.current[index] && personRefs.current[index].current) {
            personRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.div}>
                {people.map((person, index) => {
                    personRefs.current[index] = React.createRef();
                    return (
                        <div className={styles.content} key={person.name} ref={personRefs.current[index]}>
                            <img src={person.img} alt="" className={styles.profile_img} />
                            <div>
                                <p className={styles.profile_comment}>{person.comment}</p>
                            </div>
                            <span className={styles.span}>. . .</span>
                            <p className={styles.profile_name}>{person.name}</p>
                        </div>
                    );
                })}
            </div>
            <div className={styles.four_button}>
                {activeButtons.map((isActive, index) => (
                    <button
                        key={index}
                        onClick={() => toggleButton(index)}
                        className={isActive ? styles.active : styles.inactive}
                    ></button>
                ))}
            </div>
        </section>
    );
}

