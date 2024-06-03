import styles from "./ButtonLink.module.css";
import Link from "next/link";

export default function ButtonLink({ ...props }) {
    return (
        <Link href={props.link ? props.link : ""} className="better_focus">
            <button className={`${styles.button} hover`} tabIndex="-1">
                {props.text}
            </button>
        </Link>
    );
}
