import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import Image from "next/image";

const NavigationBar = ({ displayMode }) => {
  const [mobState, setMobState] = React.useState(false);
  const handleMobileNav = () => {
    setMobState(() => !mobState);
  };
  return (
    <div className="container-fluid">
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/path2.png"
            alt="company logo"
            width={50}
            height={50}
          />
        </div>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search for events"
          className={` d-${displayMode} ${styles.inputField}`}
        />
        <nav className={mobState ? styles.add : styles.remove}>
          <ul className={styles.listList}>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT US</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>CONTACT US</a>
              </Link>
            </li>
            <li className={styles.signIn}>
              <Link href="/signIn/clinical">
                <a>SIGN IN</a>
              </Link>
            </li>
            <li className={styles.signUp}>
              <Link href="/signUp/clinical">
                <a>SIGN UP</a>
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
    </div>
  );
};

export default NavigationBar;
