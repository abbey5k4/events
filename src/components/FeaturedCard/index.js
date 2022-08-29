import React, { useState } from "react";
import styles from "./index.module.css";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const FeaturedCard = () => {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="pt-1 pb-3 px-3">
      <div className={`card ${styles.cardBg}`}>
        <div className="card-body">
          <div className="card-title">
            <div className="d-flex justify-content-between">
              <div></div>
              <div className={`bg-white ${styles.badgeDiv}`}>
                <p>19</p>
                <p>APR</p>
              </div>
            </div>
          </div>
          <div>
            <div className="px-1 text-white pt-5 pb-2">
              <h6 className={styles.cardContent}>
                American Association of Neurological Surgeons (AANS) 2021 Annual
                Scientific Meeting
              </h6>

              <div className="d-flex justify-content-between pt-2">
                <div className="d-flex">
                  <ImLocation2 className={styles.iconStyle} />
                  <p className={styles.location}>Medical House, SK, Canada</p>
                </div>
                <div className="" onClick={() => setBookmark(!bookmark)}>
                  {bookmark ? (
                    <BsBookmarkFill className={styles.iconStyleTwo} />
                  ) : (
                    <BsBookmark className={styles.iconStyleTwo} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
