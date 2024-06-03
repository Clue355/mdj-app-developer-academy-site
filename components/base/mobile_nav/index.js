import styles from "./MobileNav.module.css";
import { useState } from "react";

export default function MobileNav({ isClicked, handleClick }) {
    return (
        <nav className={styles.navbar}>
            <img src="/mdj-main-logo-white.svg" />
            <button
                className={isClicked ? styles.clickedButton : styles.button}
                id={styles.mobile_button}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
