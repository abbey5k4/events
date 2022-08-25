import Link from "next/link";
import React, { useState } from "react";
import styles from "./index.module.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const closedMobileMenu = () => {
    setClick(false);
    // history.push("/login");
  };
  return (
    <div>
      <>
        <nav className={styles.navbar}>
          <Link
            href="#"
            className={styles.navbarLogo}
            // onClick={closeMobileMenu}
          >
            {/* <img src={logo} alt="dyverseLogo" /> */}Hi
          </Link>
          {/* the hamburger menu */}
          <div 
          className={styles.menuIcon} 
        //   onClick={handleClick}
          >
            <i
              className={
                click ? <MdOutlineCancelPresentation /> : <HiMenuAlt3 />
              }
            />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li className={styles.navItem}>
              <Link
                href="#"
                className={styles.navLinks}
                // onClick={closeMobileMenu}
              >
                Our Mission
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link
                href="#"
                className={styles.navLinks}
                // onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#"
                className={styles.navLinks}
                // onClick={closeMobileMenu}
              >
                How it Works
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="#"
                className={styles.navLinks}
                // onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className={`${styles.navItem} ${styles.styleLogIn}`}>
              <Link
                href="#"
                className={`${styles.navLinks} ${styles.style}`}
                // onClick={closedMobileMenu}
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={styles.navLinksMobile}
                // onClick={closedMobileMenu}
              >
                Log in
              </Link>
            </li>
          </ul>
          {/* <Button /> */}
        </nav>
      </>
    </div>
  );
};

export default Nav;
