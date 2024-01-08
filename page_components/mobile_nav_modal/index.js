import React from "react";

import styles from "@/styles/MobileNavModal.module.css";

export default function NavModal({ isClicked, handleClick }) {
    return (
        <div className={isClicked ? styles.modal_parent : styles.modal_closed}>
            <div className={isClicked ? styles.div_parent : styles.modal_closed}>
                <ul>
                    <li className={styles.link}>
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#about">Contact</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#about">The Academy</a>
                    </li>
                </ul>
            </div>
            <div className={styles.modal_background} onClick={handleClick}></div>
        </div>
    );
}
