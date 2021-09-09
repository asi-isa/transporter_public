import styles from "../styles/about.module.css";

import FooterHero from "../comps/FooterHero";
import ProfileCard from "../comps/ProfileCard";
import TxtImgCard from "../comps/TxtImgCard";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.about_header}>About Us</h1>
      <div className={styles.profile_cards}>
        <ProfileCard
          img="images/face11.jpg"
          name="Lora Ipsum"
          position="CTO"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sed."
        />
        <ProfileCard
          img="images/face22.jpg"
          name="Lora Ipsum"
          position="CTO"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sed."
        />
        <ProfileCard
          img="images/face33.jpg"
          name="Lora Ipsum"
          position="CTO"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sed."
        />
        <ProfileCard
          img="images/face44.jpg"
          name="Lora Ipsum"
          position="CTO"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sed."
        />
      </div>
      <section className={styles.about_section}>
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/contact"
          imgName="images/package.jpg"
        />
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/contact"
          imgName="images/package2.jpg"
        />
      </section>
      <FooterHero />
    </section>
  );
}
