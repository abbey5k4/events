import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import Image from "next/image";


const NavigationBar = () => {
  const [mobState, setMobState] = React.useState(false);
  const handleMobileNav = () => {
    setMobState(() => !mobState);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/assets/path2.png" alt="company logo" width={50} height={50} />
      </div>
      <input
        type="text"
        name="search"
        id=""
        placeholder="Search..."
        className={styles.inputField}
      />
      <nav className={mobState ? styles.add : styles.remove}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
          <li className={styles.signIn}>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </li>
          <li className={styles.signUp}>
            <Link href="/sign-up">
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.mobMenu}>
        {!mobState ? (
          <CgMenuRightAlt
            size={30}
            cursor="pointer"
            onClick={handleMobileNav}
          />
        ) : (
          <CgClose size={30} cursor="pointer" onClick={handleMobileNav} />
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
