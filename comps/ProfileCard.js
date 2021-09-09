import styles from "./ProfileCard.module.css";

export default function ProfileCard({ img, name, position, description }) {
  return (
    <article className={styles.profile_card}>
      <div
        className={styles.img_container}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
