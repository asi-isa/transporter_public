import FooterHero from "../comps/FooterHero";
import Hero from "../comps/Hero";
import OutstandingSection from "../comps/OutstandingSection";
import PictureSection from "../comps/PictureSection";
import TxtImgCard from "../comps/TxtImgCard";

export default function Home() {
  return (
    <>
      <Hero />
      <OutstandingSection />
      <PictureSection>
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/"
          imgName="images/highway.jpg"
        />
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/"
          imgName="images/germany-map.jpg"
        />
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/"
          imgName="images/planer.jpg"
        />
        <TxtImgCard
          subheading="Lorem, ipsum dolor."
          heading="Our Perfect Solution for our Costumers"
          desccription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium debitis quidem sed labore! Exercitationem, suscipit?"
          link="/"
          imgName="images/home.jpg"
        />
      </PictureSection>
      <FooterHero />
    </>
  );
}
