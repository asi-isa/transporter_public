import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";
import * as cs from "classnames";
import Logo from "../Logo";
import {
  AiTwotoneHome,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { MdWork, MdContactPhone } from "react-icons/md";
import { BsFillPeopleFill, BsCheckBox } from "react-icons/bs";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function toggleHamMenu() {
    setIsActive(!isActive);
  }
  // close menu when link is clicked
  function closeHamMenu() {
    console.log("pressed");
    setIsActive(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <Logo />
            <div
              className={cs(styles.ham, isActive && styles.active)}
              onClick={toggleHamMenu}
            ></div>

            <ul className={cs(styles.links, isActive && styles.active)}>
              <li className={styles.link_container} onClick={closeHamMenu}>
                {isActive && <AiTwotoneHome />}
                <Link href="/">
                  <a className={styles.link}>home</a>
                </Link>
              </li>
              <li className={styles.link_container} onClick={closeHamMenu}>
                {isActive && <BsFillPeopleFill />}
                <Link href="/about">
                  <a className={styles.link}>about us</a>
                </Link>
              </li>
              <li className={styles.link_container} onClick={closeHamMenu}>
                {isActive && <BsCheckBox />}
                <Link href="/#solutionSection">
                  <a className={styles.link}>solutions</a>
                </Link>
              </li>
              <li className={styles.link_container} onClick={closeHamMenu}>
                {isActive && <MdWork />}
                <Link href="/work">
                  <a className={styles.link}>work with us</a>
                </Link>
              </li>
              <li className={styles.link_container} onClick={closeHamMenu}>
                {isActive && <MdContactPhone />}
                <Link href="/contact">
                  <a className={styles.link}>contact us</a>
                </Link>
              </li>
            </ul>

            <ul className={cs(styles.social_links, isActive && styles.active)}>
              <li className={styles.link_container}>
                <a className={styles.social_link}>
                  <AiFillFacebook />
                </a>
              </li>
              <li className={styles.link_container}>
                <a className={styles.social_link}>
                  <AiFillInstagram />
                </a>
              </li>
              <li className={styles.link_container}>
                <a className={styles.social_link}>
                  <AiFillTwitterCircle />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
