import React from "react";
import styles from "../../../styles/homePage/featured.module.css";
import FirstRow from "./row/FirstRow";
import SecondRow from "./row/SecondRow";
import ThirdRow from "./row/ThirdRow";
import InfoRow from "./row/InfoRow";
import ExtraTag from "./row/ExtraTag";

function FeatureCard(props) {
  return (
    <div className={styles.featureCardContainer}>
      <FirstRow
        mainIcon={props.value.mainIcon}
        name={props.value.name}
        bookMarkIcon={props.value.bookMarkIcon}
      />

      <SecondRow
        desc={props.value.desc}
        rating={props.value.rating}
        reviews={props.value.reviews}
      />

      <ThirdRow tags={props.value.tags} hoursAgo={props.value.hoursAgo} />
      <InfoRow extraInfo={props.value.extraInfo} />
      <hr />
      <ExtraTag extraTags={props.value.extraTags} />
      <hr />
      <button>
        APPLY NOW <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default FeatureCard;
