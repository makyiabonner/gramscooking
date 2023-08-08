import styles from './titlelayout.module.css';

export default function TitleLayout(props) {
    const isLight = props.type.toLowerCase() === 'light';
    const isDetailsVisible = props.details !== false;

    return (
        <>
            <span className={styles.span}>{props.span_content}</span>
            <p className={isLight ? styles.title_light : styles.title_dark}>
                {props.title_content1}<br /> {props.title_content2}
            </p>
            {isDetailsVisible && (
                <p className={isLight ? styles.details_light : styles.details_dark}>
                    {props.details}
                </p>
            )}
        </>
    );
}