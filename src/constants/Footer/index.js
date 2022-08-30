import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className={`container-fluid ${styles.footerWrapper}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="imgHolders">
                {/* <img src={Logo} alt="Logo-img" /> */}
                <Image src="/assets/path1.png" alt="company logo" width={50} height={50} />
              </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <p className={styles.heading}>Connect with Us</p>

              <div
                className="d-flex justify-content-between"
              >
                <div className="d-flex">
                  <div className={styles.iconContainer}>
                    <GrFacebookOption />
                  </div>
                  <div className={styles.iconContainer}>
                    <AiOutlineTwitter />
                  </div>
                  <div className={styles.iconContainer}>
                    <BsInstagram />
                  </div>
                  <div className={styles.iconContainer}>
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div>
                <p className={styles.copy}>
                  &copy; {new Date().getFullYear()} PACE APP
                </p>
              </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <div className={styles.quickLink}>
                <Link href="#">Q &amp; A </Link>
              </div>
              <div className={styles.quickLink}>
                <Link href="#">Testimonials</Link>
              </div>
              <div className={styles.quickLink}>
                <Link href="#">Request a Demo</Link>
              </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <div className={styles.quickLink}>
                <Link href="#">About Us</Link>
              </div>
              <div className={styles.quickLink}>
                <Link href="#">Contact Us</Link>
              </div>
              <div className={styles.quickLink}>
                <Link href="#">Legal</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
