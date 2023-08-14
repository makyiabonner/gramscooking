import React, { useState } from 'react';
import styles from '../Home_foodcard/home_foodcard.module.css';

export default function HomeFoodCard(props) {
    const [isActive, setIsActive] = useState(false);
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fullDate = currentDate.toLocaleDateString('en-US', options);
    return (
        <div className={styles.card}>
                <div className={styles.img_container}>
                    <img src={props.img} alt="" className={styles.food_img} />
                </div>
                <div className={styles.textarea}>
                    <div className={styles.span_textbox}>
                        <svg className={styles.profile} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="25">
                            <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/>
                        </svg>
                        <span className={styles.span}>Muffin Group</span>
                        <span className={styles.span}> at</span>
                        <svg className={styles.time} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="25">
                            <path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/>
                        </svg>
                        <span className={styles.span}>{fullDate}</span>
                    </div>
                    <h4 className={styles.h4}>{props.title}</h4>
                    <p className={styles.p}>{props.context}</p>
                </div>
                <div className={styles.bottom_content}>
                    <button
                        className={`${isActive ? `${styles.active} ${styles.like_button}` : `${styles.inactive} ${styles.like_button}`}`}
                        onClick={() => setIsActive(!isActive)}
                    >
                        <svg className={styles.like} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="25">
                            <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"/>
                        </svg>
                        <span className={styles.like_span}>{isActive? `98` : `97`}</span>
                    </button>
                    <div
                        className={styles.readme}
                    >
                        <svg className={styles.book} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="25">
                            <path d="M180-180h600v-375L555-780H180v600Zm0 60q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h400l260 260v400q0 24.75-17.625 42.375T780-120H180Zm99-171h402v-60H279v60Zm0-159h402v-60H279v60Zm0-159h276v-60H279v60Zm-99 429v-600 600Z"/>
                        </svg>
                        <a href='/' className={styles.a}>Read more</a>
                    </div>
                </div>
        </div>
    );
}
