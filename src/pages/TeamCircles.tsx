import { FunctionComponent } from "react";
import styles from "./TeamCircles.module.css";
const TeamCircles: FunctionComponent = () => {
  return (
    <div className={styles.teamCircles}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <b className={styles.teamSection}>Team section</b>
          <div className={styles.loremIpsumDolorContainer}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse `}</p>
            <p className={styles.loremIpsumDolor}>
              tincidunt sagittis eros. Quisque quis euismod lorem.
            </p>
          </div>
        </div>
        <article className={styles.columns}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.loremIpsumDolorContainer}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Suspendisse varius enim in
                </p>
                <p className={styles.loremIpsumDolor}>
                  eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.description1}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className={styles.loremIpsumDolor}>
                  {" "}
                  adipiscing elit. Suspendisse varius enim in
                </p>
                <p className={styles.loremIpsumDolor}>
                  {" "}
                  eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <b className={styles.fullName}>Full name</b>
                <div className={styles.jobTitle}>Job title</div>
              </div>
              <div className={styles.description1}>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className={styles.loremIpsumDolor}>
                  {" "}
                  adipiscing elit. Suspendisse varius enim in
                </p>
                <p className={styles.loremIpsumDolor}>
                  {" "}
                  eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TeamCircles;
