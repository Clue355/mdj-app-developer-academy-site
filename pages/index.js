import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MobileNav from "@/components/base/mobile_nav";
import NavModal from "@/components/base/mobile_nav_modal";
import ButtonSec from "@/components/ui/buttonSection";
import ButtonLink from "@/components/ui/buttonLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <NavModal isClicked={isClicked} handleClick={handleButtonClick} />
                <MobileNav isClicked={isClicked} handleClick={handleButtonClick} />
                <nav className={styles.navbar} id="nav">
                    <div className={styles.div_parent}>
                        <div className={styles.img_parent}>
                            <img src="/mdj-main-logo-white.svg" alt="App Academy Logo." />
                        </div>
                        <ul className={`${styles.list_parent}`}>
                            <li>
                                <a href="#about" className="better_focus">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="better_focus">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#academy" className="better_focus">
                                    The Academy
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* <!-- banner_section --> */}
                <section className={styles.banner_section}>
                    <div className={styles.content_div}>
                        <h1>Your Journey Into Tech Starts Here</h1>

                        <a href="#about">
                            <button tabIndex="-1">Learn More</button>
                        </a>
                    </div>
                </section>
                {/* <!-- end banner_section -->

        <!-- info_section --> */}
                <section className={styles.info_section} id="academy" tabIndex="0">
                    {/* <!-- title and description --> */}
                    <div className={styles.desc}>
                        <h2>App Developer Academy</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ex, lobortis et tellus
                            nec, feugiat consequat augue. Suspendisse nec metus sed turpis suscipit maximus. Integer
                            bibendum tellus nec metus semper bibendum. Quisque sagittis lectus eu enim aliquet, eget
                            facilisis massa lacinia. Donec vulputate purus id porttitor tempor. Nullam finibus tellus at
                            dolor imperdiet, eget rutrum sapien ultricies. Curabitur egestas magna eget est varius
                            dignissim. Nulla fringilla tellus id magna tincidunt commodo. Sed lacinia sed orci sed
                            sodales. Quisque purus leo, pulvinar eu est eget, ornare bibendum magna.
                        </p>
                    </div>
                    {/* <!-- value adds --> */}
                    <div className={styles.values}>
                        {/* <!-- value add 1 --> */}
                        <div className={styles.value_add}>
                            <div className={styles.value_image}>
                                {/** TODO: descriptive text in alt property needed here in actual image */}
                                <img src="/logo.png" alt="image." />
                            </div>
                            <h3>Value Add 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ex, lobortis et tellus
                                nec, feugiat consequat augue. Suspendisse nec metus sed turpis suscipit maximus.
                            </p>
                        </div>
                        {/* <!-- value add 2 --> */}
                        <div className={styles.value_add}>
                            <div className={styles.value_image}>
                                {/** TODO: descriptive text in alt property needed here in actual image */}
                                <img src="/logo.png" alt="image." />
                            </div>
                            <h3>Value Add 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ex, lobortis et tellus
                                nec, feugiat consequat augue. Suspendisse nec metus sed turpis suscipit maximus.
                            </p>
                        </div>
                        {/* <!-- value add 3 --> */}
                        <div className={styles.value_add}>
                            <div className={styles.value_image}>
                                {/** TODO: descriptive text in alt property needed here in actual image */}
                                <img src="/logo.png" alt="image." />
                            </div>
                            <h3>Value Add 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis ex, lobortis et tellus
                                nec, feugiat consequat augue. Suspendisse nec metus sed turpis suscipit maximus.
                            </p>
                        </div>
                        {/* <!-- end value adds --> */}
                    </div>
                    {/* <!-- signup button --> */}
                    <div className={styles.signup}>
                        {/** TODO: add link property with correct link to this button */}
                        <ButtonLink text="Sign Up to Start Your Journey Today" />
                    </div>
                </section>
                {/* <!-- end info_section -->
        <!-- about the author section --> */}
                <section className={`${styles.about_section} better_focus`} id="about" tabIndex="0">
                    <div className={styles.about_div}>
                        {/* <!-- image --> */}
                        <div className={styles.about_image}>
                            <img src="/600x600.svg" alt="Photo of Daniel Scott." />
                        </div>
                        {/* <!-- info --> */}
                        <div className={styles.info}>
                            <h3>About the Author</h3>
                            <h4>Hi, I'm Daniel JS</h4>
                            <p>
                                Just my luck, no ice. Eventually, you do plan to have dinosaurs on your dinosaur tour,
                                right? Must go faster... go, go, go, go, go! You really think you can fly that thing?
                                Checkmate... What do they got in there? King Kong? Checkmate... You're a very talented
                                young man, with your own clever thoughts and ideas. Do you need a manager?
                            </p>
                        </div>
                    </div>
                </section>
                {/* <!-- end about the author section -->
        <!-- contact section --> */}
                <section className={styles.contact_section} id="contact">
                    <div className={styles.contact_div}>
                        {/* <!-- form --> */}
                        <div className={styles.form}>
                            <h4 className={styles.mg_b}>Contact Me</h4>
                            <form action="/submit-your-form" method="post">
                                <fieldset className="no_border">
                                    <legend className="opacity_z no_size">Type in your info to contact me</legend>
                                    <label className="opacity_z no_size" htmlFor="name">
                                        Enter your name.
                                    </label>
                                    <input
                                        className={`${styles.text_box} ${styles.text_i} better_focus`}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                    />

                                    <label className="opacity_z no_size" htmlFor="email">
                                        Enter your email.
                                    </label>
                                    <input
                                        className={`${styles.text_box} ${styles.text_i} better_focus`}
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                    />

                                    <label className="opacity_z no_size" htmlFor="message">
                                        Enter a message.
                                    </label>
                                    <textarea
                                        className={`${styles.text_area} ${styles.text_i} better_focus`}
                                        id="message"
                                        name="message"
                                        placeholder="Enter your message"
                                    ></textarea>

                                    <input
                                        type="submit"
                                        value="Submit"
                                        aria-label="Submit contact form."
                                        className={`${styles.submit_button} hover better_focus`}
                                    />
                                </fieldset>
                            </form>
                        </div>
                        {/* <!-- socials --> */}
                        <div>
                            <h4 className={styles.mg_b}>Follow Me On Social Media</h4>
                            <div className={styles.social_icons}>
                                <a href="#" className="better_focus">
                                    {/** TODO: descriptive text in alt property needed here in actual image */}
                                    <img src="/linkedin.svg" alt="linkedin logo." />
                                </a>
                                <a href="#" className="better_focus">
                                    {/** TODO: descriptive text in alt property needed here in actual image */}
                                    <img src="/linkedin.svg" alt="linkedin logo." />
                                </a>
                                <a href="#" className="better_focus">
                                    {/** TODO: descriptive text in alt property needed here in actual image */}
                                    <img src="/linkedin.svg" alt="linkedin logo." />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end contact section -->
        <!-- footer --> */}
                <footer className={styles.footer_section}>
                    <p>Copyright All Rights Reserved</p>
                    <ButtonSec text="Back To Top" link="#nav" />
                </footer>
            </main>
        </>
    );
}
