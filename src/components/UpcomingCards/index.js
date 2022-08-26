import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

const UpcomingCard = () => {
  return (
    <div className="pb-5">
      <div className={`card ${styles.cardDiv}`}>
        <Image
          src="/assets/doc.jpg"
          alt="card-img"
          className="card-img-top"
          width={480}
          height={270}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">ABC Conference</h5>
          <p className="card-text text-primary">Mar 10 -12, 2021</p>
          <p className="card-text">
            {" "}
            Manhattan Ballroom, SK-5, Saskatoon, SK S7K 1P3
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
