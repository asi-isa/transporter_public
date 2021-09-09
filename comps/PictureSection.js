import styles from "./PictureSection.module.css";

import TxtImgCard from "./TxtImgCard";

export default function PictureSection({ children }) {
  // truncate string if to large
  return (
    <section className={styles.pictureSection} id="solutionSection">
      {children}
    </section>
  );
}
