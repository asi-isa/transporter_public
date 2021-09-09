import styles from "./OutstandingSection.module.css";

import { BiRocket } from "react-icons/bi";
import { AiOutlineSafety, AiOutlineStar } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import OutstandingCard from "./OutstandingCard";

export default function OutstandingSection() {
  return (
    <div className="container">
      <section className={styles.outstanding}>
        <h2 className={styles.outstanding_title}>What characterises us</h2>
        <p className={styles.outstanding_desc}>
          Lorem ipsum dolor sit elit. Ut, eaque maiores delectus magni totam
          inventore?
        </p>
        <div className={styles.outstanding_cards}>
          <OutstandingCard
            logo={BiRocket()}
            title="Incredible Fast"
            description="Lorem ipsum dolor sit elit. Nesciunt
            architecto dolore, in placeat?"
          />
          <OutstandingCard
            logo={AiOutlineSafety()}
            title="Secure Transports"
            description="Lorem ipsum dolor sit elit. Nesciunt
            architecto dolore, in placeat?"
          />
          <OutstandingCard
            logo={AiOutlineStar()}
            title="Premium Service"
            description="Lorem ipsum dolor sit elit. Nesciunt
            architecto dolore, in placeat?"
          />
          <OutstandingCard
            logo={FaPeopleCarry()}
            title="Customer Friendly"
            description="Lorem ipsum dolor sit elit. Nesciunt
            architecto dolore, in placeat?"
          />
        </div>
      </section>
    </div>
  );
}
