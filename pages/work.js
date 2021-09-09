import styles from "../styles/work.module.css";
import TxtImgCard from "../comps/TxtImgCard";
import FooterHero from "../comps/FooterHero";
import Toast from "../comps/Toast";

export default function Work() {
  return (
    <>
      <section className={styles.work}>
        <h1>Job Offers</h1>

        <Toast
          workName="CEO"
          pubDate="20.07.21"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis, iste repellendus praesentium mollitia quis!"
          workDate="01.08.21"
        />
        <Toast
          workName="CTO"
          pubDate="21.07.21"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis, iste repellendus praesentium mollitia quis!"
          workDate="01.09.21"
        />
        <TxtImgCard
          subheading=""
          heading="Join Our Team"
          desccription="We are looking forward to receiving your application."
          link="/contact"
          imgName="images/team.jpg"
          ctaText="Contact Us"
        />
      </section>
      <FooterHero />
    </>
  );
}
