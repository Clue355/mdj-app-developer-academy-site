import styles from "@/styles/MobileNav.module.css";
import { useState } from "react";

export default function MobileNav() {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <nav className={styles.navbar}>
            <img src="/mdj-main-logo-white.svg" />
            <button
                className={isClicked ? styles.clickedButton : styles.button}
                id={styles.mobile_button}
                onClick={handleButtonClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
