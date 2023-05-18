import { FunctionComponent } from "react";
import styles from "./TeamCircles.module.css";
const TeamCircles: FunctionComponent = () => {
  return (
    <div className={styles.teamCircles}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <b className={styles.teamSection}>Team section</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Quisque quis euismod lorem.
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCircles;
