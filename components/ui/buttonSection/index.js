import styles from "./Button.module.css";

export default function ButtonSec({ ...props }) {
    return (
        <a href={props.link ? props.link : ""} className="better_focus">
            <button className={`${styles.button} hover`} tabIndex="-1">
                {props.text}
            </button>
        </a>
    );
}
