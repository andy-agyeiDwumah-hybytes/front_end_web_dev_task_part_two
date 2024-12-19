// Styles
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ profileUserName, profileUserBio, profileUserImg }) {
  return (
    <main className={styles.main}>
      <div className={styles.profileCardContainer}>
        <div>
          <img src={profileUserImg} alt="Profile image" className={styles.profileImg} />
        </div>
        <div className={styles.profileTextContainer}>
          <h1 className={styles.heading}>Hi, I&apos;m {profileUserName}</h1>
          <p className={styles.para}>{profileUserBio}</p>
        </div>
      </div>
    </main>
  );
}